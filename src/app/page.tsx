import Link from "next/link";
import { FileText, Merge, FileArchive, ImageIcon, Video, Shield, Zap, Globe } from "lucide-react";

const tools = [
  {
    name: "Image to PDF",
    description: "Convert JPG, PNG, WEBP to professional PDF documents instantly.",
    href: "/image-to-pdf",
    icon: ImageIcon,
    color: "bg-blue-500",
  },
  {
    name: "Merge PDF",
    description: "Combine multiple PDF files into one single document in seconds.",
    href: "/merge-pdf",
    icon: Merge,
    color: "bg-indigo-500",
  },
  {
    name: "Compress PDF",
    description: "Reduce PDF file size without losing quality for easier sharing.",
    href: "/compress-pdf",
    icon: FileArchive,
    color: "bg-violet-500",
  },
  {
    name: "Compress Image",
    description: "Optimize and shrink images (JPG, PNG) with smart compression.",
    href: "/compress-image",
    icon: FileText,
    color: "bg-rose-500",
  },
  {
    name: "Compress Video",
    description: "Reduce video size (MP4, MOV) directly in your browser.",
    href: "/compress-video",
    icon: Video,
    color: "bg-amber-500",
  },
];

const features = [
  {
    name: "100% Secure",
    description: "Your files never leave your device. All processing happens locally in your browser.",
    icon: Shield,
  },
  {
    name: "Ultra Fast",
    description: "Powered by WebAssembly and client-side logic for near-instant results.",
    icon: Zap,
  },
  {
    name: "No Limits",
    description: "No accounts, no subscriptions, and no file upload limits. Completely free forever.",
    icon: Globe,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 text-center bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="gradient-text">SwiftMedia Tools</span>
            <br />
            <span className="text-foreground">Done Right.</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Fast, secure, and private. Process your PDFs, images, and videos 100% client-side. No uploads, no servers, just performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#tools" className="btn-primary px-8 py-3 text-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="w-full py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Powerful Tools</h2>
          <p className="text-foreground/60">Everything you need to manage your documents and media.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Link key={tool.name} href={tool.href} className="group">
              <div className="card-premium h-full flex flex-col items-start hover:-translate-y-2">
                <div className={`${tool.color} p-3 rounded-xl text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <tool.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                <p className="text-foreground/60 leading-relaxed mb-6">{tool.description}</p>
                <div className="mt-auto text-primary font-semibold flex items-center group-hover:gap-2 transition-all">
                  Try it now <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 px-4 bg-secondary/5 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <div className="bg-background p-4 rounded-full shadow-md mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.name}</h3>
                <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="w-full py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto glass p-12 rounded-3xl border-border/50 animate-float">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 italic opacity-80">
            "The safest way to process your files is to never let them leave your hands."
          </h2>
          <p className="text-foreground/60 uppercase tracking-widest font-semibold text-sm">
            SwiftMedia Privacy First Architecture
          </p>
        </div>
      </section>
    </div>
  );
}
