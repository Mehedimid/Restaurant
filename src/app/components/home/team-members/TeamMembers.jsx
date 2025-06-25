"use client";

import Image from "next/image";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";

const teamMembers = [
  {
    name: "Mark Henry",
    role: "Owner",
    image: "https://i.postimg.cc/4x3cqtyp/unsplash-v3-Ol-BE6-fh-U.png",
  },
  {
    name: "Lucky Helen",
    role: "Chef",
    image: "https://i.postimg.cc/4x3cqtyp/unsplash-v3-Ol-BE6-fh-U.png",
  },
  {
    name: "Moon Henry",
    role: "Founder",
    image: "https://i.postimg.cc/4x3cqtyp/unsplash-v3-Ol-BE6-fh-U.png",
  },
  {
    name: "Tom Monrow",
    role: "Specialist",
    image: "https://i.postimg.cc/4x3cqtyp/unsplash-v3-Ol-BE6-fh-U.png",
  },
];

export default function TeamMembers() {
  return (
    <section
      className="relative mb-10 md:mb-0"
      style={{
        backgroundImage: "url('https://i.postimg.cc/pXGk1PCc/Bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <div className="flex justify-center items-center py-5 md:py-24">
          <SectionTitle
            mainTitle="Team Members"
            description="Meet the passionate individuals behind our success. Each team member brings a unique blend of expertise, creativity, and dedication to the table."
            textColor="text-white md:w-2/3"
          />
        </div>

        <div className="w-11/12 md:w-2/3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center top-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* Image floated above card */}
              <div className="">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={300}
                  className="mx-auto w-full h-60 object-cover rounded-t-md shadow-md"
                />
              </div>

              {/* White card below the image */}
              <div className="bg-white px-4 py-4 rounded-b-md shadow-md -mt-4 relative z-20">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
