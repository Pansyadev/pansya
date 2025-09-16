import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-teal-600">Tentang Saya</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Developer & Ahli Automasi
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Saya percaya bahwa teknologi terbaik adalah teknologi yang bekerja di belakang layar untuk membuat hidup kita lebih mudah.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-start">
            {/* Kolom Gambar */}
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1171"
                alt="Foto profil profesional"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Kolom Teks */}
            <div className="text-lg leading-7 text-slate-700">
              <p>
                Halo! Saya [Nama Anda], seorang developer n8n profesional dengan hasrat untuk memecahkan masalah kompleks melalui automasi yang cerdas. Perjalanan saya di dunia teknologi dimulai dari [sebutkan latar belakang singkat Anda, misal: ketertarikan pada efisiensi proses bisnis].
              </p>
              <p className="mt-6">
                Saya menemukan n8n dan langsung jatuh cinta pada kemampuannya untuk menghubungkan berbagai aplikasi dan layanan tanpa batas. Bagi saya, setiap workflow adalah sebuah puzzle yang menantang untuk dipecahkan, dan kepuasan terbesar saya adalah melihat solusi yang saya bangun berhasil menghemat puluhan jam kerja manual untuk klien saya.
              </p>
              <h3 className="mt-10 text-2xl font-bold text-slate-900">Misi Saya</h3>
              <p className="mt-4">
                Misi saya sederhana: memberdayakan bisnis untuk fokus pada hal yang paling penting dengan mengotomatiskan tugas-tugas repetitif yang membosankan. Saya ingin Anda menghabiskan lebih sedikit waktu untuk bekerja *di dalam* bisnis Anda, dan lebih banyak waktu untuk bekerja *mengembangkan* bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;