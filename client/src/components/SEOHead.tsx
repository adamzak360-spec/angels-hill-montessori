/**
 * SEO Head Component
 * Manages page-specific meta tags and SEO metadata
 * Note: This is a helper component that updates document head
 */

interface SEOHeadProps {
  title: string;
  description: string;
}

export function updateSEOHead({ title, description }: SEOHeadProps) {
  // Update document title
  document.title = title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);

  // Update or create Open Graph tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', title);

  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (!ogDescription) {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescription);
  }
  ogDescription.setAttribute('content', description);
}

export default function SEOHead({ title, description }: SEOHeadProps) {
  updateSEOHead({ title, description });
  return null;
}
