import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookMessenger,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoIosPin, IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col ps-3 md:ps-0 md:px-0 md:flex-row justify-around">
        <div className="py-2.5">
          <h3 className="text-blue-500">Prophecy Generator</h3>
          <p>Follow us</p>
          <span className="flex">
            <FaLinkedinIn className="px-0.5 text-blue-500" />
            <FaTwitter className="px-0.5 text-blue-500" />
            <FaFacebookMessenger className="px-0.5 text-blue-500" />
            <FaInstagram className="px-0.5 text-blue-500" />
          </span>
        </div>
        <div className="flex py-2.5 flex-col">
          <Link className="About no-underline text-gray-800" to="/">
            About
          </Link>
          <Link className="Prophecies no-underline text-gray-800">
            Prophecies
          </Link>
          <Link className="Contact no-underline text-gray-800">Contact</Link>
          <Link className="footy no-underline text-gray-800">Cheee</Link>
        </div>
        <div className="py-2.5">
          <span className="flex">
            <BsFillTelephoneOutboundFill className="text-blue-500" />
            <p>+23801288848</p>
          </span>

          <span className="flex">
            <IoIosPin className="text-blue-500" />
            <p>+23801288848</p>
          </span>

          <span className="flex">
            <IoIosMail className="text-blue-500" />
            <p>+23801288848</p>
          </span>
        </div>
        <div className="py-2.5">
          <h5>Join Our Newsletter</h5>
          <form>
            <input
              type="text"
              className="p-2 my-2 mr-1 border-2 rounded"
              placeholder="youremail@gmail.com"
            ></input>{" "}
            <button className="bg-blue-600 text-slate-200 my-2 p-2.5 rounded">
              Subscribe
            </button>
          </form>
          <p className="italic hover:not-italic">
            * We will send you updates <br /> for a better spiritual life
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
