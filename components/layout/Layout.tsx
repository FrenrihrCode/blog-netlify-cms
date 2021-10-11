import React, { ReactNode } from "react";
import { menuItems, ownerData } from "../../lib/data";
import { Sidebar } from "../menu/Sidebar";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  const owner = ownerData;
  const items = menuItems;

  return (
    <div className="layout" id="layout">
      <Header owner={owner} items={items}></Header>
      <main>
        <Sidebar owner={owner} items={items}></Sidebar>
        <div className="content">{children}</div>
      </main>
      <Footer name={owner.name}></Footer>
    </div>
  );
};
