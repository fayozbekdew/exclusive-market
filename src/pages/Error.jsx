import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="flex flex-col gap-y-2 items-center justify-center min-h-[100vh]">
        <p className="text-9xl font-semibold text-[#2245a5]">404</p>
        <p className="text-3xl ">Your visited page not found. You may go home page.</p>
        <Link className='border-[3px] bg-[#f05050] text-white text-[20px] rounded-md py-2 px-4 mt-6' to="/">Back to home page</Link>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <p className="text-6xl font-semibold">This is some error</p>
    </div>
  );
};

export default Error;
