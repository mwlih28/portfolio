const team = [
  {
    id: "ben",
    name: "Melih",
    role: "Frontend Developer",
    avatar: "M",
    color: "#a855f7",
    email: "mwlih28@gmail.com",
    bio: "Kullanıcı arayüzü ve deneyimi konusunda tutkulu. React, Next.js ve modern CSS ile etkileyici arayüzler oluşturuyorum.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Figma"],
  },
  {
    id: "abi",
    name: "Berat",
    role: "Backend Developer",
    avatar: "B",
    color: "#3b82f6",
    email: "byazar1628@gmail.com",
    bio: "Sunucu tarafı mimarisi ve veritabanı tasarımı konusunda uzman. Ölçeklenebilir ve güvenli sistemler inşa ediyorum.",
    skills: ["Node.js", "PostgreSQL", "Docker", "AWS", "MongoDB", "GraphQL"],
  }
];

const projects = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    category: "Full Stack",
    author: "both",
    description: "React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret platformu. Ürün yönetimi, sepet, ödeme entegrasyonu ve kullanıcı paneli içerir.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    github: "#",
    live: "#",
    longDescription: "Bu proje, modern bir e-ticaret deneyimi sunmak amacıyla birlikte geliştirdik. Melih frontend arayüzünü, Berat ise backend API ve ödeme altyapısını oluşturdu. Kullanıcılar ürünleri arayabilir, filtreleyebilir, sepete ekleyebilir ve güvenli ödeme yapabilir.",
    features: [
      "Kullanıcı kimlik doğrulama ve yetkilendirme",
      "Gerçek zamanlı stok takibi",
      "Stripe ile güvenli ödeme",
      "Sipariş takip sistemi",
      "Responsive tasarım"
    ]
  },
  {
    id: 2,
    title: "Görev Yönetim Uygulaması",
    category: "Mobil",
    author: "ben",
    description: "React Native ile geliştirilmiş, drag & drop desteği olan görev yönetim uygulaması. Kanban board ve takvim görünümü sunar.",
    tags: ["React Native", "Redux", "Firebase"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    github: "#",
    live: "#",
    longDescription: "Melih'in geliştirdiği kişisel ve ekip görevlerini organize etmek için mobil uygulama. Sürükle bırak özelliğiyle görevleri kolayca yönetebilir, takım üyeleriyle işbirliği yapabilirsiniz.",
    features: [
      "Kanban board görünümü",
      "Sürükle bırak ile görev taşıma",
      "Takvim entegrasyonu",
      "Push bildirimler",
      "Ekip işbirliği"
    ]
  },
  {
    id: 3,
    title: "Hava Durumu Dashboard",
    category: "Web",
    author: "ben",
    description: "OpenWeather API kullanarak anlık ve 7 günlük hava tahminlerini gösteren interaktif bir dashboard uygulaması.",
    tags: ["Vue.js", "Chart.js", "API"],
    image: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=800&q=80",
    github: "#",
    live: "#",
    longDescription: "Melih'in tasarladığı ve geliştirdiği, kullanıcı konumuna göre anlık hava durumu ve haftalık tahminleri gösteren modern bir web uygulaması. Güzel grafikler ve animasyonlarla hava verilerini görselleştirir.",
    features: [
      "GPS ile otomatik konum tespiti",
      "7 günlük hava tahmini",
      "Interaktif grafikler",
      "Şehir arama",
      "Karanlık/Aydınlık tema"
    ]
  },
  {
    id: 4,
    title: "Blog Platformu",
    category: "Full Stack",
    author: "both",
    description: "Next.js ve PostgreSQL ile geliştirilmiş, markdown desteği olan modern blog platformu. SEO optimize edilmiş ve hızlı yükleme süreleri.",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    github: "#",
    live: "#",
    longDescription: "İkimizin birlikte geliştirdiği, yazarlar için tasarlanmış bir blog platformu. Melih frontend ve markdown editörünü, Berat veritabanı ve API tasarımını üstlendi. Kategori yönetimi, yorum sistemi ve okuyucu analitiği sunar.",
    features: [
      "Markdown editörü",
      "SEO optimizasyonu",
      "Kategori ve etiket yönetimi",
      "Yorum sistemi",
      "Ziyaretçi analitiği"
    ]
  },
  {
    id: 5,
    title: "Kripto Takip Uygulaması",
    category: "Web",
    author: "abi",
    description: "Gerçek zamanlı kripto para fiyatlarını takip eden, portföy yönetimi ve fiyat alarmları sunan web uygulaması.",
    tags: ["React", "WebSocket", "Chart.js"],
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&q=80",
    github: "#",
    live: "#",
    longDescription: "Berat'in geliştirdiği kripto para yatırımcıları için kapsamlı takip uygulaması. WebSocket ile anlık fiyat güncellemeleri, portföy analizi ve özelleştirilebilir fiyat alarmları içerir.",
    features: [
      "Gerçek zamanlı fiyat güncellemeleri",
      "Portföy yönetimi",
      "Fiyat alarmları",
      "Tarihi veri grafikleri",
      "Favori coin listesi"
    ]
  },
  {
    id: 6,
    title: "Chat Uygulaması",
    category: "Full Stack",
    author: "both",
    description: "Socket.io ile geliştirilmiş gerçek zamanlı chat uygulaması. Özel mesajlaşma, grup sohbetleri ve dosya paylaşımı destekler.",
    tags: ["Node.js", "Socket.io", "React", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
    github: "#",
    live: "#",
    longDescription: "Birlikte geliştirdiğimiz modern ve hızlı bir mesajlaşma uygulaması. Melih arayüz tasarımı ve gerçek zamanlı UI güncellemelerini, Berat ise Socket.io altyapısını ve mesaj veritabanını oluşturdu.",
    features: [
      "Gerçek zamanlı mesajlaşma",
      "Grup sohbetleri",
      "Dosya ve resim paylaşımı",
      "Okundu/iletildi bilgisi",
      "Çevrimiçi durum göstergesi"
    ]
  }
];

function getAuthorInfo(authorId) {
  if (authorId === "both") return { label: "Melih & Berat", colors: ["#a855f7", "#3b82f6"] };
  const t = team.find(m => m.id === authorId);
  return { label: t.name, colors: [t.color] };
}
