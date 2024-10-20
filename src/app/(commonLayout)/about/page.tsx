import Image from "next/image";
import { FC } from "react";

const AboutUs: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-aura mb-4 animate__animated animate__fadeIn animate__delay-1s">
            About Us
          </h1>
          <p className="text-lg text-gray-600 mb-8 animate__animated animate__fadeIn animate__delay-2s">
            We are passionate about bringing you the best shopping experience and offering top-quality products.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Our Story Section */}
          <div className="max-w-lg mx-auto mb-16 animate__animated animate__fadeIn animate__delay-3s">
            <h2 className="text-3xl font-semibold text-aura mb-4">Our Story</h2>
            <p className="text-gray-700 text-lg">
              We started with a simple vision: to provide a hassle-free shopping experience with the best quality products. Our team is dedicated to curating items that are not only affordable but also high-quality, catering to all your needs. Whether you're a fitness enthusiast, a traveler, or just someone looking to enhance your daily life, we are here to help!
            </p>
          </div>

          {/* Team Section */}
          <div className="max-w-lg mx-auto mb-16 animate__animated animate__fadeIn animate__delay-4s">
            <h2 className="text-3xl font-semibold text-aura mb-4">Meet Our Team</h2>
            <div className="flex gap-8">
              <div className="text-center">
                <Image
                  src="https://via.placeholder.com/150"
                  alt="Team Member 1"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-500">CEO & Founder</p>
              </div>
              <div className="text-center">
                <Image
                  src="https://via.placeholder.com/150"
                  alt="Team Member 2"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-500">Product Manager</p>
              </div>
            </div>
          </div>

          {/* Our Vision Section */}
          <div className="max-w-lg mx-auto mb-16 animate__animated animate__fadeIn animate__delay-5s">
            <h2 className="text-3xl font-semibold text-aura mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg">
              Our vision is to create a seamless shopping experience that enriches your life, bringing high-quality products at affordable prices. We believe in building strong relationships with our customers, offering personalized service and building trust with every transaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
