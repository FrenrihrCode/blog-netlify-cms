import Image from "next/image";
import Link from "next/link";
import { MenuItem } from "../../interfaces/layout.interface";
import { Owner } from "../../interfaces/owner.interface";
import { ContactIcon, HomeIcon, PersonIcon } from "../icons";

export const Sidebar = ({
  items,
  owner,
}: {
  items: MenuItem[];
  owner: Owner;
}) => {
  const getIcon = (icon: "home" | "person" | "contact") => {
    const icons = {
      home: HomeIcon({ color: "white" }),
      person: PersonIcon({ color: "white" }),
      contact: ContactIcon({ color: "white" }),
    };
    return icons[icon];
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-img">
        <Image
          src={owner.img}
          width={150}
          height={150}
          alt={owner.name}
        ></Image>
      </div>
      <h4 className="sidebar-title">{owner.name}</h4>
      <p className="sidebar-desc">{owner.desc}</p>
      <nav className="sidebar-menu">
        {items.map((item, index) => (
          <div className="sidebar-menu_item" key={`${index}-${item.slug}`}>
            <span>{getIcon(item.icon)}</span>
            <Link href={item.slug}>
              <a>{item.name}</a>
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
};
