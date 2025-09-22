import Link from 'next/link';

// Array berisi ikon-ikon yang relevan dengan n8n
const toolIcons = [
  // Slack Icon
  { name: 'Slack', svg: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.528-2.528V6.96a2.528 2.528 0 0 1 2.528-2.528h5.677a2.528 2.528 0 0 1 2.528 2.528v5.677a2.528 2.528 0 0 1-2.528 2.528h-5.677Zm0-2.528h5.677V6.96h-5.677v5.677Z M6.96 5.042a2.528 2.528 0 0 1 2.528-2.528h5.677a2.528 2.528 0 0 1 2.528 2.528v5.677a2.528 2.528 0 0 1-2.528 2.528H9.488v1.884h5.677a2.528 2.528 0 0 1 2.528 2.528v5.677a2.528 2.528 0 0 1-2.528 2.528H9.488a2.528 2.528 0 0 1-2.528-2.528V15.165h1.884v5.677h5.677v-5.677H9.488V9.488H6.96v-4.446Z"/></svg> },
  // Google Sheets Icon
  { name: 'Google Sheets', svg: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 9H18v3h-4.5V9ZM9 12v3H4.5v-3H9Zm4.5 3H18v3h-4.5v-3Zm-4.5 0v3H4.5v-3H9ZM13.5 6H18v3h-4.5V6Zm4.5-3v3H18V3h-4.5ZM9 6v3H4.5V6H9ZM4.5 3v3H9V3H4.5Z"/><path d="M22.5 0h-21A1.5 1.5 0 0 0 0 1.5v21A1.5 1.5 0 0 0 1.5 24h21a1.5 1.5 0 0 0 1.5-1.5v-21A1.5 1.5 0 0 0 22.5 0ZM21 21H3V3h18v18Z"/></svg> },
  // HubSpot Icon
  { name: 'HubSpot', svg: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M13.111 2.475c-1.93-1.405-3.32-2.475-4.596-2.475-3.42 0-3.42 2.76-3.42 4.05v7.05c0 1.29 1.139 1.8 1.881 1.8 1.05 0 1.512-.75 1.512-1.44v-5.67c0-1.02.735-1.14 1.005-.15l.495 1.77c.33 1.17 1.485 3.51 4.23 3.51 2.13 0 4.2-1.605 4.2-4.185v-2.07c0-1.635-1.38-2.85-3.825-2.85zm-1.05 6.27c-1.095 0-1.125-.975-.855-1.995l.495-1.755c.24-.855 1.08-1.02 1.395.03l.105.345v3.375z"/></svg> },
  // Notion Icon
  { name: 'Notion', svg: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M22.628 12.352L14.07 3.793c-.14-.14-.298-.225-.494-.225-.213 0-.388.085-.53.225l-2.023 2.023c-.124.124-.187.28-.187.467 0 .17.062.324.187.449l6.51 6.51-6.57 6.57c-.124.124-.187.28-.187.467 0 .17.062.324.187.449l2.023 2.023c.124.124.28.187.467.187.17 0 .324-.062.449-.187l8.619-8.62c.124-.124.187-.28.187-.467 0-.187-.062-.345-.187-.494zm-13.62-5.46L1.38 14.52v7.108c0 .248.085.45.253.608.17.158.372.237.608.237H9.35c.248 0 .45-.085.608-.253.158-.17.237-.372.237-.608v-7.108L3.257 6.892c-.158-.158-.333-.237-.53-.237-.187 0-.355.08-.512.237z"/></svg> },
];


const CTASection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-16 lg:grid-cols-2">
          {/* Kolom Teks */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Siap Mengoptimalkan Bisnis Anda?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Hubungkan alur kerja Anda, otomatiskan tugas repetitif, dan biarkan bisnis Anda berjalan lebih efisien. Mari diskusikan bagaimana saya bisa membantu.
            </p>
            <div className="mt-8">
              <Link
                href="/kontak"
                className="inline-block rounded-md bg-teal-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Hubungi Saya
              </Link>
            </div>
          </div>
          {/* Kolom Ikon */}
          <div className="relative flex justify-center items-center">
            {/* Anda bisa menambahkan garis-garis SVG di belakang ikon ini nanti jika mau */}
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-3">
              {toolIcons.map((tool, index) => (
                <div 
                  key={tool.name}
                  className="p-4 bg-slate-800 rounded-full flex items-center justify-center aspect-square shadow-lg"
                  // Efek animasi sederhana
                  style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`, opacity: 0 }}
                >
                  <div className="h-8 w-8 text-white">{tool.svg}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;