import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  canonicalUrl, 
  ogType = "website", 
  ogImage = "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1200", 
  schemaData 
}) {
  const siteTitle = "Sa Majesté DJEGBOKPA | Prêtre Spirituel Traditionnel Béninois";
  const fullTitle = title ? `${title} | Sa Majesté DJEGBOKPA` : siteTitle;
  const defaultDescription = "Site officiel de Sa Majesté DJEGBOKPA, puissant prêtre spirituel traditionnel béninois à Agbangnizoun. Consultation du Fâ, retour affectif, protection spirituelle, désenvoûtement et purification.";
  const metaDescription = description || defaultDescription;
  const siteUrl = "https://dah-djegbokpa.org";
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Sa Majesté DJEGBOKPA" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
}
