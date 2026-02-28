import { jsPDF } from "jspdf";

export async function convertImagesToPdf(
    files: File[],
    options: {
        pageSize: "a4" | "letter";
        orientation: "portrait" | "landscape";
        onProgress?: (progress: number) => void;
    }
) {
    const { pageSize, orientation, onProgress } = options;
    const doc = new jsPDF({
        orientation: orientation,
        unit: "px",
        format: pageSize,
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (onProgress) onProgress(((i) / files.length) * 100);

        const imgData = await fileToDataURL(file);
        const imgProps = doc.getImageProperties(imgData);

        // Calculate scaling to fit page while maintaining aspect ratio
        const ratio = Math.min(pageWidth / imgProps.width, pageHeight / imgProps.height);
        const width = imgProps.width * ratio;
        const height = imgProps.height * ratio;
        const x = (pageWidth - width) / 2;
        const y = (pageHeight - height) / 2;

        if (i > 0) doc.addPage(pageSize, orientation);
        doc.addImage(imgData, "JPEG", x, y, width, height, undefined, "FAST");
    }

    if (onProgress) onProgress(100);

    return doc.output("blob");
}

function fileToDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
