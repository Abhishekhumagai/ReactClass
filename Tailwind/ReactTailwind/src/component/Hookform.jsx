import { useForm } from "react-hook-form";

function Hookform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-white ">Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="example"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: { message: "Password is required", value: true },
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                  message: "Please enter a valid email",
                },
              })}
              className="mt-1 block w-full p-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.email && (
              <span className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              {...register("Password", {
                required: { message: "Password is required", value: true },
              })}
              className={`mt-1 block w-full p-2 text-gray-900 bg-gray-50 border ${
                errors.Password ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
            {errors.Password && (
              <span className="text-sm text-red-500 mt-1">
                {errors.Password.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="ConformPassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              ConformPassword
            </label>
            <input
              {...register("ConformPassword", {
                required: {
                  message: " ConformPassword is required",
                  value: true,
                },
              })}
              className={`mt-1 block w-full p-2 text-gray-900 bg-gray-50 border ${
                errors.ConformPassword ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
            {errors.ConformPassword && (
              <span className="text-sm text-red-500 mt-1">
                {errors.ConformPassword.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm shadow-lg focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hookform;
