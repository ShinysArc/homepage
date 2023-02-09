import puppeteer from 'puppeteer'
import fs from 'fs'

export default async (req, res) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(`http://localhost:3000/resume`, { waitUntil: 'networkidle2' })

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

  fs.writeFileSync('public/resume.html', html)

  await page.goto(`file://${process.cwd()}/public/resume.html`, { waitUntil: 'networkidle2' })

  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true
  });

  fs.unlinkSync('public/resume.html')

  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"')
  res.send(pdf)

  await browser.close()
}