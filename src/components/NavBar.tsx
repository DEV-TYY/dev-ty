"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { Content, KeyTextField, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import Button from "./Button";
import { usePathname } from "next/navigation";

export default function NavBar({
  settings,
}: {
  settings: Content.SettingsDocument;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
        <div className="flex items-center justify-between">
          <NameLogo name="DEV.TY"/>
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            aria-label="Close menu"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden "
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
          {settings.data.nav_item.map(({ link, label }, index) => (
            <React.Fragment key={label}>
              <li className="first:mt-8">
                <PrismicNextLink
                  className={clsx(
                    "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 ",
                  )}
                  field={link}
                  onClick={() => setOpen(false)}
                  aria-current={
                    pathname.includes(asLink(link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  <span
                    className={clsx(
                      "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                      pathname.includes(asLink(link) as string)
                        ? "translate-y-6"
                        : "translate-y-18",
                    )}
                  />
                  <span className="relative">{label}</span>
                </PrismicNextLink>
              </li>
            </React.Fragment>
          ))}
          <li>
            <Button
              linkField={settings.data.cta_link}
              label={settings.data.cta_label}
              className="ml-3"
            />
          </li>
        </div>
        <DesktopMenu settings={settings} pathname={pathname} />
      </ul>
    </nav>
  );
}

function NameLogo({ name }: { name: KeyTextField }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
      {name}
    </Link>
  );
}

// Menu data could come from Prismic as well
const menuData = [
  { name: "About", url: "/about" },
  { name: "Projects", url: "/projects" },
  { name: "Blog", url: "/blog" },
  { name: "Gallery", url: "/gallery" },
  { name: "Resume", url: "/resume" },
];

// Additional menu item for contact page
const contactData = [
  { name: "Contact", url: "/about" },
]

// Desktop menu for larger screens
function DesktopMenu({
  pathname,
}: {
  settings: Content.SettingsDocument;
  pathname: string;
}) {
  return (
    <ul className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
      {menuData.map(({ url, name }, index) => (
        <React.Fragment key={name}>
          <li>
            <Link
              href={url}
              className={clsx(
                "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900",
              )}
              aria-current={pathname.includes(url) ? "page" : undefined}
            >
              <span className={clsx(
                  "absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                  pathname.includes(url) ? "translate-y-6" : "translate-y-8",
                )}
              />
              <span className="relative">{name}</span>
            </Link>
          </li>
        </React.Fragment>
      ))}

      {contactData.map(({ url, name }, index) => (
        <li key={index}>
          <Button
            linkField={{ link_type: "Web", url }} // wrap string into a Prismic-style field
            label={name}
            className="ml-3"
          />
        </li>
      ))}
    </ul>
  );
}
