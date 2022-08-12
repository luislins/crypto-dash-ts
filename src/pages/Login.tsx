import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/Context";
export function Login() {
  const { auth } = useStateContext();
  const token = auth;

  const login = (data: any) => {
    let params = {
      email: data.email,
      password: data.password,
    };

    fetch("http://localhost:4000/api/login", {
      method: "POST",
    })
      .then(function (response) {
        //   IF EMAIL ALREADY EXISTS
        localStorage.setItem("auth", "123");
        setTimeout(() => {
          <Navigate to="/" />;
        }, 3000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <form className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a
            href="#"
            className="text-xs font-bold text-gray-600 hover:underline"
          >
            Esqueceu a senha?
          </a>
          <div className="mt-6 text-center">
            <button className="w-72 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="font-medium text-gray-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
