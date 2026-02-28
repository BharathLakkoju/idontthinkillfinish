"use client";

import React, { useState } from "react";
import { FileUpload } from "@/components/ui/FileUpload";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SizeComparison } from "@/components/ui/SizeComparison";
import { compressPdf } from "@/lib/compress-pdf";
import { FileArchive, Download, Settings, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function CompressPdfClient() {
    const [file, setFile] = useState<File | null>(null);
    const [level, setLevel] = useState<"low" | "medium" | "high">("medium");
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState<{ blob: Blob; url: string; size: number } | null>(null);

    const onFilesSelected = (files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
            setResult(null);
        }
    };

    const handleCompress = async () => {
        if (!file) return;
        setIsProcessing(true);
        setProgress(0);

        try {
            const compressedBlob = await compressPdf(file, level, (p) => setProgress(p));
            const url = URL.createObjectURL(compressedBlob);
            setResult({ blob: compressedBlob, url, size: compressedBlob.size });
        } catch (error) {
            console.error("Compression failed", error);
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
                {!file ? (
                    <FileUpload
                        onFilesSelected={onFilesSelected}
                        accept="application/pdf"
                        multiple={false}
                        label="Upload PDF to Compress"
                        description="Reduce file size while keeping quality"
                    />
                ) : (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        {/* File Info */}
                        <div className="flex items-center justify-between p-6 bg-secondary/5 rounded-2xl border border-border">
                            <div className="flex items-center space-x-4">
                                <div className="bg-violet-500/10 p-3 rounded-xl text-violet-500">
                                    <FileArchive className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold truncate max-w-xs">{file.name}</p>
                                    <p className="text-sm text-foreground/40">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                            </div>
                            <button
                                onClick={() => { setFile(null); setResult(null); }}
                                className="text-sm font-semibold text-accent hover:underline"
                            >
                                Change File
                            </button>
                        </div>

                        {/* Compression Levels */}
                        <div className="space-y-4">
                            <label className="flex items-center space-x-2 font-bold text-sm uppercase tracking-wider opacity-60">
                                <Settings className="w-4 h-4" />
                                <span>Compression Level</span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { id: "low", label: "Low", desc: "Best Quality", icon: Zap },
                                    { id: "medium", label: "Medium", desc: "Balanced", icon: Settings },
                                    { id: "high", label: "High", desc: "Smallest Size", icon: FileArchive },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setLevel(item.id as any)}
                                        className={cn(
                                            "p-4 rounded-2xl border-2 text-left transition-all",
                                            level === item.id
                                                ? "border-violet-500 bg-violet-500/5 shadow-sm"
                                                : "border-border hover:border-violet-500/30"
                                        )}
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-bold">{item.label}</span>
                                            <item.icon className={cn("w-4 h-4", level === item.id ? "text-violet-500" : "text-foreground/20")} />
                                        </div>
                                        <p className="text-xs text-foreground/50">{item.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Area */}
                        <div className="pt-6 border-t border-border flex flex-col items-center space-y-6">
                            {!isProcessing && !result && (
                                <button
                                    onClick={handleCompress}
                                    className="btn-primary w-full py-4 text-lg bg-violet-600 hover:bg-violet-700"
                                >
                                    Compress PDF
                                </button>
                            )}

                            {isProcessing && (
                                <ProgressBar progress={progress} label="Shrinking PDF..." />
                            )}

                            {result && (
                                <div className="w-full space-y-8 animate-in zoom-in duration-300">
                                    <SizeComparison originalSize={file.size} compressedSize={result.size} />

                                    <a
                                        href={result.url}
                                        download={`compressed_${file.name}`}
                                        className="flex items-center justify-center space-x-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.01]"
                                    >
                                        <Download className="w-6 h-6" />
                                        <span>Download Compressed PDF</span>
                                    </a>

                                    <button
                                        onClick={() => { setFile(null); setResult(null); }}
                                        className="w-full text-center text-sm text-foreground/40 hover:text-foreground transition-colors"
                                    >
                                        Compress Another File
                                    </button>
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
