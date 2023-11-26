import Footer from './Footer';

function AppLayout() {
  const btn =
    'flex h-12 w-[12rem] items-center  justify-center rounded-3xl bg-slate-100 hover:bg-slate-200 text-[#3076f1] font-bold';

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#3076f1]">
      <h1 className="pb-[1.5rem] text-7xl font-bold text-slate-100">
        Bajador de cambios ✋
      </h1>
      <p className="w-3/4 max-w-7xl pb-[1.5rem] pt-[1rem] text-center text-xl font-semibold text-slate-100 ">
        Bajador de Cambios es una página que convierte mensajes subidos de tono
        en comunicaciones mas tranquilas sin perder el significado original.
        Necesitamos tu apoyo para mejorar y mantener la aplicación accesible y
        sin publicidad. Tu donación contribuirá a implementar nuevas
        características. Gracias!
      </p>

      <div className="flex gap-6">
        <button className={btn}>Bajar un cambio</button>
        <button className={btn}>Donar</button>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;

// hoy te termino si o si ok?
