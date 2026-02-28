"use client";

import Link from "next/link";
import { useState } from "react";
import { DarkModeToggle } from "./ui/DarkModeToggle";
import { Menu, X, FileText, Merge, FileArchive, ImageIcon, Video } from "lucide-react";
import { cn } from "@/lib/utils";

const tools = [
    { name: "Image to PDF", href: "/image-to-pdf", icon: ImageIcon },
    { name: "Merge PDF", href: "/merge-pdf", icon: Merge },
    { name: "Compress PDF", href: "/compress-pdf", icon: FileArchive },
    { name: "Compress Image", href: "/compress-image", icon: FileText },
    { name: "Compress Video", href: "/compress-video", icon: Video },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full glass shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <img src="/logo.ico" alt="SwiftMedia" className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            <span className="text-2xl font-bold gradient-text">SwiftMedia</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {tools.map((tool) => (
                            <Link
                                key={tool.name}
                                href={tool.href}
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
                            >
                                {tool.name}
                            </Link>
                        ))}
                        <DarkModeToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center space-x-4">
                        <DarkModeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-foreground hover:bg-secondary/10 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden glass border-t border-border animate-in slide-in-from-top duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {tools.map((tool) => (
                            <Link
                                key={tool.name}
                                href={tool.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <tool.icon className="h-5 w-5" />
                                <span>{tool.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
