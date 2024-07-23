import { FooterContact } from "./components/FooterContact";
import { FooterInformations } from "./components/FooterInformations";
import { FooterLogo } from "./components/FooterLogo";

export function Footer() {
  return (
    <footer className="bg-darkgray">
      <div className="mx-auto max-w-screen-2xl px-5 pb-10 pt-12 text-lightgray2 md:px-24 md:pb-5 md:pt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <FooterLogo />
          <FooterInformations />
          <FooterContact />
        </div>
        <hr className="mb-5 mt-10 opacity-30" />
        <div className="text-center text-xs">@ 2022 Digital College</div>
      </div>
    </footer>
  );
}
