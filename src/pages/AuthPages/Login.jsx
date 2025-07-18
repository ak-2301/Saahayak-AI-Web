import { useState } from "react";
import InputForm from "../../components/InputForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

      if ( !email || !password) {
          toast.error("Please fill all the fields!");
          return;
        }
    
        try {
          // Simulate registration success
          toast.success("Logged In successfully!");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000); // Wait for 2 seconds before redirect
        } catch (error) {
          toast.error("Something went wrong!");
          console.error(error);
        }
  };

  return (
    <>
       <ToastContainer position="top-center" autoClose={1500} />
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424..."
                  fill="currentColor"
                />
              </svg>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Saahayak
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Empowering Teachers in Multi-Grade Classrooms
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                <span className="sr-only">Home</span>
              </a>
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Saahayak
              </h1>
              <p className="mt-4 leading-relaxed text-gray-500">
             Empowering Teachers in Multi-Grade Classrooms
              </p>
            </div>

            <div className="flex items-center justify-center">
              <h1 className="text-2xl">Log in to your Account !!</h1>
            </div>

            <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit}>
              <InputForm
                htmlFor="email"
                labelText="Email"
                type="email"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Enter your email"
              />

              <InputForm
                htmlFor="password"
                labelText="Password"
                type="password"
                value={password}
                handleChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Enter your password"
              />

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                  and
                  <a href="#" className="text-gray-700 underline"> privacy policy</a>.
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-2 text-sm font-medium text-white"
                >
                  Login
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Not a user?
                  <Link to="/signup" className="text-gray-700 underline">
                    Register Here
                  </Link>.
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
    </>
  );
};

export default Login;
