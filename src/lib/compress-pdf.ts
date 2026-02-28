import { PDFDocument } from "pdf-lib";

export async function compressPdf(
    file: File,
    level: "low" | "medium" | "high",
    onProgress?: (progress: number) => void
) {
    if (onProgress) onProgress(10);

    const pdfBytes = await file.arrayBuffer();
    if (onProgress) onProgress(30);

    const pdfDoc = await PDFDocument.load(pdfBytes);
    if (onProgress) onProgress(60);

    // Note: True PDF compression is extremely complex client-side.
    // We'll use PDF-lib's built-in optimizations as a baseline.
    // Real-world compression often requires server-side tools like Ghostscript.
    // For this client-side version, we'll focus on saving with optimizations.

    const compressedBytes = await pdfDoc.save({
        useObjectStreams: true,
        addDefaultPage: false,
        updateFieldAppearances: false,
    });

    if (onProgress) onProgress(100);

    return new Blob([compressedBytes as any], { type: "application/pdf" });
}
