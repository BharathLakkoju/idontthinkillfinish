"use client";

import React, { useCallback, useState } from "react";
import { Upload, X, File, Image as ImageIcon, Music, Video, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
    onFilesSelected: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
    maxSize?: number; // in MB
    label?: string;
    description?: string;
}

export function FileUpload({
    onFilesSelected,
    accept = "*/*",
    multiple = true,
    maxSize = 200,
    label = "Click to upload or drag and drop",
    description = "Support for PDF, Image, and Video files",
}: FileUploadProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFiles = useCallback(
        (files: FileList | File[]) => {
            const fileList = Array.from(files);
            const oversizedFiles = fileList.filter((file) => file.size > maxSize * 1024 * 1024);

            if (oversizedFiles.length > 0) {
                setError(`Some files exceed the ${maxSize}MB limit.`);
                return;
            }

            setError(null);
            onFilesSelected(fileList);
        },
        [maxSize, onFilesSelected]
    );

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const onDragLeave = () => {
        setIsDragging(false);
    };

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            handleFiles(e.target.files);
        }
    };

    return (
        <div className="w-full">
            <div
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                className={cn(
                    "relative group cursor-pointer transition-all duration-300",
                    "border-4 border-dashed rounded-3xl p-12 text-center",
                    isDragging
                        ? "border-primary bg-primary/5 scale-[1.01]"
                        : "border-border hover:border-primary/50 hover:bg-secondary/5",
                    error ? "border-accent bg-accent/5" : ""
                )}
            >
                <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={onInputChange}
                    accept={accept}
                    multiple={multiple}
                />

                <div className="flex flex-col items-center space-y-4">
                    <div className={cn(
                        "p-6 rounded-full transition-transform duration-300",
                        isDragging ? "bg-primary text-white scale-110" : "bg-primary/10 text-primary group-hover:scale-110"
                    )}>
                        <Upload className="w-10 h-10" />
                    </div>

                    <div>
                        <p className="text-xl font-bold">{label}</p>
                        <p className="text-foreground/60 mt-1">{description}</p>
                    </div>

                    <div className="flex space-x-4 opacity-40 group-hover:opacity-100 transition-opacity pt-4">
                        <ImageIcon className="w-6 h-6" />
                        <File className="w-6 h-6" />
                        <Video className="w-6 h-6" />
                    </div>
                </div>
            </div>

            {error && (
                <div className="mt-4 p-4 rounded-xl bg-accent/10 text-accent flex items-center space-x-3 text-sm animate-in slide-in-from-top-2 duration-300">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
}
