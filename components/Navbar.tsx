"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const onClickMobileMenu = () => {
    return (
      <div className="relative width-full text-red bg-slate-600">"Hi"</div>
    );
  };
  return (
    <>
      <nav className="flexBetween max-container padding-container relative py-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        <Image
          src="menu.svg"
          alt="menu"
          title="Login"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={() =>
            mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
          }
        />
      </nav>

      {mobileMenu ? (
        <div className="z-1 absolute text-white w-full h-full bg-black">
          <ul className="h-full flex-reverse gap-12 lg:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 flex cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
