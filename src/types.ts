export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string | ImageMetadata;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface ProductItem {
  title: string;
  description: string;
  imgSrc: string | ImageMetadata;
}
