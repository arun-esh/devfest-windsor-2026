export interface EventConfig {
  name: string;
  date: Date;
  location: {
    city: string;
    province: string;
    country: string;
  };
  branding: {
    primary: string;
    secondary: string;
    accent: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: {
      text: string;
      href: string;
    };
    secondaryCta?: {
      text: string;
      href: string;
    };
    imageUrl: string;
    imageAlt: string;
  };
  seo: {
    metaDescription: string;
    ogImage: string;
  };
}
