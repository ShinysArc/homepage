import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'

const download = async (req, res) => {
  const string = process.cwd() + '/public/chromium'
  const options = {
    args: chromium.args,
    executablePath: await chromium.executablePath(string),
    headless: true,
  }

  const browser = await puppeteer.launch(options)

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