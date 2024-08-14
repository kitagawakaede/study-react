import Image from "next/image";
import styles from "../styles/Home.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>◎今日もいい日！</p>
      <Image
        src="/favicon.ico"
        alt="Vercel Logo"
        className="dark:invert"
        width={20}
        height={20}
      />
      <p>Vercel</p>
    </footer>
  );
}
