import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { Logo } from "../../Header";
import { Button } from "../../UI";
import { Spinner } from "../../UI";
import { login } from "../../../utils/api";

export const LoginComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ username, password }) => login(username, password),
    onSuccess: (data) => {
      toast.success(t("admin.success"));
      localStorage.setItem("accessToken", data.accessToken);
      navigate("/admin/dashboard");
    },
    onError: () => {
      toast.error(t("admin.error"));
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    mutation.mutate({ username, password });
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginBox}>
        {mutation.isPending && (
          <div className={styles.overlay}>
            <Spinner />
          </div>
        )}
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
