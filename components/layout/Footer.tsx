import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";

import { useSettings } from "../../hooks/useSettings";

import CategoriesMenu from "../categoriesMenu/CategoriesMenu";
import MenuLinks from "../menuLinks/MenuLinks";

export default function Footer() {
  const { companyName, companyEmail, companyTel } = useSettings();
  return (
    <div className="bg-lightgrey  p-5 flex justify-between flex-col">
      <div>
        {" "}
        <h1>Electromobile </h1>
        <h4>
          Professionella Tekniker Det är väldigt viktigt för oss att din process
          sker professionellt. Från att du lämnar in din telefon till att du får
          tillbaka den.Det är precis det våra tekniker gör.
        </h4>
        <div className="flex  border-b border-lightgreyx2 py-4 ">
          <ul className="text-primary justify-between flex items-center w-40">
            <li>
              <span className="hover:text-lightgreyx2    transition cursor-pointer">
                <FaInstagram size={20} />
              </span>
            </li>
            <li>
              <span className="hover:text-lightgreyx2    transition cursor-pointer">
                <FaFacebookSquare size={20} />
              </span>
            </li>
            <li>
              <span className="hover:text-lightgreyx2    transition cursor-pointer">
                <FaTwitter size={20} />
              </span>
            </li>
            <span className="hover:text-lightgreyx2    transition cursor-pointer">
              <FaTiktok size={20} />
            </span>
          </ul>
        </div>
        <div>
          <ul>
            <li className="justify-between flex items-center">
              {" "}
              <MenuLinks />
            </li>
          </ul>
        </div>
        <div className="flex">
          <a href={`tel:${companyTel}`}>
            <div className="flex items-center">
              <span className="text-primary mx-4">
                <FiPhone size={20} />
              </span>
              <span className="text-black">{companyTel}</span>
            </div>
          </a>
          <a href={`mailto:${companyEmail}`}>
            <div className="flex items-center cursor-pointer">
              <span className="text-primary mx-4">
                <GoMail size={20} />
              </span>
              <span className="text-black">{companyEmail}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
