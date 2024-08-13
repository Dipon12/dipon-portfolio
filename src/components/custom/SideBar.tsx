// src/components/Sidebar.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Make sure to install @heroicons/react

// Define types for the Sidebar structure
interface Link {
  label: string;
  href: string;
}

interface SidebarItem {
  title: string;
  links?: Link[];
  items?: SidebarItem[];
}

interface SidebarProps {
  items: SidebarItem[];
}

// Sidebar Component
const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
              initial={{ x: "200%" }}
              animate={{ x: 0 }}
              exit={{ x: "200%" }}
              transition={{ duration: 0.3 }}
            className="absolute right-10 top-5 md:hidden"
            onClick={toggleSidebar}
          >
            <svg viewBox="0 0 30 30" width="30px" height="30px">
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
            </svg>{" "}
          </motion.button>
        )}
      </AnimatePresence>
      <div className="flex min-h-screen left-0 top-0">
        {/* Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white h-full p-4 transform md:relative md:translate-x-0 md:flex md:flex-col`}
            >
              {/* Close Button for Mobile */}
              <div className="flex justify-end">
                <button className="md:hidden p-2 mb-4" onClick={toggleSidebar}>
                  {/* Close Icon */}
                  <svg viewBox="0 0 24 24" width="24px" height="24px">
                    <path d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M16.707,15.293 c0.391,0.391,0.391,1.023,0,1.414C16.512,16.902,16.256,17,16,17s-0.512-0.098-0.707-0.293L12,13.414l-3.293,3.293 C8.512,16.902,8.256,17,8,17s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L10.586,12L7.293,8.707 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L12,10.586l3.293-3.293c0.391-0.391,1.023-0.391,1.414,0 s0.391,1.023,0,1.414L13.414,12L16.707,15.293z" />
                  </svg>
                </button>
              </div>

              {items.map((item, index) => (
                <SidebarItemComponent key={index} item={item} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="hidden md:block">
        <motion.div
            //   initial={{ x: "-100%" }}
            //   animate={{ x: 0 }}
            //   exit={{ x: "-100%" }}
            //   transition={{ duration: 0.3 }}
              className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white h-full p-4 transform md:relative md:translate-x-0 md:flex md:flex-col`}
            >
              {/* Close Button for Mobile */}
              <div className="flex justify-end">
                <button className="md:hidden p-2 mb-4" onClick={toggleSidebar}>
                  {/* Close Icon */}
                  <svg viewBox="0 0 24 24" width="24px" height="24px">
                    <path d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M16.707,15.293 c0.391,0.391,0.391,1.023,0,1.414C16.512,16.902,16.256,17,16,17s-0.512-0.098-0.707-0.293L12,13.414l-3.293,3.293 C8.512,16.902,8.256,17,8,17s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L10.586,12L7.293,8.707 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L12,10.586l3.293-3.293c0.391-0.391,1.023-0.391,1.414,0 s0.391,1.023,0,1.414L13.414,12L16.707,15.293z" />
                  </svg>
                </button>
              </div>

              {items.map((item, index) => (
                <SidebarItemComponent key={index} item={item} />
              ))}
            </motion.div>
        </div>
      </div>
    </>
  );
};

// SidebarItemComponent (handles both sections and subsections with Framer Motion animations)
interface SidebarItemComponentProps {
  item: SidebarItem;
}

const SidebarItemComponent: React.FC<SidebarItemComponentProps> = ({
  item,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mb-4 last:mb-0">
      <button
        className="w-full flex justify-between items-center p-2 bg-gray-700 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{item.title}</span>
        {item.items || item.links ? <span>{isOpen ? "-" : "+"}</span> : null}
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ height: { duration: 0.3 }, opacity: { duration: 0.2 } }}
        className="overflow-hidden"
      >
        {item.items && (
          <div className="pl-4 mt-2">
            {item.items.map((subItem, index) => (
              <SidebarItemComponent key={index} item={subItem} />
            ))}
          </div>
        )}
        {item.links && (
          <ul className="mt-1 pl-4">
            {item.links.map((link, index) => (
              <li
                key={index}
                className={`p-1 hover:bg-gray-500 rounded ${
                  index === item.links!.length - 1 ? "mb-0" : "mb-2"
                }`}
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default Sidebar;
