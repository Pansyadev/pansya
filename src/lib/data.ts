// src/lib/data.ts

// 1. Definisikan "cetak biru" atau tipe untuk sebuah objek proyek
export type Project = {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  challenge: string;
  solution: string;
  outcome: string;
};

// 2. Terapkan tipe tersebut ke array kita
// Kita memberitahu TypeScript bahwa 'portfolioData' adalah sebuah array dari objek 'Project'
export const portfolioData: Project[] = [
  {
    slug: 'otomatisasilaporan-penjualanharian',
    title: 'Otomatisasi Laporan Penjualan Harian',
    description: 'Sebuah workflow yang menarik data dari beberapa Google Sheets...',
    imageUrl: '/workflow1.webp',
    tags: ['Google Sheets', 'Slack', 'Data Processing'],
    challenge: 'Klien menghabiskan lebih dari 1 jam setiap pagi secara manual...',
    solution: 'Saya merancang dan membangun sebuah workflow n8n yang berjalan...',
    outcome: 'Proses yang tadinya memakan waktu 1 jam lebih kini sepenuhnya otomatis...',
  },
  {
    slug: 'sinkronisasidatapelanggancrm',
    title: 'Sinkronisasi Data Pelanggan CRM',
    description: 'Workflow untuk menyamakan data pelanggan baru antara HubSpot...',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1170',
    tags: ['HubSpot', 'API', 'CRM'],
    challenge: 'Data pelanggan yang tidak sinkron antara HubSpot dan sistem internal...',
    solution: 'Menggunakan webhook di n8n, setiap kali ada pelanggan baru dibuat...',
    outcome: 'Semua tim kini memiliki akses ke data pelanggan yang up-to-date...',
  },
];

//... (di bawah type Project dan portfolioData)

export type Workflow = {
  title: string;
 imageUrl: string;
  description: string;
  price: string;
  buyUrl: string; // Tautan ke Gumroad, Lemon Squeezy, dll.
};

export const workflowData: Workflow[] = [
  {
    title: 'Template Laporan Penjualan Harian',
    imageUrl: "/workflow1.webp",
    description: 'Workflow siap pakai untuk menarik data penjualan dari Google Sheets dan mengirim laporan otomatis ke Slack.',
    price: '$49',
    buyUrl: 'http://lynk.id/autopansya/ydxenv9m1vo4/checkout',
  },
  {
    title: 'Sinkronisasi Kontak Mailchimp & CRM',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1170',
    description: 'Jaga data kontak Anda tetap sinkron antara Mailchimp dan CRM Anda (misal: HubSpot) secara otomatis.',
    price: '$59',
    buyUrl: '#',
  },
  {
    title: 'Bot Notifikasi Stok Produk',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1170',
    description: 'Workflow untuk memonitor stok produk di platform e-commerce Anda dan mengirim notifikasi jika stok menipis.',
    price: '$39',
    buyUrl: '#',
  },
];