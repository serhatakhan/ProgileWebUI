import styles from "../../styles/componentsStyles/loader/loader.module.css";

const Loader = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loader}>
        <span>Progile</span>
        <span>Progile</span>
      </div>
    </div>
  );
};

export default Loader;
