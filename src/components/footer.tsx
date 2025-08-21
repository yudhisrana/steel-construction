const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 text-gray-300">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4">
        <div className="">
          © {new Date().getFullYear()} Crayontag. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
