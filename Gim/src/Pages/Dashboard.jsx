import icon from "../assets/icon.png";

function Dashboard() {
  return (
    <>
      <div className="flex w-full h-20 bg-slate-100 items-center place-content-between static">
        <img
          src={icon}
          alt="icon"
          className="flex rounded-full w-14 items-center m-3"
        />
        <img
          src={icon}
          alt="icon"
          className="flex rounded-full w-14 items-center m-3"
        />
      </div>
      <section className="flex w-full h-96 bg-green-600 scroll-auto"></section>
      <section className="flex w-full h-96 bg-blue-600 scroll-auto"></section>
      <section className="flex grid-cols-2 w-full h-96 scroll-auto">
        <div className="flex flex-col w-3/4 bg-slate-600 items-center place-content-center">
        <h2 className="flex place-content-center text-3xl">observations</h2>
        <textarea className="flex w-3/4 mt-2 h-80 bg-gray-200"></textarea>
        </div>
        <div className="flex w-1/4 bg-green-600 items-center place-content-center">
            
        <buttom className="flex w-32 h-12 bg-slate-600 rounded-lg items-center place-content-center text-white right-0">coach</buttom>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
