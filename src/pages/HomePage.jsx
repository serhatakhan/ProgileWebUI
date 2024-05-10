import { useNavigate } from "react-router-dom";
import localStorageService from "../services/localStorageService";
import styles from "../styles/kanban/kanban.module.css";

const HomePage = () => {
    const navigate = useNavigate();
    const logOut = () => {
        localStorageService.logoutProcesses();
        navigate("/login");
    };

    return (
        <div className={styles.kanban}>
            home page
            <button type="button" onClick={logOut}>
                CIK
            </button>
        </div>
    );
};

export default HomePage;
