import styles from "./Login.module.scss";
import { Logo } from "../../Header";
import { Button } from "../../UI";
import { useTranslation } from "react-i18next";

export const LoginComponent = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    console.log("Login:", username, "Password:", password);
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginBox}>
        <Logo small />
        <h2 className={styles.text}>{t("admin.text")}</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label> {t("admin.username")}</label>
            <input type="text" name="username" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>{t("admin.password")}</label>
            <input type="password" name="password" className={styles.input} />
          </div>
          <Button
            type="login"
            arrow={false}
            className={styles.btnLogin}
          ></Button>
        </form>
      </div>
    </div>
  );
};
