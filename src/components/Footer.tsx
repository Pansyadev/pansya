const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-xs leading-5 text-slate-500">
            &copy; {currentYear} N8N Pro Dev. All rights reserved.
          </p>
        </div>
        {/* Tautan Sosial Media bisa ditambahkan di sini nanti */}
      </div>
    </footer>
  );
};

export default Footer;