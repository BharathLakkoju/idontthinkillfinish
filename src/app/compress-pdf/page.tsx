import { Metadata } from "next";
import { CompressPdfClient } from "@/components/tool-ui/CompressPdfClient";
import { SEOContent } from "@/components/ui/SEOContent";

export const metadata: Metadata = {
    title: "Compress PDF Online - 100% Secure & Private | SwiftMedia",
    description: "Reduce PDF file size online without losing quality. Our 100% secure client-side PDF compressor keeps your documents private. Free, fast, and no software required.",
    keywords: "compress pdf, reduce pdf size, shrink pdf online free, pdf size reducer, secure pdf compression",
    openGraph: {
        title: "Compress PDF Online - 100% Secure & Private | SwiftMedia",
        description: "Reduce PDF file size online without losing quality. Our 100% secure client-side PDF compressor keeps your documents private.",
        url: "https://swiftmedia.cc/compress-pdf",
        images: [
            {
                url: "https://swiftmedia.cc/og-image-compress-pdf.jpg",
                width: 1200,
                height: 630,
                alt: "Compress PDF Tool - SwiftMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Compress PDF Online - 100% Secure & Private | SwiftMedia",
        description: "Reduce PDF file size online without losing quality. Our 100% secure client-side PDF compressor keeps your documents private.",
        images: ["https://swiftmedia.cc/twitter-image-compress-pdf.jpg"],
    },
    alternates: {
        canonical: "https://swiftmedia.cc/compress-pdf",
        languages: {
            "en-US": "https://swiftmedia.cc/compress-pdf",
            "en-GB": "https://swiftmedia.cc/en-GB/compress-pdf",
            "en-CA": "https://swiftmedia.cc/en-CA/compress-pdf",
            "en-AU": "https://swiftmedia.cc/en-AU/compress-pdf",
        },
    },
};

export default function CompressPdfPage() {
    return (
        <div className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 gradient-text">
                        Compress PDF
                    </h1>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                        Shrink your PDF files for easy email sharing and faster uploads. All 100% in your browser.
                    </p>
                </div>

                <CompressPdfClient />

                <SEOContent
                    title="Secure PDF Compression"
                    subtitle="Reduce File Size Without Any Server Uploads."
                    description={`Is your PDF too large to email? Our Free Online Compress PDF tool is the perfect solution. We offer a fast, efficient, and above all, secure way to reduce document sizes without the risk of exposing your data.

While most PDF compressors process your files in the cloud, our tool runs entirely on your device. Using advanced browser libraries, we optimize the internal structure of the PDF and re-encode data to take up less space. This means your sensitive contracts, medical records, or personal IDs stay on your machine where they belong.

You can choose from three levels of compression: Low (best quality), Medium (balanced), and High (maximum size reduction). Our tool displays a clear before-and-after comparison, so you know exactly how many megabytes you've saved.`}
                    howItWorks={[
                        { step: "Select PDF", text: "Upload the PDF document you want to compress from your device." },
                        { step: "Choose Level", text: "Select between High, Medium, or Low compression depending on your needs." },
                        { step: "Compress", text: "Click the 'Compress PDF' button to start the optimization process." },
                        { step: "Compare & Save", text: "See how much space you've saved and download your optimized PDF." }
                    ]}
                    features={[
                        { title: "Maximum Security", text: "Files are processed locally. No server upload means zero chance of data interception or leaks." },
                        { title: "Smart Optimization", text: "Automatically identifies and removes redundant data within the PDF structure." },
                        { title: "Before/After Stats", text: "Get detailed insights into the compression percentage and storage space saved." },
                        { title: "No Watermarks", text: "Completely free tool that adds no watermarks to your professional documents." }
                    ]}
                    faqs={[
                        { question: "Will I lose quality if I compress my PDF?", answer: "Our Medium and Low levels are designed to maintain excellent visual quality while reducing file size. High compression may slightly affect image quality but is perfect for text-heavy documents." },
                        { question: "How small will my file become?", answer: "The reduction percentage depends on the original content. PDFs with many uncompressed high-resolution images typically see the largest size reduction." },
                        { question: "Is there a file size limit?", answer: "We recommend files under 200MB for the best browser performance, though larger files may work depending on your computer's RAM." }
                    ]}
                />
            </div>
        </div>
    );
}
