import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.scss";

// list of pages

const data = [
  {
    id: 0,
    name: "home",
    ref: "/",
  },
  {
    id: 0,
    name: "headphones",
    ref: "/headphones",
  },
  {
    id: 0,
    name: "speakers",
    ref: "/speakers",
  },
  {
    id: 0,
    name: "earphones",
    ref: "/earphones",
  },
];

// Header component
export default function Header() {
  return (
    <header className={styles.header}>
      <Image src="images/audiophile-logo.svg" width={143} height={25} />
      <Pages />
      <button className={styles.header__logo_btn}>
        <svg className={styles.header__logo_svg}>
          <use xlinkHref="images/sprite.svg#icon-shopping-cart"></use>
        </svg>
      </button>
    </header>
  );
}

function Page({ item }) {
  return (
    <li>
      <Link
        href={item.ref}
        className={
          // isLast
          //   ? `${styles.last_item}`
          //   : `${styles.link_item}`
          (styles.last_item, styles.link_item)
        }
      >
        {item.name}
      </Link>
    </li>
  );
}

export function Pages() {
  return (
    <ul className={styles.link_con}>
      {data.map((el) => (
        <Page item={el} key={el.id} />
      ))}
    </ul>
  );
}
