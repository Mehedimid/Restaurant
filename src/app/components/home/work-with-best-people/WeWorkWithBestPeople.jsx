"use client";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";

const logos = [
  "https://i.postimg.cc/CMH7Ghkf/image-2-1.png",
  "https://i.postimg.cc/GhLQzWxg/image-56-1.png",
  "https://i.postimg.cc/tCBzcBrq/image-60.png",
  "https://i.postimg.cc/fRFfzJn1/image-62.png",
];

export default function WeWorkWithBestPeople() {
  return (
    <div className="py-10 md:py-20 w-2/3 mx-auto">
      <SectionTitle
        subTitle="partners and clients"
        mainTitle="we work with the best people"
      />

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="mt-6"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-8 grayscale opacity-70 hover:opacity-100 transition"
          >
            <img src={logo} alt={`Logo ${index + 1}`} className="w-40 h-auto" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
