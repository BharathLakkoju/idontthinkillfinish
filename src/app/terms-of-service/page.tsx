import React from "react";

const LegalLayout = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-12 gradient-text">{title}</h1>
        <div className="prose dark:prose-invert max-w-none space-y-8 text-foreground/70">
            {children}
        </div>
    </div>
);

export default function TermsOfService() {
    return (
        <LegalLayout title="Terms of Service">
            <section>
                <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                <p>By accessing SwiftMedia, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-foreground">2. Use of Service</h2>
                <p>SwiftMedia provides free, client-side media processing tools for personal and commercial use. You agree not to use the service for any illegal or unauthorized purposes.</p>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-foreground">3. Disclaimer of Warranties</h2>
                <p>The service is provided "as is" and "as available" without any warranties of any kind. Since all processing is handled by your browser, SwiftMedia is not responsible for any local data loss or browser crashes resulting from file processing.</p>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-foreground">4. Limitation of Liability</h2>
                <p>In no event shall SwiftMedia be liable for any damages arising out of the use or inability to use the tools on this website.</p>
            </section>
        </LegalLayout>
    );
}
