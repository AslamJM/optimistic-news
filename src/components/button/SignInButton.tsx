import Icons from "@/icons";

const SignInButton = () => {
  return (
    <button className="bg-slate-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center w-[200] mx-auto  mb-1">
      <Icons.Google />
      <span className="ml-2">Sign In with Google</span>
    </button>
  );
};

export default SignInButton;
