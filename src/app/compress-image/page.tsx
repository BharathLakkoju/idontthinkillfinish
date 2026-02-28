import { Metadata } from "next";
import { CompressImageClient } from "@/components/tool-ui/CompressImageClient";
import { SEOContent } from "@/components/ui/SEOContent";

export const metadata: Metadata = {
    title: "Compress Image Online - 100% Secure & Fast | SwiftMedia",
    description: "Reduce image file size for free without losing quality. Support for JPG, PNG, and WEBP. 100% client-side processing keeps your photos safe and secure.",
    keywords: "compress image, reduce image size, image compressor online, shrink photos free, secure image optimizer",
    openGraph: {
        title: "Compress Image Online - 100% Secure & Fast | SwiftMedia",
        description: "Reduce image file size for free without losing quality. Support for JPG, PNG, and WEBP. 100% client-side processing keeps your photos safe and secure.",
        url: "https://swiftmedia.cc/compress-image",
        images: [
            {
                url: "https://swiftmedia.cc/og-image-compress-image.jpg",
                width: 1200,
                height: 630,
                alt: "Compress Image Tool - SwiftMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Compress Image Online - 100% Secure & Fast | SwiftMedia",
        description: "Reduce image file size for free without losing quality. Support for JPG, PNG, and WEBP. 100% client-side processing keeps your photos safe and secure.",
        images: ["https://swiftmedia.cc/twitter-image-compress-image.jpg"],
    },
    alternates: {
        canonical: "https://swiftmedia.cc/compress-image",
        languages: {
            "en-US": "https://swiftmedia.cc/compress-image",
            "en-GB": "https://swiftmedia.cc/en-GB/compress-image",
            "en-CA": "https://swiftmedia.cc/en-CA/compress-image",
            "en-AU": "https://swiftmedia.cc/en-AU/compress-image",
        },
    },
};

export default function CompressImagePage() {
    return (
        <div className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 gradient-text">
                        Compress Image
                    </h1>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                        Make your images web-ready. Fast compression with smart resizing options, all handled locally.
                    </p>
                </div>

                <CompressImageClient />

                <SEOContent
                    title="Super-Fast Image Compression"
                    subtitle="The Safest Way to Optimize Your Photos for the Web."
                    description={`High-resolution photos are beautiful, but they can slow down your website and take up too much storage. Our Free Online Compress Image tool helps you find the perfect balance between visual clarity and file size.

What sets us apart? Security. Most 'free' image compressors upload your personal photos to a remote server for processing. Our tool uses browser-image-compression to handle the entire task within your own browser. Your photos never leave your device, ensuring total privacy.

Whether you're preparing images for a blog, uploading to social media, or sending via email, our tool provides intuitive controls. Adjust the quality slider to find the right compression strength or use the smart resize presets to downscale images to 1080p, 720p, or mobile-friendly dimensions.`}
                    howItWorks={[
                        { step: "Upload Image", text: "Choose a JPG, PNG, or WEBP image from your phone or computer." },
                        { step: "Set Quality", text: "Use the slider to choose your desired balance between size and quality." },
                        { step: "Optional Resize", text: "Select a maximum resolution to downscale high-resolution photos." },
                        { step: "Download", text: "Instantly download your optimized, web-ready image file." }
                    ]}
                    features={[
                        { title: "Smart Compression", text: "Intelligent algorithms that strip unnecessary metadata and optimize pixel data for maximum savings." },
                        { title: "Browser-Based Speed", text: "No waiting for uploads or downloads from a server. Fast processing powered by your CPU." },
                        { title: "Multiple Formats", text: "Works seamlessly with popular image types including transparent PNGs and modern WEBP files." },
                        { title: "Completely Private", text: "Your personal memories and sensitive screenshots stay private. No data tracking or storage." }
                    ]}
                    faqs={[
                        { question: "Will my images look blurry?", answer: "Not unless you use extreme compression. Our tool uses smart algorithms to maintain visual quality while stripping invisible data. You can preview the reduction and adjust as needed." },
                        { question: "Can I compress PNG images?", answer: "Yes! Our tool supports PNG and will preserve transparency while reducing the file size." },
                        { question: "Is there a limit on pixel dimensions?", answer: "We can handle high-resolution photos (like 4K), though the browser might take a few seconds more for very large files." },
                        { question: "Is this tool free for commercial use?", answer: "Yes, our tools are 100% free for both personal and commercial projects." }
                    ]}
                />
            </div>
        </div>
    );
}
