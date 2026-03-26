// InterviewPrepAi\frontend\src\components\landingPage\Footer.jsx

import React from "react";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

function Footer() {
  return (
<footer className="relative z-50 mt-32 border-t border-gray-200 bg-white">      
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              PrepZilla<span className="text-blue-600">.AI</span>
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              AI-powered platform to help you crack interviews with confidence.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Product
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">

              <li>
                <Link
                  to="/home"
                  className="hover:text-blue-600 transition-all hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/tips"
                  className="hover:text-blue-600 transition-all hover:translate-x-1 inline-block"
                >
                  Tips & Tricks
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-blue-600 transition-all hover:translate-x-1 inline-block"
                >
                  Interview Prep
                </Link>
              </li>

            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer hover:translate-x-1 transition-all">
                About
              </li>
              <li className="hover:text-blue-600 cursor-pointer hover:translate-x-1 transition-all">
                Contact
              </li>
            </ul>
          </div>

          {/* LEGAL + SOCIAL */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer hover:translate-x-1 transition-all">
                Privacy Policy
              </li>
              <li className="hover:text-blue-600 cursor-pointer hover:translate-x-1 transition-all">
                Terms of Service
              </li>
            </ul>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-5 text-gray-500">

              <a
                href="https://github.com/sachinsk4048"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 hover:scale-110 transition-all"
              >
                <LuGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/sachin-sk-419845329/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 hover:scale-110 transition-all"
              >
                <LuLinkedin size={18} />
              </a>

              <a
                href="mailto:sachinsk30158@gmail.com"
                className="hover:text-blue-600 hover:scale-110 transition-all"
              >
                <LuMail size={18} />
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} PrepZilla.AI. All rights reserved.
          </p>

          <p className="text-xs text-gray-400">
            Built with precision by Sachin 🚀
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;