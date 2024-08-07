import NavBar from "../Component/NavBar";
import background from "../assets/background.png";

function Home() {
  return (
    <>
      <img src={background} className="w-full h-screen" />
      <NavBar />
    </>
  );
}

export default Home;
