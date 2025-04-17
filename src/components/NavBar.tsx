import {
  Link,
  Navbar as NavBarComponent,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import { useRouter } from "next/router";

export const NavBar = () => {
  const { pathname } = useRouter();

  const pathes = {
    table: "/table",
    list: "/list",
  };

  return (
    <NavBarComponent shouldHideOnScroll>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === pathes.table}>
          <Link color="primary" href="/table">
            Table
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === pathes.list}>
          <Link color="primary" href="/list">
            List
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NavBarComponent>
  );
};
