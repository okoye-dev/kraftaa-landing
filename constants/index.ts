import downloadGoogle from "@/assets/svgs/download-google.svg";
import downloadApple from "@/assets/svgs/download-apple.svg";
import dash from "@/assets/images/carousel/dash.png";
import dash2 from "@/assets/images/carousel/dash (2).png";
import dash3 from "@/assets/images/carousel/dash (3).png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Links = { name: string; href: string };
type DownloadOptions = { store: string; button: StaticImport };

const links: Links[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/" },
  { name: "Top Clients", href: "/" },
];

const footerLinks: Links[] = [
  { name: "Blog", href: "/" },
  { name: "About us", href: "/" },
  { name: "Contact us", href: "/" },
  { name: "Faq", href: "/faq" },
  { name: "Privacy policy", href: "/" },
];

const downloadOptions: DownloadOptions[] = [
  { store: "Google Play", button: downloadGoogle },
  { store: "App Store", button: downloadApple },
];

const carouselImages = [dash, dash2, dash3];

const services = [
  "Generator repair",
  "Fridge repair",
  "CCTV installation",
  "Cobler",
  "Hair dresser",
  "Laundry",
  "Pedicure",
  "Electrician",
  "Plumber",
  "Barber",
  "Cleaner",
  "Tailor",
  "Baker",
  "Painter",
  "Welder",
  "Nail tech",
  "Cook",
  "Carpenter",
];

export { links, footerLinks, downloadOptions, carouselImages, services };
