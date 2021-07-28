import Link from "next/link";

export const Header = ({ title }: { title: string }) => {
  return (
    <header>
      <Link href="/">
        <a>{title}</a>
      </Link>
    </header>
  );
};
