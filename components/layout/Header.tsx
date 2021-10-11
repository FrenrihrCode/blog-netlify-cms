import Link from "next/link";
import { slide as MenuSlide } from "react-burger-menu";
import { useState } from "react";
import { Owner } from "../../interfaces/owner.interface";
import { MenuItem } from "../../interfaces/layout.interface";
import { MenuIcon } from "../icons";
import { Sidebar } from "../menu/Sidebar";
import { useRouter } from "next/router";

export const Header = ({
  owner,
  items,
}: {
  owner: Owner;
  items: MenuItem[];
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(true);
  const handleStateOfMenu = (isOpen: boolean) => setIsOpen(isOpen);
  const goTo = (to: string) => {
    router.push(to);
    setIsOpen(false);
  };

  const menuStyles = {
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      top: "0",
      left: "0",
      height: "100%",
    },
    bmMenu: {
      background: "#001d3d",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.5)",
      position: "fixed",
      top: "0",
      left: "0",
    },
  };

  return (
    <>
      <header className="header">
        <button
          onClick={openMenu}
          className="header-menu"
          type="button"
          aria-label="Menú"
        >
          <MenuIcon color={"white"} />
        </button>
        <Link href="/">
          <a className="header-brand">{owner.alias}Blog</a>
        </Link>
      </header>
      <MenuSlide
        styles={menuStyles}
        isOpen={isOpen}
        onStateChange={(state) => handleStateOfMenu(state.isOpen)}
        customBurgerIcon={false}
      >
        <Sidebar owner={owner} items={[]} isForMenu={true}></Sidebar>
        {items.map((item) => (
          <button key={item.slug} onClick={() => goTo(item.slug)}>
            {item.name}
          </button>
        ))}
      </MenuSlide>
    </>
  );
};
