import { Link } from "react-router-dom";

export function FooterInformations() {
  const footerLinks = [
    [
      { path: "/about", text: "Sobre Drip Store" },
      { path: "/security", text: "Segurança" },
      { path: "/wishlist", text: "Wishlist" },
      { path: "/blog", text: "Blog" },
      { path: "/work", text: "Trabalhe conosco" },
      { path: "/orders", text: "Meus Pedidos" },
    ],
    [
      { path: "/t-shirts", text: "Camisetas" },
      { path: "/pants", text: "Calças" },
      { path: "/caps", text: "Bonés" },
      { path: "/headphones", text: "Headphones" },
      { path: "/sneakers", text: "Tênis" },
    ],
  ];

  return (
    <section className="mb-10 mt-3 flex gap-8 md:my-0">
      {footerLinks.map((links, index) => (
        <div key={index}>
          <h4 className="mb-3 text-lg font-semibold text-white md:mb-7">
            Informações
          </h4>
          <ul className="flex flex-col gap-1">
            {links.map((item, subIndex) => (
              <li key={subIndex} className="hover:text-lightgray3">
                <Link to={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}