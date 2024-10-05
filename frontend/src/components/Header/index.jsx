import { Button, Container } from "@/components/";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={"d-flex align-items-center justify-content-between"}>
        <div className={styles.logo}>Event Hive</div>
        <nav className="">
          <Button className={styles.btnLogin}>Login</Button>
          <Button variant={"primary"} className={styles.btnSignup}>
            Sign Up
          </Button>
        </nav>
      </Container>
    </header>
  );
};
