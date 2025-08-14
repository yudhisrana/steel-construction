import { Menu } from "../data";
import useActiveMenu from "../hooks/useActiveMenu";
import { Button } from "./ui/button";

interface menuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuMobile = ({ isOpen, onClose }: menuMobileProps) => {
  const activeLink = useActiveMenu();

  return (
    <div
      className={`fixed top-16 left-0 min-h-screen w-full transform bg-[#FBFBFB] p-4 transition-all duration-500 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-5 opacity-0"}`}
    >
      <ul className="flex flex-col gap-4">
        {Menu.map((menu, index) => (
          <li key={index}>
            <Button
              asChild
              variant={"ghost"}
              className={`rounded-full text-lg ${activeLink === menu.id ? "bg-gray-200 font-semibold text-gray-800" : ""}`}
            >
              <a href={menu.link} onClick={onClose}>
                {menu.name}
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuMobile;
