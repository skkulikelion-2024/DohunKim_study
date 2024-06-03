"use client";
// 서버에서 보낸 후 hydate 진행
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

export const metadata = {
  title: "Home | Next Movies",
  description: "the best movies in the best framework",
};

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={"/"}>Home</Link> {path === "/" ? "(current)" : ""}
        </li>
        <li>
          <Link href={"/about-us"}>About-Us</Link>
          {path === "/about-us" ? "(current)" : ""}
        </li>
      </ul>
    </nav>
  );
}
