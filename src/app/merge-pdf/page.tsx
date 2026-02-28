import { Metadata } from "next";
import { MergePdfClient } from "@/components/tool-ui/MergePdfClient";
import { SEOContent } from "@/components/ui/SEOContent";

export const metadata: Metadata = {
    title: "Merge PDF Online Free - 100% Secure | SwiftMedia",
    description: "Combine multiple PDF files into one easily. Safe, private, and 100% client-side PDF merging. Drag and drop to reorder files and download merged PDF instantly.",
    keywords: "merge pdf, combine pdf, join pdf files, online pdf merger, secure pdf merger",
    openGraph: {
        title: "Merge PDF Online Free - 100% Secure | SwiftMedia",
        description: "Combine multiple PDF files into one easily. Safe, private, and 100% client-side PDF merging.",
        url: "https://swiftmedia.cc/merge-pdf",
        images: [
            {
                url: "https://swiftmedia.cc/og-image-merge-pdf.jpg",
                width: 1200,
                height: 630,
                alt: "Merge PDF Tool - SwiftMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Merge PDF Online Free - 100% Secure | SwiftMedia",
        description: "Combine multiple PDF files into one easily. Safe, private, and 100% client-side PDF merging.",
        images: ["https://swiftmedia.cc/twitter-image-merge-pdf.jpg"],
    },
    alternates: {
        canonical: "https://swiftmedia.cc/merge-pdf",
        languages: {
            "en-US": "https://swiftmedia.cc/merge-pdf",
            "en-GB": "https://swiftmedia.cc/en-GB/merge-pdf",
            "en-CA": "https://swiftmedia.cc/en-CA/merge-pdf",
            "en-AU": "https://swiftmedia.cc/en-AU/merge-pdf",
        },
    },
};

export default function MergePdfPage() {
    return (
        <div className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 gradient-text">
                        Merge PDF
                    </h1>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                        Combine multiple PDF documents into a single file quickly and safely. No server uploads.
                    </p>
                </div>

                <MergePdfClient />

                <SEOContent
                    title="Best Online PDF Merger"
                    subtitle="Simple, Secure, and 100% Browser-Based PDF Joining."
                    description={`Need to combine several PDF files into one? Our Free Online Merge PDF tool is designed for speed and security. Whether you're a student merging research papers, an office worker combining reports, or a freelancer organizing invoices, our tool makes it effortless.

The primary advantage of our platform is total privacy. Most online PDF tools require you to upload your documents to their servers, which can be a security risk for sensitive information. Our tool uses pdf-lib to process everything 100% client-side. Your files never leave your computer, ensuring your data remains completely private.

You have full control over the order of your pages. Simply upload your PDFs, use the intuitive reordering controls to get the sequence exactly right, and merge them with a single click. It's fast, free, and works on any device without software installation.`}
                    howItWorks={[
                        { step: "Upload PDFs", text: "Select or drag and drop multiple PDF files you want to combine." },
                        { step: "Arrange Files", text: "Drag and drop or use arrows to set the order of the merged document." },
                        { step: "Merge", text: "Click the 'Merge PDFs Now' button to combine your files instantly." },
                        { step: "Download", text: "Save the new combined PDF file to your device immediately." }
                    ]}
                    features={[
                        { title: "Privacy First", text: "All merging happens in your browser. We never see your files and never store them on any server." },
                        { title: "No File Limits", text: "Merge as many PDF files as you need. No account required and no hidden costs." },
                        { title: "Lossless Quality", text: "Our merging process maintains the original quality and formatting of your source PDF documents." },
                        { title: "Cross-Platform", text: "Works perfectly on Windows, Mac, Linux, iOS, and Android browser platforms." }
                    ]}
                    faqs={[
                        { question: "Is there a limit on how many PDFs I can merge?", answer: "There is no hard limit on the number of files, but merging very large files or hundreds of documents depends on your device's memory since it's processed client-side." },
                        { question: "Are my documents secure during the merge?", answer: "Yes, they are 100% secure. Because the tool runs in your browser, the files are only 'seen' by your local processor. They are never transmitted over the internet to a server." },
                        { question: "Can I reorder files after uploading?", answer: "Yes, you can easily use the up/down arrows to change the sequence of files before clicking the merge button." },
                        { question: "Is the merged PDF searchable?", answer: "If your original PDFs were searchable (OCR processed), the merged PDF will retain that searchability." }
                    ]}
                />
            </div>
        </div>
    );
}
