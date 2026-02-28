import React from "react";
import { cn } from "@/lib/utils";

interface SEOContentProps {
    title: string;
    subtitle?: string;
    description: string;
    howItWorks: { step: string; text: string }[];
    features: { title: string; text: string }[];
    faqs: { question: string; answer: string }[];
}

export function SEOContent({
    title,
    subtitle,
    description,
    howItWorks,
    features,
    faqs,
}: SEOContentProps) {
    return (
        <div className="w-full max-w-4xl mx-auto py-20 px-4 space-y-24">
            {/* Introduction */}
            <section className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">{title}</h2>
                {subtitle && <p className="text-xl font-semibold text-foreground/80">{subtitle}</p>}
                <div className="text-lg text-foreground/60 leading-relaxed text-left prose dark:prose-invert max-w-none">
                    {description.split('\n\n').map((para, i) => (
                        <p key={i} className="mb-4">{para}</p>
                    ))}
                </div>
            </section>

            {/* How it Works */}
            <section className="space-y-12">
                <div className="text-center">
                    <h3 className="text-3xl font-bold mb-4">How it Works</h3>
                    <p className="text-foreground/60">Follow these simple steps to process your files.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {howItWorks.map((item, index) => (
                        <div key={index} className="relative p-6 rounded-2xl bg-secondary/5 border border-border flex flex-col items-center text-center">
                            <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg">
                                {index + 1}
                            </span>
                            <p className="font-bold mb-2">{item.step}</p>
                            <p className="text-sm text-foreground/60">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {features.map((feature, index) => (
                    <div key={index} className="space-y-3">
                        <h4 className="text-xl font-bold text-primary">{feature.title}</h4>
                        <p className="text-foreground/60 leading-relaxed">{feature.text}</p>
                    </div>
                ))}
            </section>

            {/* FAQ Section */}
            <section className="space-y-12">
                <div className="text-center">
                    <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
                    <p className="text-foreground/60">Common questions about our {title.toLowerCase()}.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group card-premium p-6 cursor-pointer">
                            <summary className="list-none flex justify-between items-center font-bold text-lg">
                                {faq.question}
                                <span className="text-primary group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <div className="mt-4 text-foreground/60 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </section>
        </div>
    );
}
