import { logo1 } from "../assets";

interface LogoProps {
  widthSize?: number;
}

const Logo = ({ widthSize = 30 }: LogoProps) => {
  return (
    <div>
      <img src={logo1} alt="logo" width={widthSize} />
    </div>
  );
};

export default Logo;
