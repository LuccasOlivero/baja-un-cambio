function Dashboard() {
  function handleSubmit(e) {
    e.preventDefault();
    alert('nice');
  }

  return (
    <form
      className="relative z-10 flex h-96 w-2/4 max-w-4xl flex-col items-end justify-between gap-4 rounded-2xl bg-slate-50 p-6 shadow-lg"
      onSubmit={handleSubmit}
    >
      <div className="h-2/4 w-full">
        <textarea
          type="text"
          className="h-full w-full resize-none border px-2 pt-1 text-start text-xl focus:outline-none"
          placeholder="Exemplo: andate a la puta que te parió, no te quiero ver más hijo de un camion de putas"
        />
      </div>

      <div className="h-2/4 w-full border">
        <p className="h-full w-full border px-2 pt-1 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          dignissimos voluptas, temporibus ipsum eum suscipit voluptatum quidem
          blanditiis at fugiat aliquid nesciunt obcaecati. Excepturi debitis
          ipsum minus fugit aliquam nobis.
        </p>
      </div>

      <button className="'flex font-bold' h-12 w-[12rem]  items-center justify-center rounded-3xl bg-[#3076f1] font-bold text-white hover:bg-[#5076f1]">
        Tomate un té
      </button>
    </form>
  );
}

export default Dashboard;
