import { Metadata } from "next";
import { ImageToPdfClient } from "@/components/tool-ui/ImageToPdfClient";
import { SEOContent } from "@/components/ui/SEOContent";

export const metadata: Metadata = {
    title: "Image to PDF Online - 100% Secure & Private | SwiftMedia",
    description: "Convert JPG, PNG, and WEBP images to PDF online for free. 100% secure client-side processing. Reorder images, set page size, and orientation without uploading files.",
    keywords: "image to pdf, jpg to pdf, png to pdf, webp to pdf, convert images to pdf online, secure pdf converter",
    openGraph: {
        title: "Image to PDF Online - 100% Secure & Private | SwiftMedia",
        description: "Convert JPG, PNG, and WEBP images to PDF online for free. 100% secure client-side processing.",
        url: "https://swiftmedia.cc/image-to-pdf",
        images: [
            {
                url: "https://swiftmedia.cc/og-image-image-to-pdf.jpg",
                width: 1200,
                height: 630,
                alt: "Image to PDF Converter - SwiftMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Image to PDF Online - 100% Secure & Private | SwiftMedia",
        description: "Convert JPG, PNG, and WEBP images to PDF online for free. 100% secure client-side processing.",
        images: ["https://swiftmedia.cc/twitter-image-image-to-pdf.jpg"],
    },
    alternates: {
        canonical: "https://swiftmedia.cc/image-to-pdf",
        languages: {
            "en-US": "https://swiftmedia.cc/image-to-pdf",
            "en-GB": "https://swiftmedia.cc/en-GB/image-to-pdf",
            "en-CA": "https://swiftmedia.cc/en-CA/image-to-pdf",
            "en-AU": "https://swiftmedia.cc/en-AU/image-to-pdf",
        },
    },
};

export default function ImageToPdfPage() {
    return (
        <div className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 gradient-text">
                        Image to PDF
                    </h1>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                        Safe. Simple. Secure. Convert your images to a professional PDF document locally in your browser.
                    </p>
                </div>

                <ImageToPdfClient />

                <SEOContent
                    title="Image to PDF Converter"
                    subtitle="The most secure way to turn your photos into PDF documents."
                    description={`Convert your images into high-quality PDF files instantly with our Free Online Image to PDF tool. Whether you have JPG, PNG, or WEBP files, our platform handles them all with ease. 

Unlike other online converters, we prioritize your security and privacy. Our tool runs 100% client-side, meaning your files are never uploaded to our servers. All the processing happens directly in your browser, keeping your sensitive documents safe and private. This is ideal for students, professionals, and government applicants who need to merge multiple photos into a single PDF for submissions.

Our tool is optimized for fast performance and works seamlessly on both desktop and mobile devices. You can reorder your images to ensure they appear in the correct sequence, choose between A4 and Letter page sizes, and set the orientation to portrait or landscape depending on your needs.`}
                    howItWorks={[
                        { step: "Upload Images", text: "Drag and drop or click to select JPG, PNG, or WEBP images from your device." },
                        { step: "Reorder", text: "Use the up and down arrows to arrange your images in the desired sequence." },
                        { step: "Customize", text: "Choose your preferred page size (A4/Letter) and orientation (Portrait/Landscape)." },
                        { step: "Convert & Download", text: "Click 'Convert to PDF' and download your document instantly." }
                    ]}
                    features={[
                        { title: "Privacy Guaranteed", text: "Your files never leave your computer. We don't store, view, or touch your data. 100% browser-based processing." },
                        { title: "Multiple Formats", text: "Support for all popular image formats including JPG, PNG, and modern WEBP images." },
                        { title: "Professional Layouts", text: "Choose between standard A4 or Letter sizes and adjust orientation for a perfect fit." },
                        { title: "Fast & Efficient", text: "Near-instant conversion powered by your device's own hardware for maximum speed." }
                    ]}
                    faqs={[
                        { question: "Is it safe to use this Image to PDF tool?", answer: "Yes, it is the safest method available. Since the processing happens entirely in your browser using JavaScript and jsPDF, your files are never uploaded to any server. Your data stays with you." },
                        { question: "Can I convert multiple images into one PDF?", answer: "Absolutely! You can upload as many images as you need, reorder them as you like, and they will all be merged into a single multi-page PDF document." },
                        { question: "Does this work on mobile phones?", answer: "Yes, our tool is fully responsive and works on all modern mobile browsers on both Android and iOS." },
                        { question: "Which image formats are supported?", answer: "We support JPG, JPEG, PNG, and WEBP formats." }
                    ]}
                />
            </div>
        </div>
    );
}
