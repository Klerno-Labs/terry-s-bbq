export const siteConfig = {
  name: "Terry's BBQ",
  description: "Authentic Kentucky slow-smoked BBQ. Low & slow since 1998. Famous for our signature mustard sauce.",
  url: "https://terrysbbq.com",
  links: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  contact: {
    phone: "(859) 254-1234",
    email: "info@terrysbbq.com",
    address: "121 Manchester St, Lexington, KY 40508",
  },
  hours: [
    { day: "Mon - Thu", time: "11:00 AM - 9:00 PM" },
    { day: "Fri - Sat", time: "11:00 AM - 10:00 PM" },
    { day: "Sunday", time: "12:00 PM - 8:00 PM" },
  ],
};

export type SiteConfig = typeof siteConfig;