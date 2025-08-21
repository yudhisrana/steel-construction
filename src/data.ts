import { portfolio1 } from "./assets";
import FacebookIcon from "./components/icons/facebook";
import HardHatIcon from "./components/icons/hardHat";
import InstagramIcon from "./components/icons/instagram";
import PencilRulerIcon from "./components/icons/pencilRuler";
import RulerIcon from "./components/icons/ruler";
import ShieldCheckIcon from "./components/icons/shieldCheck";
import WarehouseIcon from "./components/icons/warehouse";
import WrenchIcon from "./components/icons/wrench";

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
    id: "Kontak",
    name: "Kontak",
    link: "#Kontak",
  },
];

export const SocialMediaIcon = [
  {
    icon: FacebookIcon,
    link: "https://www.facebook.com/CrayonTagIDN/",
  },
  {
    icon: InstagramIcon,
    link: "https://www.instagram.com/crayontagconstruction/",
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
    title: "JASA DAN BAHAN",
    description:
      "Pengerjaan konstruksi baja profesional dengan tenaga ahli, dengan pengadaan bahan.",
    including: [
      "Fabrikasi (Di Lokasi Proyek)",
      "Erection",
      "Zinchromate",
      "Alat Kerja (Travo, Bor, Tackle, Kawat Las, Gas & Oxygen)",
      "Crane",
      "Cat Finish Konstruksi Baja",
    ],
    excluding: ["Listrik Kerja (Untuk Fabrikasi)"],
    price: "Rp24.500",
  },
  {
    isPopuler: true,
    startFrom: false,
    title: "UPAH / JASA SAJA",
    description:
      "Pengerjaan konstruksi baja profesional dengan tenaga ahli, tanpa pengadaan bahan.",
    including: [
      "Fabrikasi (Di Lokasi Proyek)",
      "Erection",
      "Zinchromate",
      "Alat Kerja (Travo, Bor, Tackle, Kawat Las, Gas & Oxygen)",
    ],
    excluding: [
      "Listrik Kerja (Untuk Fabrikasi)",
      "Crane (Bila Diperlukan)",
      "Cat Finish Konstruksi Baja",
    ],
    price: "Rp4.900",
  },
];

export const PortfolioCard = [
  {
    img: portfolio1,
    projectName: "Gudang JNE Cipondoh",
    description:
      "Pembangunan gudang logistik dengan rangka baja kokoh dan desain efisien untuk mendukung distribusi barang berskala besar.",
    projectCompleted: "30 Agustus 2022",
  },
  {
    img: portfolio1,
    projectName: "Kantor Startup Jakarta",
    description:
      "Pembangunan kantor modern dengan struktur baja ringan yang memberikan fleksibilitas ruang serta kenyamanan untuk bekerja.",
    projectCompleted: "15 Januari 2023",
  },
  {
    img: portfolio1,
    projectName: "Rumah Tinggal BSD",
    description:
      "Pembangunan rumah tinggal dua lantai dengan rangka baja yang kuat, tahan lama, dan ramah lingkungan.",
    projectCompleted: "12 Mei 2024",
  },
  {
    img: portfolio1,
    projectName: "Gudang JNE Cipondoh",
    description:
      "Pembangunan gudang logistik dengan rangka baja kokoh dan desain efisien untuk mendukung distribusi barang berskala besar.",
    projectCompleted: "30 Agustus 2022",
  },
  {
    img: portfolio1,
    projectName: "Kantor Startup Jakarta",
    description:
      "Pembangunan kantor modern dengan struktur baja ringan yang memberikan fleksibilitas ruang serta kenyamanan untuk bekerja.",
    projectCompleted: "15 Januari 2023",
  },
  {
    img: portfolio1,
    projectName: "Rumah Tinggal BSD",
    description:
      "Pembangunan rumah tinggal dua lantai dengan rangka baja yang kuat, tahan lama, dan ramah lingkungan.",
    projectCompleted: "12 Mei 2024",
  },
];

export const TestimonyCard = [
  {
    clientName: "Dipo Yudhis Rana",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt repudiandae qui temporibus, dicta sit praesentium corporis consequatur enim minus earum.",
  },
  {
    clientName: "Dion Media Raga",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt repudiandae qui temporibus, dicta sit praesentium corporis consequatur enim minus earum.",
  },
  {
    clientName: "Rama Yoga Swara",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt repudiandae qui temporibus, dicta sit praesentium corporis consequatur enim minus earum.",
  },
];
