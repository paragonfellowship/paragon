"use client";
import Image from "next/image";
import Link from "next/link";
import HEADER_LOGO from '../assets/header-logo.svg';
import { MedText } from "./Typography";
import { RiArrowRightLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [topBarHeight, setTopBarHeight] = useState(0);

  // Measure the height of the top bar after rendering
  useEffect(() => {
    const topBarElement = document.querySelector('.top-bar');
    // Check if the element exists and is an HTMLElement before accessing offsetHeight
    if (topBarElement instanceof HTMLElement) {
      setTopBarHeight(topBarElement.offsetHeight);
    }
  }, [isMenuOpen]); // Re-measure if menu open state changes (though height shouldn't change, good practice)


  // Add effect to prevent body scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]); // Re-run effect when isMenuOpen changes

  // Define menu structure centrally
  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Team", subLinks: [ // Desktop uses this for hover
        { href: "/team", label: "Organizing Team" }, // Mobile will flatten these
        { href: "/team/speakers", label: "Guest Speakers" },
    ]},
    { href: "/students", label: "For Students", subLinks: [
        { href: "/students", label: "Fellowship Information" }, // Mobile will flatten these
        { href: "/students/mentorship", label: "Mentorship Information" },
    ]},
    { href: "/governments", label: "For Governments" },
    { href: "/projects", label: "Projects" },
    { href: "mailto:paragonfellowship@gmail.com", label: "Contact" },
  ];

  // Function to close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* --- Top Bar Container --- */}
      {/* Added 'top-bar' class to measure its height */}
      <div className="top-bar fixed top-0 left-0 p-4 md:p-8 flex w-screen z-50 justify-between items-center">
        {/* Background Gradient - Made Lighter */}
        <div className="absolute bottom-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-dark to-transparent" />

        {/* Logo */}
        <Link href="/" onClick={handleLinkClick}>
          <Image
            src={HEADER_LOGO}
            alt="Paragon Fellowship"
            className="h-12 w-32 md:h-16 md:w-40 lg:h-20 lg:w-60 object-contain relative z-10"
          />
        </Link>

        {/* --- Desktop Navigation (Hidden on Mobile) --- */}
        <nav className="hidden md:flex md:items-center md:space-x-8 uppercase">
          {menuLinks.map((link) => (
            // Desktop keeps the hover dropdown structure
            link.subLinks ? (
              <div key={link.href} className="relative group">
                 <span className="cursor-pointer">
                   <MedText className="text-white">{link.label}</MedText>
                 </span>
                <div className="absolute hidden group-hover:block pt-2 w-48 left-0 z-20">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {link.subLinks.map(subLink => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block px-4 py-2 text-dark hover:bg-gray-100 flex items-center normal-case"
                      >
                        <RiArrowRightLine className="mr-2 flex-shrink-0" />
                        <span>{subLink.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href}>
                <MedText className="text-white">{link.label}</MedText>
              </Link>
            )
          ))}
        </nav>

        {/* --- Mobile Menu Button (Visible on Mobile) --- */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl focus:outline-none z-50 relative"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`
          fixed inset-0 z-40 bg-dark/95
          flex flex-col items-center
          transition-opacity duration-300 ease-in-out
          md:hidden
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        // Add padding top dynamically based on topBarHeight
        style={{ paddingTop: `${topBarHeight}px` }}
      >
        {/* Mobile Navigation - Flattened Structure for Even Spacing */}
        {/* Removed justify-center to align items from the top with padding */}
        <nav className="flex flex-col items-center space-y-8 text-center w-full py-8 overflow-y-auto"> {/* Added py-8 and overflow-y-auto */}
           {/* Use flatMap to render sublinks directly for 'Team' */}
           {menuLinks.flatMap((link) => {
                // If the link has subLinks (like 'Team'), map over subLinks and return Link components for each
                if (link.subLinks) {
                    return link.subLinks.map(subLink => (
                        <Link key={subLink.href} href={subLink.href} onClick={handleLinkClick}>
                            <MedText className="text-white text-2xl uppercase">{subLink.label}</MedText>
                        </Link>
                    ));
                }
                // Otherwise (if it's a regular link without subLinks), return the Link component in an array for flatMap
                else {
                    return [( // Must return array element for flatMap
                        <Link key={link.href} href={link.href} onClick={handleLinkClick}>
                            <MedText className="text-white text-2xl uppercase">{link.label}</MedText>
                        </Link>
                    )];
                }
           })}
           {/* ↑↑↑ Changed map to flatMap. Sublinks (like 'Organizing Team', 'Guest Speakers')
                  are now rendered as direct children of <nav>, just like 'Home', 'For Students', etc.
                  The 'space-y-8' class on <nav> will now apply equal spacing between all items. */}
        </nav>
      </div>
    </>
  );
}