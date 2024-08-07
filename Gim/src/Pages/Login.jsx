import background from "../assets/background.png"

function Login() {
  return (
    <>
      <div className="flex grid-cols-2 bg-gray-200">
        <div>
        <img src={background} alt="" className="hidden md:flex h-screen w-full " />
        </div>
        <div className="flex flex-col items-center place-content-center w-full">
          <h2 className="text-center text-5xl font-semibold mt-44">Login</h2>
        <form className="flex flex-col mt-16 h-screen items-center" >
          <input type="email" placeholder="email" className="w-72 h-8 bg-transparent border border-gray-400"/>
          <input type="password" placeholder="password" className="w-72 h-8 mt-4 bg-transparent border border-gray-400"/>
          <buttom className="flex w-72 mt-4 h-10 rounded-lg text-center items-center place-content-center text-white bg-red-700">Login</buttom>
          <p>You do not have an account <a href="./Register" className="text-red-900">Register Here</a></p>
        </form>
        </div>

      </div>
    </>
  )
}

export default Login