"use client";

import React, { useState } from "react";
import { FileUpload } from "@/components/ui/FileUpload";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { mergePdfs } from "@/lib/merge-pdf";
import { FileText, Download, Trash2, ArrowUp, ArrowDown, Merge } from "lucide-react";

export function MergePdfClient() {
    const [files, setFiles] = useState<File[]>([]);
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

    const handleMerge = async () => {
        if (files.length === 0) return;
        setIsProcessing(true);
        setProgress(0);

        try {
            const blob = await mergePdfs(files, (p) => setProgress(p));
            const url = URL.createObjectURL(blob);
            setDownloadUrl(url);
        } catch (error) {
            console.error("Merge failed", error);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-full h-24 bg-card border border-border flex items-center justify-center text-foreground/20 italic rounded-xl">
                Advertisement Slot
            </div>

            <div className="card-premium">
                <FileUpload
                    onFilesSelected={onFilesSelected}
                    accept="application/pdf"
                    label="Add PDF Files to Merge"
                    description="Drag more PDFs to add them to the list"
                />

                {files.length > 0 && (
                    <div className="mt-12 space-y-8 animate-in fade-in duration-500">
                        <div className="space-y-3">
                            <h3 className="font-bold flex items-center space-x-2">
                                <Merge className="w-5 h-5 text-indigo-500" />
                                <span>Merge Order ({files.length} files)</span>
                            </h3>
                            <div className="space-y-2">
                                {files.map((file, index) => (
                                    <div key={`${file.name}-${index}`} className="flex items-center justify-between p-4 bg-card border border-border rounded-xl group hover:border-primary/40 transition-colors">
                                        <div className="flex items-center space-x-4 overflow-hidden">
                                            <div className="bg-indigo-500/10 p-2 rounded-lg text-indigo-500">
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

                        <div className="pt-6 border-t border-border flex flex-col items-center space-y-6">
                            {!isProcessing && !downloadUrl && (
                                <button
                                    onClick={handleMerge}
                                    disabled={files.length < 2}
                                    className="btn-primary w-full py-4 text-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {files.length < 2 ? "Upload at least 2 files" : "Merge PDFs Now"}
                                </button>
                            )}

                            {isProcessing && (
                                <ProgressBar progress={progress} label="Combining documents..." />
                            )}

                            {downloadUrl && (
                                <div className="w-full animate-in zoom-in duration-300">
                                    <a
                                        href={downloadUrl}
                                        download="merged.pdf"
                                        className="flex items-center justify-center space-x-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg"
                                    >
                                        <Download className="w-6 h-6" />
                                        <span>Download Merged PDF</span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full h-24 bg-card border border-border flex items-center justify-center text-foreground/20 italic rounded-xl">
                Advertisement Slot
            </div>
        </div>
    );
}
