import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

export default function printHtml(){
    let div = document.getElementById('cv_div')
    const quality = 1 // Higher the better but larger file
    html2canvas(div,
        { scale: quality }
    ).then(canvas => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
        pdf.save('test.pdf');
    });
}
