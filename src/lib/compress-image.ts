import imageCompression from "browser-image-compression";

export async function compressImage(
    file: File,
    options: {
        maxSizeMB?: number;
        maxWidthOrHeight?: number;
        useWebWorker?: boolean;
        onProgress?: (progress: number) => void;
    }
) {
    return await imageCompression(file, {
        maxSizeMB: options.maxSizeMB || 1,
        maxWidthOrHeight: options.maxWidthOrHeight || 1920,
        useWebWorker: true,
        onProgress: options.onProgress,
    });
}
