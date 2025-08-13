import { useState } from "react";
import { Menu, SocialMediaIcon } from "../data";
import MenuIcon from "./icons/menu";
import Logo from "./logo";
import MenuXIcon from "./icons/menuX";
import MenuMobile from "./menuMobile";
import { Button } from "./ui/button";
import useActiveMenu from "../hooks/useActiveMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const activeLink = useActiveMenu();

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FBFBFB]">
      {/* menu mobile */}
      <MenuMobile isOpen={openMenu} onClose={handleOpenMenu} />

      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* logo */}
        <Logo />

        {/* menu navbar */}
        <div className="hidden lg:block">
          <ul className="flex gap-2">
            {Menu.map((menu, index) => (
              <li key={index}>
                <Button
                  asChild
                  variant={"ghost"}
                  className={`rounded-full text-lg ${activeLink === menu.id ? "bg-gray-200 font-semibold text-gray-800" : ""}`}
                >
                  <a href={menu.link}>{menu.name}</a>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* social media icon */}
        <div className="flex items-center gap-4">
          <ul className="flex gap-4">
            {SocialMediaIcon.map((icon, index) => (
              <li key={index}>{icon.icon()}</li>
            ))}
          </ul>

          {/* toggle menu */}
          <button className="lg:hidden" onClick={handleOpenMenu}>
            {openMenu ? <MenuXIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
