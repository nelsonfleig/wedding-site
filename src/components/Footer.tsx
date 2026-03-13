import vases from "../assets/illustrations/IMG_7094.png";
import fan from "../assets/illustrations/IMG_7086.png";
const Footer = () => {
  return (
    <footer className="relative text-center py-12 text-gray-500">
      <img
        src={fan}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-3 -left-4 w-24 md:w-36 lg:w-44 pointer-events-none select-none rounded-none"
      />
      <img
        src={vases}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-3 -right-4 w-20 md:w-28 lg:w-36 pointer-events-none select-none rounded-none"
      />

      <p>Made with 💙 for our wedding</p>
    </footer>
  );
};

export default Footer;
