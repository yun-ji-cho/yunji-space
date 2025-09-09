export interface MenuItem {
  href: string;
  label: string;
}

export const menuItems: MenuItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];