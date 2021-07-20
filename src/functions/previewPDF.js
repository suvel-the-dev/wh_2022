import { jsPDF } from 'jspdf'
const getPDF = (data) => {
    const lineOffSet = 40
    const dataSplittedByLine = data.trim().split('\n')
    const doc = new jsPDF()
    for (let start = 0; start < dataSplittedByLine.length; start += lineOffSet) {
        const str = dataSplittedByLine.slice(start, lineOffSet + start)
        str.join('\n')
        doc.text(str, 10, 10)
        if (start + lineOffSet < dataSplittedByLine.length) {
            doc.addPage()
        }
    }
    doc.output('dataurlnewwindow',{filename:'export'});
}

export default getPDF;