import puppeteer from 'puppeteer'

const download = async (req, res) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [   '--disable-features=IsolateOrigins',
            '--disable-site-isolation-trials',
            '--autoplay-policy=user-gesture-required',
            '--disable-background-networking',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-breakpad',
            '--disable-client-side-phishing-detection',
            '--disable-component-update',
            '--disable-default-apps',
            '--disable-dev-shm-usage',
            '--disable-domain-reliability',
            '--disable-extensions',
            '--disable-features=AudioServiceOutOfProcess',
            '--disable-hang-monitor',
            '--disable-ipc-flooding-protection',
            '--disable-notifications',
            '--disable-offer-store-unmasked-wallet-cards',
            '--disable-popup-blocking',
            '--disable-print-preview',
            '--disable-prompt-on-repost',
            '--disable-renderer-backgrounding',
            '--disable-setuid-sandbox',
            '--disable-speech-api',
            '--disable-sync',
            '--disable-gpu',
            '--hide-scrollbars',
            '--ignore-gpu-blacklist',
            '--metrics-recording-only',
            '--mute-audio',
            '--no-default-browser-check',
            '--no-first-run',
            '--no-pings',
            '--no-sandbox',
            '--no-zygote',
            '--password-store=basic',
            '--use-gl=swiftshader',
            '--use-mock-keychain']
  })

  const page = await browser.newPage()
  await page.goto(`https://stephanegelibert.com/resume`, { waitUntil: 'networkidle2' })
  const { theme } = req.query;
  await page.emulateMediaFeatures([{
    name: 'prefers-color-scheme', value: theme
  }]);
  await page.evaluate(() => {
    const navElement = document.querySelector('nav');
    if (navElement) {
      navElement.style.display = 'none';
    }
  });

  await page.evaluate(() => {
    const articleElement = document.querySelector('article');

    if (articleElement) {
      articleElement.style.marginTop = '-63.25px';
      articleElement.style.marginLeft = '-31px';

      const buttonElement = articleElement.querySelector('button');
      if (buttonElement) {
        buttonElement.style.display = 'none';
      }
    }
  });

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
