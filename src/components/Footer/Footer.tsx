import { Link } from "react-router-dom";
import instaIcon from '../../assets/icons/instagram-icon.svg';
import faceIcon from '../../assets/icons/facebook-icon.svg';
import xIcon from '../../assets/icons/x-icon.svg';
import logo from '../../../public/LogoWhite.svg';

export function Footer() {
  return (
    <footer className="bg-darkgray text-white px-5 pb-11">
      <div className="grid md:grid-cols-2 md:pt-16 lg:grid-cols-3">
        <section className="mb-10">
            <div className="flex">
              <img src={logo} alt="Digital logo" />
              <h3>Digital Store</h3>
            </div>
            <p className="mt-5 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <div className="flex gap-8">
              <Link to="/face"><img src={faceIcon} alt="Facebook link" /></Link>
              <Link to="/insta"><img src={instaIcon} alt="Instagram link" /></Link>
              <Link to="/x"><img src={xIcon} alt="Instagram link" /></Link>
            </div>
        </section>
        <section className="flex gap-8 mb-10 mt-3 md:my-0">
          <div>
            <h4 className="text-lg font-semibold md:mb-7">Informações</h4>
            <ul>
              <li>
                <Link to="/about">Sobre Drip Store</Link>
              </li>
              <li>
                <Link to="/security">Segurança</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/work">Trabalhe conosco</Link>
              </li>
              <li>
                <Link to="/orders">Meus Pedidos</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold md:mb-7">Informações</h4>
            <ul>
              <li>
                <Link to="/t-shirts">Camisetas</Link>
              </li>
              <li>
                <Link to="/pants">Calças</Link>
              </li>
              <li>
                <Link to="/caps">Bonés</Link>
              </li>
              <li>
                <Link to="/headphones">Headphones</Link>
              </li>
              <li>
                <Link to="/sneakers">Tênis</Link>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h4 className="text-lg font-semibold md:mb-7">Contato</h4>
          <p className="mr-14 mb-11 mt-3 md:mb-3">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
            60150-161
          </p>
          <p>(85) 3051-3411</p>
        </section>
      </div>
      <hr className="opacity-30 mt-10 mb-5" />
      <div className="text-xs text-center">@ 2022 Digital College</div>
    </footer>
  );
}
