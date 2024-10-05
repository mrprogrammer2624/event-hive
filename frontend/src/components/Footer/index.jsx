import { Button, Container, Input } from "@/components";
import { Link } from "react-router-dom/dist";
import clsx from "clsx";
import styles from "./Footer.module.css/";

export const Footer = () => {
  return (
    <footer className={clsx(styles.footer, "bg-primary clr-white")}>
      <Container>
        <div className={clsx(styles.footerContent, "d-grid")}>
          <div className={styles.footerSection}>
            <h3>Event Hive</h3>
            <div
              className={clsx(
                styles.subscribe,
                "d-flex flex-wrap align-items-center"
              )}
            >
              <Input
                type="email"
                size={"small"}
                placeholder="Enter your email"
              />
              <Button variant={"primary"} className={styles.btnSubscribe}>
                Subscribe
              </Button>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Support</h4>
            <ul>
              <li>
                <Link to="#">Help Center</Link>
              </li>
              <li>
                <Link to="#">Community Guidelines</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Cookies Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={clsx(
            styles.footerBottom,
            "flex-wrap d-flex align-items-center"
          )}
        >
          <p>&copy; 2024 Event Hive. All rights reserved.</p>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              className="icon-facebook"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="icon-twitter"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="icon-instagram"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="icon-linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
