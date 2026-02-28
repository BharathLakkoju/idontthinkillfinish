import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebApplication' | 'Service';
  data: Record<string, any>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getSchema = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SwiftMedia",
          "url": "https://swiftmedia.com",
          "logo": "https://swiftmedia.com/logo.ico",
          "description": "Fast, secure, and 100% client-side PDF and media tools. Process your files locally without uploads.",
          "sameAs": [
            "https://twitter.com/swiftmedia",
            "https://facebook.com/swiftmedia",
            "https://linkedin.com/company/swiftmedia"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": "https://swiftmedia.com"
          },
          ...data
        };
      
      case 'WebApplication':
        return {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": data.name,
          "url": data.url,
          "description": data.description,
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "Any",
          "browserRequirements": "Requires JavaScript. Requires HTML5.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": data.features,
          "screenshot": data.screenshot,
          ...data
        };
      
      case 'Service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "SwiftMedia",
            "url": "https://swiftmedia.com"
          },
          "serviceType": "Online Tool",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Media Processing Tools",
            "itemListElement": data.tools
          },
          ...data
        };
      
      default:
        return {};
    }
  };

  const schema = getSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
