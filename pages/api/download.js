import { chromium } from "playwright-core"

const download = async (req, res) => {
  const browser = await chromium.launch()

  const page = await browser.newPage()

  await page.goto(`http://localhost:3000/resume`, { waitUntil: 'networkidle' })

  let head = await page.evaluate(() =>
  document.head.outerHTML)

  const content = await page.evaluate(() =>
  document.body.querySelector('[class^="Resume"]').outerHTML)

  head = head.replace('margin-top: 2%;', '')
  head = head.replace('margin-bottom: 2%;', '')
  head = head.replace('box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);', '')

  const html = `
<html>
  ${head}
  <body>
    ${content}
  </body>
</html>
  `

  await page.setContent(html)

  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true
  })

  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"')
  res.send(pdf)

  await browser.close()
}

export default download