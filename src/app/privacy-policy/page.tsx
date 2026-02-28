import React from "react";

const LegalLayout = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-12 gradient-text">{title}</h1>
        <div className="prose dark:prose-invert max-w-none space-y-8 text-foreground/70">
            {children}
        </div>
    </div>
);

export default function PrivacyPolicy() {
    return (
        <LegalLayout title="Privacy Policy">
            <section>
                <h2 className="text-2xl font-bold text-foreground">1. Privacy First Commitment</h2>
                <p>At SwiftMedia, we are committed to providing 100% secure media tools. Our core architecture is built around the principle of **Client-Side Processing**. This means that when you use our tools to convert images, merge PDFs, or compress videos, the processing happens entirely within your web browser using your device's hardware.</p>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-foreground">2. Data Storage</h2>
                <p>We do not upload, store, or view your files. Your documents, images, and videos never leave your computer or mobile device. Once you close the tab or browser, all data processed during that session is cleared from your device's memory.</p>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-foreground">3. Information We Collect</h2>
                <p>We do not collect personal information. We may use standard web analytics (like Google Analytics) to track anonymous usage patterns (e.g., which tools are most popular) to improve our services. This data is not linked to your file content.</p>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-foreground">4. Third-Party Services</h2>
                <p>We display advertisements through Google AdSense. These third-party vendors may use cookies to serve ads based on your prior visits to our website or other websites. You can opt-out of personalized advertising by visiting Google Ad Settings.</p>
            </section>
        </LegalLayout>
    );
}
