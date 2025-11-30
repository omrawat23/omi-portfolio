"use client";

import { usePathname } from "next/navigation";
import { NavItem } from "../types/site";
import { Nav } from "./nav";



export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return <Nav className="max-sm:hidden" items={items} activeId={pathname} />;
}
