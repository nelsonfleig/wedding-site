import { illustrations } from "../constants";
const Footer = () => {
  return (
    <footer className="relative text-center py-12 pb-20 text-gray-500 overflow-hidden">
      <img
        src={illustrations.fan}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-3 -left-4 w-24 md:w-36 lg:w-44 pointer-events-none select-none rounded-none"
      />
      <img
        src={illustrations.vases}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-3 -right-4 w-20 md:w-28 lg:w-36 pointer-events-none select-none rounded-none"
      />

      <p>Hecho con mucho ❤️ para nuestra boda</p>
    </footer>
  );
};

export default Footer;
