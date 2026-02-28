import { PDFDocument } from "pdf-lib";

export async function mergePdfs(
    files: File[],
    onProgress?: (progress: number) => void
) {
    const mergedPdf = await PDFDocument.create();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (onProgress) onProgress(((i) / files.length) * 100);

        const pdfBytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(pdfBytes);

        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    if (onProgress) onProgress(100);

    const mergedPdfBytes = await mergedPdf.save();
    return new Blob([mergedPdfBytes as any], { type: "application/pdf" });
}
