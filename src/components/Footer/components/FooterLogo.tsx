import instaIcon from "../../../assets/icons/instagram-icon.svg";
import faceIcon from "../../../assets/icons/facebook-icon.svg";
import xIcon from "../../../assets/icons/x-icon.svg";
import logo from "/LogoWhite.svg";

import { Link } from "react-router-dom";

export function FooterLogo() {
  return (
    <section className="mb-10 md:col-span-2 lg:col-auto xl:col-span-2">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Digital logo"
          className="h-6 w-6 md:h-auto md:w-auto"
        />
        <h3 className="ml-2 text-2xl text-white md:mt-1 md:text-4xl">
          Digital Store
        </h3>
      </div>
      <p className="mb-8 mt-5 w-3/4 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </p>
      <div className="flex gap-8">
        <Link to="/face">
          <img src={faceIcon} alt="Facebook link" />
        </Link>
        <Link to="/insta">
          <img src={instaIcon} alt="Instagram link" />
        </Link>
        <Link to="/x">
          <img src={xIcon} alt="X twitter link" />
        </Link>
      </div>
    </section>
  );
}
