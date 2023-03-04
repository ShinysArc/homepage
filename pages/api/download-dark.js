import Chromium from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'

const LOCAL_CHROME_EXECUTABLE = '/usr/lib/chromium/chromium';

const download = async (req, res) => {
  const executablePath = (await Chromium.executablePath) || LOCAL_CHROME_EXECUTABLE
  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: Chromium.args,
  })

  const page = await browser.newPage()
  await page.goto(`https://stephanegelibert.com/resume-content`, { waitUntil: 'networkidle2' })
  await page.emulateMediaFeatures([{
  name: 'prefers-color-scheme', value: 'dark' }]);

  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true,
    pageRanges: '1',
  })

  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"')
  res.send(pdf)

  await browser.close()
}

export default download
