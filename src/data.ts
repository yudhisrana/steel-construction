import FacebookIcon from "./components/icons/facebook";
import HardHatIcon from "./components/icons/hardHat";
import InstagramIcon from "./components/icons/instagram";
import PencilRulerIcon from "./components/icons/pencilRuler";
import RulerIcon from "./components/icons/ruler";
import ShieldCheckIcon from "./components/icons/shieldCheck";
import WarehouseIcon from "./components/icons/warehouse";
import WrenchIcon from "./components/icons/wrench";
import XIcon from "./components/icons/xIcon";

export const Menu = [
  {
    id: "Beranda",
    name: "Beranda",
    link: "#Beranda",
  },
  {
    id: "TentangKami",
    name: "Tentang Kami",
    link: "#TentangKami",
  },
  {
    id: "Layanan",
    name: "Layanan",
    link: "#Layanan",
  },
  {
    id: "Harga",
    name: "Harga",
    link: "#Harga",
  },
  {
    id: "Portofolio",
    name: "Portofolio",
    link: "#Portofolio",
  },
  {
    id: "Testimoni",
    name: "Testimoni",
    link: "#Testimoni",
  },
  {
    id: "Kontak",
    name: "Kontak",
    link: "#Kontak",
  },
];

export const SocialMediaIcon = [
  {
    icon: FacebookIcon,
    link: "#",
  },
  {
    icon: InstagramIcon,
    link: "#",
  },
  {
    icon: XIcon,
    link: "#",
  },
];

export const AboutGrid = [
  {
    icon: HardHatIcon,
    description: "Berpengalaman",
  },
  {
    icon: PencilRulerIcon,
    description: "Presisi Tinggi",
  },
  {
    icon: ShieldCheckIcon,
    description: "Keamanan Terjamin",
  },
];

export const ServiceCard = [
  {
    icon: WrenchIcon,
    title: "Konstruksi Baja",
    description:
      "Pengerjaan konstruksi baja profesional untuk gedung, gudang, dan proyek infrastruktur dengan standar keamanan tinggi.",
  },
  {
    icon: WarehouseIcon,
    title: "Pembangunan Gudang",
    description:
      "Pembangunan gudang yang kokoh dan fungsional, sesuai kebutuhan penyimpanan dan operasional bisnis Anda.",
  },
  {
    icon: RulerIcon,
    title: "Perencanaan & Desain",
    description:
      "Layanan perencanaan dan desain konstruksi dengan perhitungan presisi untuk memastikan efisiensi dan ketahanan struktur.",
  },
];

export const PricingCard = [
  {
    isPopuler: false,
    startFrom: true,
    title: "JASA + BAHAN",
    description:
      "Layanan lengkap termasuk pengadaan material baja dan pemasangan hingga selesai.",
    features: [
      "Bahan baja berkualitas",
      "Pemasangan dan finishing",
      "Garansi material & pengerjaan",
    ],
    price: "Rp24.500",
  },
  {
    isPopuler: true,
    startFrom: false,
    title: "UPAH / JASA SAJA",
    description:
      "Pengerjaan konstruksi baja profesional dengan tenaga ahli, tanpa pengadaan bahan.",
    features: [
      "Tenaga kerja berpengalaman",
      "Pengawasan kualitas",
      "Garansi pengerjaan",
    ],
    price: "Rp4.900",
  },
];
