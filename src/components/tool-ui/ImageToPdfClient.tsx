"use client";

import React, { useState } from "react";
import { FileUpload } from "@/components/ui/FileUpload";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { convertImagesToPdf } from "@/lib/image-to-pdf";
import { FileText, Download, Trash2, ArrowUp, ArrowDown, Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImageToPdfClient() {
    const [files, setFiles] = useState<File[]>([]);
    const [pageSize, setPageSize] = useState<"a4" | "letter">("a4");
    const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

    const onFilesSelected = (newFiles: File[]) => {
        setFiles((prev) => [...prev, ...newFiles]);
        setDownloadUrl(null);
    };

    const removeFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
        setDownloadUrl(null);
    };

    const moveFile = (index: number, direction: "up" | "down") => {
        const newFiles = [...files];
        const targetIndex = direction === "up" ? index - 1 : index + 1;
        if (targetIndex >= 0 && targetIndex < newFiles.length) {
            [newFiles[index], newFiles[targetIndex]] = [newFiles[targetIndex], newFiles[index]];
            setFiles(newFiles);
        }
    };

    const handleConvert = async () => {
        if (files.length === 0) return;
        setIsProcessing(true);
        setProgress(0);

        try {
            const blob = await convertImagesToPdf(files, {
                pageSize,
                orientation,
                onProgress: (p) => setProgress(p),
            });

            const url = URL.createObjectURL(blob);
            setDownloadUrl(url);
        } catch (error) {
            console.error("Conversion failed", error);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Ad Slot Placeholder */}
            <div className="w-full h-24 bg-card border border-border flex items-center justify-center text-foreground/20 italic rounded-xl">
                Advertisement Slot
            </div>

            <div className="card-premium">
                <FileUpload
                    onFilesSelected={onFilesSelected}
                    accept="image/jpeg,image/png,image/webp"
                    label="Add Images to PDF"
                    description="Supports JPG, PNG, and WEBP"
                />

                {files.length > 0 && (
                    <div className="mt-12 space-y-8 animate-in fade-in duration-500">
                        {/* Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-secondary/5 border border-border">
                            <div className="space-y-4">
                                <label className="flex items-center space-x-2 font-bold text-sm uppercase tracking-wider opacity-60">
                                    <Settings2 className="w-4 h-4" />
                                    <span>Page Size</span>
                                </label>
                                <div className="flex space-x-2">
                                    {(["a4", "letter"] as const).map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setPageSize(size)}
                                            className={cn(
                                                "flex-1 py-3 px-4 rounded-xl border-2 transition-all font-bold uppercase text-xs tracking-widest",
                                                pageSize === size ? "border-primary bg-primary/10 text-primary shadow-sm" : "border-border hover:border-primary/30"
                                            )}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="flex items-center space-x-2 font-bold text-sm uppercase tracking-wider opacity-60">
                                    <Settings2 className="w-4 h-4" />
                                    <span>Orientation</span>
                                </label>
                                <div className="flex space-x-2">
                                    {(["portrait", "landscape"] as const).map((o) => (
                                        <button
                                            key={o}
                                            onClick={() => setOrientation(o)}
                                            className={cn(
                                                "flex-1 py-3 px-4 rounded-xl border-2 transition-all font-bold uppercase text-xs tracking-widest",
                                                orientation === o ? "border-primary bg-primary/10 text-primary shadow-sm" : "border-border hover:border-primary/30"
                                            )}
                                        >
                                            {o}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* File List */}
                        <div className="space-y-3">
                            <h3 className="font-bold flex items-center space-x-2">
                                <FileText className="w-5 h-5" />
                                <span>Selected Images ({files.length})</span>
                            </h3>
                            <div className="space-y-2">
                                {files.map((file, index) => (
                                    <div key={`${file.name}-${index}`} className="flex items-center justify-between p-4 bg-card border border-border rounded-xl group hover:border-primary/40 transition-colors">
                                        <div className="flex items-center space-x-4 overflow-hidden">
                                            <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <span className="truncate font-medium">{file.name}</span>
                                            <span className="text-xs text-foreground/40 shrink-0">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                                        </div>

                                        <div className="flex items-center space-x-1">
                                            <button onClick={() => moveFile(index, "up")} disabled={index === 0} className="p-2 hover:bg-secondary/10 rounded-lg disabled:opacity-20">
                                                <ArrowUp className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => moveFile(index, "down")} disabled={index === files.length - 1} className="p-2 hover:bg-secondary/10 rounded-lg disabled:opacity-20">
                                                <ArrowDown className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => removeFile(index)} className="p-2 hover:bg-accent/10 text-accent rounded-lg">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Area */}
                        <div className="pt-6 border-t border-border flex flex-col items-center space-y-6">
                            {!isProcessing && !downloadUrl && (
                                <button
                                    onClick={handleConvert}
                                    className="btn-primary w-full py-4 text-lg"
                                >
                                    Convert to PDF
                                </button>
                            )}

                            {isProcessing && (
                                <ProgressBar progress={progress} label="Converting images..." status="Processing handles best quality" />
                            )}

                            {downloadUrl && (
                                <div className="w-full animate-in zoom-in duration-300">
                                    <a
                                        href={downloadUrl}
                                        download="converted.pdf"
                                        className="flex items-center justify-center space-x-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <Download className="w-6 h-6" />
                                        <span>Download PDF</span>
                                    </a>
                                    <button
                                        onClick={() => { setFiles([]); setDownloadUrl(null); }}
                                        className="mt-4 w-full text-center text-sm text-foreground/40 hover:text-foreground transition-colors"
                                    >
                                        Start Over
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Ad Slot Placeholder */}
            <div className="w-full h-24 bg-card border border-border flex items-center justify-center text-foreground/20 italic rounded-xl">
                Advertisement Slot
            </div>
        </div>
    );
}
