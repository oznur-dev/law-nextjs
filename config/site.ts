export interface SiteConfig {
  firm: {
    name: string;
    title: string;
    phone: string;
    email: string;
    address: {
      street: string;
      district: string;
      city: string;
      postalCode: string;
    };
    workingHours: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  services: {
    id: string;
    title: string;
    description: string;
    icon?: string;
  }[];
  lawyer: {
    name: string;
    title: string;
    bio: string;
    experience: number;
    education: string;
    barNumber: string;
  };
  theme: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      foreground: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  firm: {
    name: "Yılmaz & Kaya Hukuk Bürosu",
    title: "Avukat Mehmet Yılmaz",
    phone: "+90 538 915 52 48",
    email: "info@yilmazkayahukuk.com",
    address: {
      street: "Cumhuriyet Caddesi No: 156/4",
      district: "Şişli",
      city: "İstanbul",
      postalCode: "34380",
    },
    workingHours: {
      weekdays: "Pazartesi - Cuma: 09:00 - 18:00",
      saturday: "Cumartesi: 10:00 - 14:00",
      sunday: "Pazar: Kapalı",
    },
  },
  seo: {
    title: "Yılmaz & Kaya Hukuk Bürosu - İstanbul Avukat",
    description:
      "İstanbul Şişli merkezli hukuk bürosu. Ceza, aile, iş, ticaret, gayrimenkul ve miras hukuku alanlarında profesyonel hukuki danışmanlık.",
    keywords: [
      "istanbul avukat",
      "şişli avukat",
      "ceza hukuku",
      "aile hukuku",
      "iş hukuku",
      "ticaret hukuku",
      "gayrimenkul hukuku",
      "miras hukuku",
      "hukuki danışmanlık",
    ],
  },
  services: [
    {
      id: "ceza-hukuku",
      title: "Ceza Hukuku",
      description:
        "Ceza davalarında savunma, suç duyurusu ve şikayetlerde temsil.",
    },
    {
      id: "aile-hukuku",
      title: "Aile Hukuku",
      description: "Boşanma, velayet, nafaka ve evlat edinme işlemleri.",
    },
    {
      id: "is-hukuku",
      title: "İş Hukuku",
      description:
        "İş sözleşmeleri, işçi hakları ve iş mahkemesi davalarında temsil.",
    },
    {
      id: "ticaret-hukuku",
      title: "Ticaret Hukuku",
      description:
        "Şirket kuruluşu, ticari sözleşmeler ve ticaret mahkemesi davaları.",
    },
    {
      id: "gayrimenkul-hukuku",
      title: "Gayrimenkul Hukuku",
      description:
        "Tapu işlemleri, kira sözleşmeleri ve gayrimenkul satış süreçleri.",
    },
    {
      id: "miras-hukuku",
      title: "Miras Hukuku",
      description:
        "Vasiyetname düzenleme, miras paylaşımı ve verasete ilişkin davalar.",
    },
  ],
  lawyer: {
    name: "Av. Mehmet Yılmaz",
    title: "Kurucu Ortak",
    bio: "15 yıllık deneyimi ile ceza, aile ve ticaret hukuku alanlarında uzmanlaşmış avukat. İstanbul Barosu üyesi.",
    experience: 15,
    education: "İstanbul Üniversitesi Hukuk Fakültesi",
    barNumber: "İst. 45678",
  },
  theme: {
    colors: {
      primary: "#1e3a8a", // dark blue
      secondary: "#64748b", // slate gray
      accent: "#dc2626", // dark red
      background: "#ffffff", // white
      foreground: "#1f2937", // dark gray
    },
  },
};
