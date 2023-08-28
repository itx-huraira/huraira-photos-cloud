import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2023 Huraira Photos Cloud - All Rights Reserved
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            Developed by Abu Huraira
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
