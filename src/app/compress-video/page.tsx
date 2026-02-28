import { Metadata } from "next";
import { CompressVideoClient } from "@/components/tool-ui/CompressVideoClient";
import { SEOContent } from "@/components/ui/SEOContent";

export const metadata: Metadata = {
    title: "Compress Video Online - 100% Secure & Private | SwiftMedia",
    description: "Reduce video file size (MP4, MOV, WebM) online for free. Secure client-side processing using WebAssembly. Shrink video size without losing quality locally.",
    keywords: "compress video, reduce video size, shrink video online, mp4 compressor, mobile video compressor, secure video tool",
    openGraph: {
        title: "Compress Video Online - 100% Secure & Private | SwiftMedia",
        description: "Reduce video file size (MP4, MOV, WebM) online for free. Secure client-side processing using WebAssembly.",
        url: "https://swiftmedia.cc/compress-video",
        images: [
            {
                url: "https://swiftmedia.cc/og-image-compress-video.jpg",
                width: 1200,
                height: 630,
                alt: "Compress Video Tool - SwiftMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Compress Video Online - 100% Secure & Private | SwiftMedia",
        description: "Reduce video file size (MP4, MOV, WebM) online for free. Secure client-side processing using WebAssembly.",
        images: ["https://swiftmedia.cc/twitter-image-compress-video.jpg"],
    },
    alternates: {
        canonical: "https://swiftmedia.cc/compress-video",
        languages: {
            "en-US": "https://swiftmedia.cc/compress-video",
            "en-GB": "https://swiftmedia.cc/en-GB/compress-video",
            "en-CA": "https://swiftmedia.cc/en-CA/compress-video",
            "en-AU": "https://swiftmedia.cc/en-AU/compress-video",
        },
    },
};

export default function CompressVideoPage() {
    return (
        <div className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 gradient-text">
                        Compress Video
                    </h1>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                        Professional-grade video compression using FFmpeg, running directly in your browser. No uploads required.
                    </p>
                </div>

                <CompressVideoClient />

                <SEOContent
                    title="Safe & Private Video Compressor"
                    subtitle="Desktop-Class Video Optimization directly in your browser."
                    description={`Need to share a large video but restricted by file limits? Our Free Online Compress Video tool uses the power of FFmpeg via WebAssembly to transcode and shrink your videos without uploading them to any server. 

This is the ultimate privacy solution for video processing. While traditional online video tasks require sending gigabytes of data to a cloud server—which is slow and insecure—our tool processes the video data locally on your CPU. This ensures that your private recordings, internal demos, or sensitive content never leave your device.

We support all major video formats including MP4, MOV, and WebM. You can choose from optimized presets like 720p (HD) for a balance of quality and size, or 480p (SD) for maximum storage savings. Our tool displays a live progress bar so you can see the transcoding process in real-time.`}
                    howItWorks={[
                        { step: "Upload Video", text: "Select a video file from your device. We recommend files up to 200MB." },
                        { step: "Select Quality", text: "Choose between 720p (HD) or 480p (SD) resolution presets." },
                        { step: "Transcode", text: "Wait for the browser to process your video. This uses your local device power." },
                        { step: "Save Output", text: "Once finished, download your optimized MP4 file instantly." }
                    ]}
                    features={[
                        { title: "Powered by FFmpeg", text: "Uses the world's most powerful media framework, ported to WebAssembly for browser use." },
                        { title: "No Server Uploads", text: "Experience true privacy. Your video data is processed in a sandbox inside your tab." },
                        { title: "Smart Downscaling", text: "High-quality scaling algorithms that preserve detail while significantly reducing bitrates." },
                        { title: "Universal Output", text: "Consistently produces web-friendly H.264 MP4 files compatible with all players." }
                    ]}
                    faqs={[
                        { question: "Why is video compression slower than images?", answer: "Video compression (transcoding) is a computationally heavy task. Each frame must be decoded, resized, and re-encoded. Since this happens locally in your browser, the speed depends on your computer's CPU." },
                        { question: "My tab crashed or froze. What happened?", answer: "Modern browsers have memory limits per tab (usually around 2GB-4GB). If a video is too large or complex, the browser's memory may run out. We recommend processing videos under 200MB for the best experience." },
                        { question: "Are the files stored anywhere?", answer: "No. The files exist only in your browser's RAM during processing and are deleted as soon as you close the tab." }
                    ]}
                />
            </div>
        </div>
    );
}
