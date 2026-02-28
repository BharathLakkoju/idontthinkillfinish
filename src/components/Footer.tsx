import Link from "next/link";

const footerLinks = {
    tools: [
        { name: "Image to PDF", href: "/image-to-pdf" },
        { name: "Merge PDF", href: "/merge-pdf" },
        { name: "Compress PDF", href: "/compress-pdf" },
        { name: "Compress Image", href: "/compress-image" },
        { name: "Compress Video", href: "/compress-video" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "DMCA", href: "/dmca" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-card text-card-foreground border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-xl font-bold gradient-text flex items-center space-x-2">
                            <img src="/logo.ico" alt="SwiftMedia" className="w-6 h-6" />
                            <span>SwiftMedia</span>
                        </Link>
                        <p className="mt-4 text-sm text-foreground/70 leading-relaxed max-w-sm">
                            100% secure client-side media processing tools. We never upload your files to our server. All conversions and compressions happen directly in your browser.
                        </p>
                    </div>

                    <div className="flex flex-col items-start">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/40">Tools</h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.tools.map((item) => (
                                <li key={item.name} className="flex">
                                    <Link href={item.href} className="text-sm text-foreground/70 hover:text-primary transition-colors whitespace-nowrap">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-start">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/40">Company</h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.legal.map((item) => (
                                <li key={item.name} className="flex">
                                    <Link href={item.href} className="text-sm text-foreground/70 hover:text-primary transition-colors whitespace-nowrap">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
                    <p>© {new Date().getFullYear()} SwiftMedia. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-6">
                        <span className="italic">Fast. Secure. Client-Side.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
