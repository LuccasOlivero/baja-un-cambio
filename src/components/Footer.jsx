function Footer() {
  return (
    <footer className="absolute bottom-0 pb-[1rem] text-lg font-semibold text-slate-300 hover:cursor-pointer hover:text-slate-400">
      &copy; by Lucas Olivero {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
