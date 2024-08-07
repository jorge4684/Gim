import background from "../assets/background.png";

function Register() {
  return (
    <>
      <div className="flex grid-cols-2 bg-gray-200">
        <div>
          <img
            src={background}
            alt=""
            className="hidden md:flex h-screen w-full "
          />
        </div>
        <div className="flex flex-col items-center place-content-center w-full">
          <h2 className="text-center text-5xl font-semibold mt-44">Register</h2>
          <form className="flex flex-col mt-16 h-screen items-center">
            <input
              type="text"
              placeholder="first name"
              className="w-72 h-8 bg-transparent border border-gray-400 rounded-md"
            />
            <input
              type="text"
              placeholder="last name"
              className="w-72 h-8 mt-4 bg-transparent border border-gray-400 rounded-md"
            />
            <input
              type="email"
              placeholder="emal"
              className="w-72 h-8 mt-4 bg-transparent border border-gray-400 rounded-md"
            />
            <input
              type="password"
              placeholder="password"
              className="w-72 h-8 mt-4 bg-transparent border border-gray-400 rounded-md"
            />
            <input
              type="text"
              placeholder="address"
              className="w-72 h-8 mt-4 bg-transparent border border-gray-400 rounded-md"
            />
            <input
              type="number"
              placeholder="phone"
              className="w-72 h-8 mt-4 bg-transparent border border-gray-400 rounded-md"
            />
            <buttom className="flex w-72 mt-4 h-10 rounded-lg text-center items-center place-content-center text-white bg-red-700">
              Register
            </buttom>
            <p>
              You do not have an account{" "}
              <a href="./Login" className="text-red-900">
                Login Here
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
