import puppeteer from 'puppeteer';

export default async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`http://localhost:3000/resume`, { waitUntil: 'networkidle2' });

  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true
  });

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="resume.pdf"');
  res.send(pdf);

  await browser.close();
};