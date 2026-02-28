import React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
    progress: number;
    label?: string;
    status?: string;
    className?: string;
}

export function ProgressBar({ progress, label, status, className }: ProgressBarProps) {
    const percentage = Math.round(progress);

    return (
        <div className={cn("w-full space-y-2", className)}>
            <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-foreground/70">{label || "Processing..."}</span>
                <span className="text-primary">{percentage}%</span>
            </div>

            <div className="relative w-full h-4 bg-secondary/10 rounded-full overflow-hidden border border-border/50">
                <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-indigo-500 to-secondary transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress-stripe_1s_linear_infinite]" />
                </div>
            </div>

            {status && (
                <p className="text-xs text-foreground/50 text-center italic">{status}</p>
            )}

            <style jsx>{`
        @keyframes progress-stripe {
          from { background-position: 1rem 0; }
          to { background-position: 0 0; }
        }
      `}</style>
        </div>
    );
}
