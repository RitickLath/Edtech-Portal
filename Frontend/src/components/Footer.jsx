import React from "react";
import {
  careerBuilding,
  catalog,
  community,
  company,
  languages,
  Plans,
  resources,
  subjects,
  support,
} from "../constants/footer";
import FooterPart from "./FooterPart";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#000814] text-white pb-5 ">
      <div className="w-full bg-[#000814] text-white px-10 lg:px-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <div>
          <FooterPart heading="Company" arrayname={company} />
          <br />
          <FooterPart heading="Support" arrayname={support} />
        </div>
        <FooterPart heading="Resources" arrayname={resources} />
        <div>
          <FooterPart heading="Community" arrayname={community} />
          <br />
          <FooterPart heading="Plans" arrayname={Plans} />
        </div>
        <FooterPart heading="Subjects" arrayname={subjects} />
        <FooterPart heading="Languages" arrayname={languages} />
        <div>
          <FooterPart heading="Catalog" arrayname={catalog} />
          <FooterPart heading="Career Building" arrayname={careerBuilding} />
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="mt-4 w-[80%] lg:w-[92%] border-[#6E727F] border-[1/6px]" />
      </div>
      <div className="md:flex w-full h-16 md:justify-between md:items-center px-10 py-2 lg:px-14 text-center">
        <div>
          <Link className="pr-4 text-[#6E727F] hover:text-[#C5C7D4]">
            Privacy Policy
          </Link>
          <Link className="px-4 text-[#6E727F] hover:text-[#C5C7D4]">
            Cookie Policy
          </Link>
          <Link className="px-4 text-[#6E727F] hover:text-[#C5C7D4]">
            Terms
          </Link>
        </div>
        <div className="text-[#C5C7D4]">
          <h1>Made with ❤️ Ritick Lath @EduBridge</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
