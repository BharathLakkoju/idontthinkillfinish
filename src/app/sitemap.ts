import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://swiftmedia.cc";
    const lastModified = new Date();

    const routes = [
        "",
        "/image-to-pdf",
        "/merge-pdf",
        "/compress-pdf",
        "/compress-image",
        "/compress-video",
        "/privacy-policy",
        "/terms-of-service",
        "/dmca",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}
