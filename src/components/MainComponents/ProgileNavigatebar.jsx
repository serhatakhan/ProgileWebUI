import styles from "../../styles/mainStyles/main.module.css";
import { NavLink } from "react-router-dom";
import { GiPin } from "react-icons/gi";
import { FaFileCirclePlus } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";


const ProgileNavigatebar = () => {
    return (
        <div className={styles.navbarContent}>
            <div className={styles.brand}>
                <span>
                    <GiPin />
                </span>
                Progile
            </div>

            <nav className={styles.navbar}>
                <NavLink to="/todo"> Teams</NavLink>
                <NavLink to="/settings">Projects</NavLink>
                <button className={styles.createBtn}>
                    <FaFileCirclePlus color="" />
                    Create
                </button>
            </nav>

            <div className={styles.userSection}>
                <div className={styles.searchWrapper}>
                    <input type="text"  placeholder="Search..." className={styles.searchbar} />
                    <div className={styles.searchIcon}>
                        <BsSearch color="#112D4E" />
                    </div>
                </div>
              <span className={styles.userProfileSec}>S</span>
            </div>
        </div>
    );
};

export default ProgileNavigatebar;
