import React from "react";

const LegalLayout = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-12 gradient-text">{title}</h1>
        <div className="prose dark:prose-invert max-w-none space-y-8 text-foreground/70">
            {children}
        </div>
    </div>
);

export default function DMCAPage() {
    return (
        <LegalLayout title="DMCA Policy">
            <section>
                <p>SwiftMedia respect the intellectual property rights of others. Since our application operates 100% client-side, we **do not host or store any user content on our servers**.</p>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-foreground">No Content is Stored</h2>
                <p>Because no files are uploaded to or stored on our infrastructure, we cannot remove content from your local device. If you believe your copyrighted material is being processed by a user of our tool, please understand that we have no technical means to intervene in local browser processing.</p>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-foreground">Reporting Issues</h2>
                <p>If you have any legal concerns regarding the website architecture itself, please contact us at legal@freemediatools.com.</p>
            </section>
        </LegalLayout>
    );
}
