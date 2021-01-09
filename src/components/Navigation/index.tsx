import { FC } from "react";
import { LOGO } from "../../utils/assets";

const Navigation: FC = () => {
  const sections = ["Serviços", "Time", "Sobre nós", "Contato"];

  return (
    <>
      <nav className="bg-gray-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-16">
                <img width="200" src={LOGO} alt="Workflow" />
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline lg:gap-x-10 space-x-4">
                  {sections.map((section) => (
                    <a
                      href="test"
                      className="px-3 border-transparent py-2 font-light text-lg uppercase border-b-2 hover:border-gray-900"
                    >
                      {section}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {sections.map((section) => (
              <a
                href="#"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
