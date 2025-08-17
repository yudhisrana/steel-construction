import { cn } from "../../lib/utils";

interface MailIconProps {
  className?: string;
  widthSize?: string;
  heightSize?: string;
}

const MailIcon = ({
  className,
  widthSize = "24",
  heightSize = "24",
}: MailIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={widthSize}
      height={heightSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-mail-icon lucide-mail", className)}
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
};

export default MailIcon;
