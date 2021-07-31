import Link from "next/link";

export const Header = ({ title }: { title: string }) => {
  return (
    <header className="header">
      <Link href="/">
        <a className="header-brand">{title}Blog</a>
      </Link>
    </header>
  );
};
