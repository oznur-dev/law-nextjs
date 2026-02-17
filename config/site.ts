export interface SiteConfig {
  pages: {
    services: {
      title: string;
      description: string;
      contactSection: {
        title: string;
        description: string;
      };
    };
    about: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
    };
    home: {
      servicesPreview: {
        title: string;
        description: string;
      };
    };
  };
  hero: {
    backgroundImage: string;
    title: string;
    subtitle: string;
    description: string;
    primaryButton: {
      text: string;
      href: string;
    };
    secondaryButton: {
      text: string;
      href: string;
    };
  };
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
    icon: string;
    color: string;
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
  pages: {
    services: {
      title: "Çalışma Alanlarımız",
      description:
        "Deneyimli hukuk ekibimiz, farklı hukuk alanlarında müvekkillerimize kapsamlı ve güvenilir hukuki hizmetler sunmaktadır.",
      contactSection: {
        title: "Hangi Konuda Yardıma İhtiyacınız Var?",
        description:
          "Yukarıdaki çalışma alanlarımız dışında da hukuki konularda size destek olabiliriz. Ücretsiz ön görüşme için iletişime geçin.",
      },
    },
    about: {
      title: "Hakkımızda",
      description:
        "Yılmaz & Kaya Hukuk Bürosu olarak müvekkillerimize güvenilir ve profesyonel hukuki hizmetler sunuyoruz.",
    },
    contact: {
      title: "İletişim",
      description:
        "Hukuki konularınızda size yardımcı olmaya hazırız. İletişim bilgilerimizi kullanarak bize ulaşabilirsiniz.",
    },
    home: {
      servicesPreview: {
        title: "Çalışma Alanlarımız",
        description:
          "Geniş deneyimimiz ile farklı hukuk alanlarında müvekkillerimize profesyonel hizmet sunuyoruz.",
      },
    },
  },
  hero: {
    backgroundImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    title: "Yılmaz & Kaya Hukuk Bürosu",
    subtitle: "Güvenilir Hukuki Danışmanlık",
    description:
      "İstanbul merkezli hukuk bürosu olarak, müvekkillerimize profesyonel hukuki danışmanlık ve temsil hizmetleri sunuyoruz. 15 yıllık deneyimimizle güvenilir çözümler üretiyoruz.",
    primaryButton: {
      text: "İletişime Geçin",
      href: "/contact",
    },
    secondaryButton: {
      text: "Çalışma Alanları",
      href: "/services",
    },
  },
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
      icon: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-red-50 text-red-700",
    },
    {
      id: "aile-hukuku",
      title: "Aile Hukuku",
      description: "Boşanma, velayet, nafaka ve evlat edinme işlemleri.",
      icon: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-pink-50 text-pink-700",
    },
    {
      id: "is-hukuku",
      title: "İş Hukuku",
      description:
        "İş sözleşmeleri, işçi hakları ve iş mahkemesi davalarında temsil.",
      icon: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-blue-50 text-blue-700",
    },
    {
      id: "ticaret-hukuku",
      title: "Ticaret Hukuku",
      description:
        "Şirket kuruluşu, ticari sözleşmeler ve ticaret mahkemesi davaları.",
      icon: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-green-50 text-green-700",
    },
    {
      id: "gayrimenkul-hukuku",
      title: "Gayrimenkul Hukuku",
      description:
        "Tapu işlemleri, kira sözleşmeleri ve gayrimenkul satış süreçleri.",
      icon: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-purple-50 text-purple-700",
    },
    {
      id: "miras-hukuku",
      title: "Miras Hukuku",
      description:
        "Vasiyetname düzenleme, miras paylaşımı ve verasete ilişkin davalar.",
      icon: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-amber-50 text-amber-700",
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
