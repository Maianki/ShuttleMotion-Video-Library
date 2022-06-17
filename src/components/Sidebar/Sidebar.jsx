import React from "react";
import styles from "./sidebar.module.css";
import {
  PhLinkedinLogoDuotone,
  PhTwitterLogoDuotone,
  PhGithubLogoDuotone,
} from "assets";

import { useWindowSize } from "hooks";
import { NavLink } from "react-router-dom";
import { sideNavLinks } from "data";

export function Sidebar() {
  const { width } = useWindowSize();

  return (
    <aside className={styles.sidebar}>
      <ol className={`${styles.sidebarLinks} list-unstyled `}>
        {sideNavLinks.map(({ _id, linkTo, linkName, Icon }) => {
          return (
            <li key={_id} className={styles.sidebarMenu}>
              <NavLink
                to={linkTo}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.isNavLinkActive} ${styles.sidebarMenuNavLink}`
                    : `${styles.isNavLinkInactive} ${styles.sidebarMenuNavLink}`
                }
              >
                <span className={styles.sidebarIcon}>{Icon}</span>
                {width > 640 && linkName}
              </NavLink>
            </li>
          );
        })}
      </ol>

      <ol className={styles.socialHandles}>
        <h3 className={`text-center ${styles.socialHeading}`}>
          Connect with me on
        </h3>
        <section className={`list-unstyled ${styles.socialsMenu}`}>
          <li className={styles.socialNavLinks}>
            <a
              href='https://www.linkedin.com/in/ankit-kumain-4124a21b3/'
              target='_blank'
              rel='noreferrer'
            >
              <PhLinkedinLogoDuotone />
            </a>
          </li>
          <li className={styles.socialNavLinks}>
            <a
              href='https://github.com/Maianki/ShuttleMotion-Video-Library'
              target='_blank'
              rel='noreferrer'
            >
              <PhGithubLogoDuotone />
            </a>
          </li>
          <li className={styles.socialNavLinks}>
            <a
              href='https://twitter.com/Ankit_k10'
              target='_blank'
              rel='noreferrer'
            >
              <PhTwitterLogoDuotone />
            </a>
          </li>
        </section>
      </ol>
    </aside>
  );
}
