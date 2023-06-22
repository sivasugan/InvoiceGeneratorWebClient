import html2pdf from 'html2pdf.js';


export class PdfGenerator{

    downloadPdfFromHtml(pdfObject, htmlData){

        const options = {
            filename: pdfObject.InvoiceNumber,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };

        html2pdf().set(options).from(htmlData).save();
    }
}