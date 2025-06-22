import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord size={20} /> },
  { href: "https://twitter.com", icon: <FaTwitter size={20} /> },
  { href: "https://youtube.com", icon: <FaYoutube size={20} /> },
  { href: "https://medium.com", icon: <FaMedium size={20} /> },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#5542ff] text-black">
      <div className="container mx-auto px-4 py-8">
        {/* Top Row */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex gap-5">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-2 text-[#5542ff] transition-all duration-300 hover:bg-black hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <a
            href="#privacy-policy"
            className="text-center text-sm font-medium underline-offset-4 hover:underline md:text-right"
          >
            Privacy Policy
          </a>
        </div>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-white/40" />

        {/* Newsletter (Optional) */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p className="text-center font-light text-white/90 md:text-left">
            Join our newsletter to stay updated on the latest from the metaverse.
          </p>
          <form className="flex w-full max-w-md items-center justify-center gap-2 md:justify-end">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full px-4 py-2 text-sm text-black placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="rounded-full bg-black px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
