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
    slug: 'otomatisasi-laporan-penjualan-harian',
    title: 'Otomatisasi Laporan Penjualan Harian',
    description: 'Sebuah workflow yang menarik data dari beberapa Google Sheets...',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e28f81?q=80&w=1170',
    tags: ['Google Sheets', 'Slack', 'Data Processing'],
    challenge: 'Klien menghabiskan lebih dari 1 jam setiap pagi secara manual...',
    solution: 'Saya merancang dan membangun sebuah workflow n8n yang berjalan...',
    outcome: 'Proses yang tadinya memakan waktu 1 jam lebih kini sepenuhnya otomatis...',
  },
  {
    slug: 'sinkronisasi-data-pelanggan-crm',
    title: 'Sinkronisasi Data Pelanggan CRM',
    description: 'Workflow untuk menyamakan data pelanggan baru antara HubSpot...',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1170',
    tags: ['HubSpot', 'API', 'CRM'],
    challenge: 'Data pelanggan yang tidak sinkron antara HubSpot dan sistem internal...',
    solution: 'Menggunakan webhook di n8n, setiap kali ada pelanggan baru dibuat...',
    outcome: 'Semua tim kini memiliki akses ke data pelanggan yang up-to-date...',
  },
];