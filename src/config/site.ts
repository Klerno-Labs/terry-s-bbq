export const siteConfig = {
  name: "Terry's BBQ",
  description: "Authentic Kentucky slow-smoked BBQ served with our famous mustard sauce. Down home cooking in an old western tavern atmosphere.",
  url: "https://terrysbbq.com",
  links: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  contact: {
    address: "4521 Westheimer Rd, Suite 200, Houston, TX 77027", // Using the requested format in prompt as placeholder for KY
    phone: "(512) 555-0198",
    email: "hello@terrysbbq.com",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "Menu", href: "/menu" },
    { title: "Our Story", href: "/#story" },
    { title: "Catering", href: "/catering" },
    { title: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;