"use client";

import React, { useState, useRef } from "react";
import { FileUpload } from "@/components/ui/FileUpload";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SizeComparison } from "@/components/ui/SizeComparison";
import { createFFmpegInstance, compressVideo } from "@/lib/compress-video";
import { Video, Download, Settings, Play, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function CompressVideoClient() {
    const [file, setFile] = useState<File | null>(null);
    const [quality, setQuality] = useState<"720p" | "480p" | "custom">("720p");
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState<{ blob: Blob; url: string; size: number } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const ffmpegRef = useRef<any>(null);

    const onFilesSelected = (files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
            setResult(null);
            setError(null);
        }
    };

    const handleCompress = async () => {
        if (!file) return;
        setIsProcessing(true);
        setProgress(0);
        setError(null);

        try {
            if (!ffmpegRef.current) {
                ffmpegRef.current = await createFFmpegInstance();
            }

            const compressedBlob = await compressVideo(ffmpegRef.current, file, {
                quality,
                onProgress: (p) => setProgress(p),
            });

            const url = URL.createObjectURL(compressedBlob);
            setResult({ blob: compressedBlob, url, size: compressedBlob.size });
        } catch (err: any) {
            console.error("Compression failed", err);
            setError("Video compression failed. This typically happens with large files (>200MB) due to browser memory limits.");
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
                        accept="video/*"
                        multiple={false}
                        maxSize={200}
                        label="Upload Video to Compress"
                        description="Recommended max 200MB for stability"
                    />
                ) : (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        {/* Warning */}
                        <div className="flex items-start space-x-3 p-4 bg-amber-500/10 text-amber-600 rounded-xl border border-amber-500/20 text-sm">
                            <Info className="w-5 h-5 shrink-0" />
                            <p>Video processing happens in your browser. Larger videos require more RAM and may take several minutes to transcode.</p>
                        </div>

                        {/* File Info */}
                        <div className="flex items-center justify-between p-6 bg-secondary/5 rounded-2xl border border-border">
                            <div className="flex items-center space-x-4">
                                <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500">
                                    <Video className="w-6 h-6" />
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
                                Change Video
                            </button>
                        </div>

                        {/* Options */}
                        <div className="space-y-4">
                            <label className="flex items-center space-x-2 font-bold text-sm uppercase tracking-wider opacity-60">
                                <Settings className="w-4 h-4" />
                                <span>Target Quality</span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { id: "720p", label: "720p (HD)", desc: "Standard HD resolution" },
                                    { id: "480p", label: "480p (SD)", desc: "Mobile optimized size" },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setQuality(item.id as any)}
                                        className={cn(
                                            "p-4 rounded-2xl border-2 text-left transition-all",
                                            quality === item.id
                                                ? "border-amber-500 bg-amber-500/5 shadow-sm"
                                                : "border-border hover:border-amber-500/30"
                                        )}
                                    >
                                        <span className="font-bold block">{item.label}</span>
                                        <span className="text-xs text-foreground/50">{item.desc}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Area */}
                        <div className="pt-6 border-t border-border flex flex-col items-center space-y-6">
                            {!isProcessing && !result && (
                                <button
                                    onClick={handleCompress}
                                    className="btn-primary w-full py-4 text-lg bg-amber-600 hover:bg-amber-700 flex items-center justify-center space-x-3"
                                >
                                    <Play className="w-5 h-5 fill-current" />
                                    <span>Start Compression</span>
                                </button>
                            )}

                            {isProcessing && (
                                <ProgressBar progress={progress} label="Transcoding pixels..." status="This may take several minutes. Keep tab open." />
                            )}

                            {error && (
                                <div className="w-full p-4 rounded-xl bg-accent/10 text-accent text-sm text-center">
                                    {error}
                                </div>
                            )}

                            {result && (
                                <div className="w-full space-y-8 animate-in zoom-in duration-300">
                                    <SizeComparison originalSize={file.size} compressedSize={result.size} />

                                    <a
                                        href={result.url}
                                        download={`compressed_video.mp4`}
                                        className="flex items-center justify-center space-x-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg"
                                    >
                                        <Download className="w-6 h-6" />
                                        <span>Download Compressed Video</span>
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
