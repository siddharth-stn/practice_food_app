import { BURGER_PNG_IMG } from "../utils";

const Header = () => {
  return (
    <div className="p-4 px-10 bg-red-500 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <div className="w-32 flex">
          <img src={BURGER_PNG_IMG} alt="logo" />{" "}
        </div>
        <div className="h-9 text-white font-bold bg-yellow-500 p-2 rounded flex gap-3 items-center">
          <p className="whitespace-nowrap ">Network Status:</p>
          <span>{"🟢"}</span>
        </div>
      </div>

      <div className="">
        <ul className="flex gap-6 text-white font-bold">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
