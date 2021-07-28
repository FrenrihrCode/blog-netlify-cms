import React, { ReactNode } from "react";
import { Owner } from "../../interfaces/owner.interface";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  const owner: Owner = {
    name: "Rumi Isaías",
    alias: "RumiBlog",
  };

  return (
    <>
      <Header title={owner.alias}></Header>
      <main>{children}</main>
      <Footer name={owner.name}></Footer>
    </>
  );
};
