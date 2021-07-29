import React, { ReactNode } from "react";
import { ownerData } from "../../lib/data/owner";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  const owner = ownerData;

  return (
    <div className="layout">
      <Header title={owner.alias}></Header>
      <main>
        <div></div>
        <div>{children}</div>
        <div></div>
      </main>
      <Footer name={owner.name}></Footer>
    </div>
  );
};
