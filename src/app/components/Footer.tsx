import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 px-4 md:px-8 bg-gray-50  mt-16">
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* LEFT - LOGO AND CONTACT */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <div className="text-2xl font-bold ">AuraDeals</div>
          </Link>
          <p className="text-secondary-light">
            123 Main Street, City, Country
          </p>
          <span>
            Email:{" "}
            <a href="mailto:info@yoursite.com" className="text-accent">
              info@yoursite.com
            </a>
          </span>
          <span>
            Phone:{" "}
            <a href="tel:+1234567890" className="text-accent">
              +123 456 7890
            </a>
          </span>
        </div>

        {/* MIDDLE - LINKS */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link href="/about" className="hover:text-white">
              About Us
            </Link>
            <Link href="/services" className="hover:text-white">
              Our Services
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact Us
            </Link>
            <Link href="/faq" className="hover:text-white">
              FAQs
            </Link>
          </div>
        </div>

        {/* RIGHT - NEWSLETTER */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
          <p className="text-secondary-light">
            Subscribe to receive updates, promotions, and more.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 w-full bg-secondary text-white border border-secondary-dark rounded-l-md"
            />
            <button className="p-2 bg-accent hover:bg-accent-light text-white rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 border-t border-secondary-dark pt-4">
        <span>© 2024 Aura Deals. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
