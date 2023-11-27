import { NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';

function AppLayout() {
  const btn =
    'flex h-12 w-[12rem] items-center  justify-center rounded-3xl bg-slate-100 hover:bg-slate-200 text-[#3076f1] font-bold';

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#3076f1]">
      <h1 className="pb-[1.5rem] text-7xl font-bold text-slate-100">
        Tomate un té 🫖
      </h1>

      <Outlet />

      <p className="w-3/4 max-w-7xl pb-[1.5rem] pt-[1rem] text-center text-xl font-semibold text-slate-100 ">
        Tomate un té es una página que convierte mensajes subidos de tono en
        comunicaciones mas tranquilas sin perder el significado original. Para
        poder seguir bancando ese proyecto, mejorar y mantenerlo accesible y sin
        publicidad, necesitamos tu apoyo. Tu donación contribuirá a mantener la
        pagína aciva y con constantes actualizaciones. Gracias!
      </p>

      <div className="flex gap-6">
        <NavLink to="/dashboard">
          <button className={btn}>Tomar un té</button>
        </NavLink>

        <NavLink to="#">
          <button className={btn}>Donar</button>
        </NavLink>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;

// hoy te termino si o si ok?
