"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define types for the Sidebar structure
interface Link {
  label: string;
  href: string;
}

export interface SidebarItem {
  title: string;
  href?: string;
  links?: Link[];
  items?: SidebarItem[];
}

interface SidebarProps {
  items: SidebarItem[];
}

// Sidebar Component
const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // Prevent body scrolling when the sidebar is open in mobile view
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable body scrolling when the sidebar is closed
      document.body.style.overflow = "auto";
    }

    // Clean up when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Sidebar Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ x: "200%" }}
            animate={{ x: 0 }}
            exit={{ x: "200%" }}
            className="absolute right-5 top-5 md:hidden"
            onClick={toggleSidebar}
          >
            <svg viewBox="0 0 30 30" width="30px" height="30px">
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
            </svg>{" "}
          </motion.button>
        )}
      </AnimatePresence>

      <div className="flex min-h-screen left-0 top-0">
        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary text-white h-full p-4 transform md:hidden`}
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

        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <div
            className={`fixed inset-y-0 left-0 w-64 bg-primary text-white h-full p-4 transform flex flex-col`}
          >
            {/* Sidebar Items */}
            {items.map((item, index) => (
              <SidebarItemComponent key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 md:p-0 md:ml-64"></div>
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
      {item.href ? (
        <div className="w-full block">
          <button
            className="w-full flex justify-between items-center p-2 bg-primary-foreground rounded"
            // onClick={() => setIsOpen(!isOpen)}
          >
            <a href={item.href}><span>{item.title}</span></a>
            {item.items || item.links ? <span onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</span> : null}
          </button>
        </div>
      ) : (
        <button
          className="w-full flex justify-between items-center p-2 bg-primary-foreground rounded"
          // onClick={() => setIsOpen(!isOpen)}
        >
          <span>{item.title}</span>
          {item.items || item.links ? <span onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</span> : null}
        </button>
      )}

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
                className={`p-1 hover:bg-primary-foreground rounded ${
                  index === item.links!.length - 1 ? "mb-0" : "mb-2"
                }`}
                key={index}
              >
                <a href={link.href} className="text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default Sidebar;
