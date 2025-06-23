import puppeteer from 'puppeteer';


export const handler = async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const PORT = 5173
    const page = await browser.newPage();
    const targetURL = `http://localhost:${PORT}`;

    await page.goto(targetURL, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
        format: 'A4',
        margin: {
            top: '40px',
            bottom: '40px',
            left: '40px',
            right: '40px',
        },
        preferCSSPageSize: true // Respect @page CSS rules if used
    });

    await browser.close();

   return {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="Ricky_Luu_CV.pdf"',
        },
        statusCode: 200,
        body: Buffer.from(pdfBuffer).toString('base64'),
        isBase64Encoded: true,
   };
};
