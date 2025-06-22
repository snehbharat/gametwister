
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const NavBar = () => {
  return (
    <div className="fixed inset-x-0 top-4 z-50 sm:inset-x-6 p-5">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <div
          className="mx-auto flex h-16 items-center justify-between rounded-xl bg-purple-600/80 px-6 shadow-lg backdrop-blur-md transition-all duration-700"
        >
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold tracking-wide text-white p-2">
              GameTwister
            </span>
          </div>

          
        </div>
      </header>
    </div>
  );
};

export default NavBar;
