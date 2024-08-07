import background from "../assets/background.png"

function Login() {
  return (
    <>
      <div className="flex grid-cols-2 bg-slate-300">
        <div>
        <img src={background} alt="" className="hidden md:flex h-screen w-3/4 " />
        </div>
        <div className="flex flex-col place-content-center">
          <h2 className="text-center text-xl">Login</h2>
        <form className="flex flex-col" >
          <input type="email" placeholder="email" className="w-3/4 border-black"/>
          <input type="password" placeholder="password" className=""/>
          <buttom className="flex w-28 h-10 rounded-lg text-center items-center place-content-center  bg-red-700">Login</buttom>
          <p>You do not have an account<a className="text-red-900">Register Here</a></p>
        </form>
        </div>

      </div>
    </>
  )
}

export default Login