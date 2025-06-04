import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const withTitle = (Component, titleKey) => {
  return (props) => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
      document.title = `${t(titleKey)}`;
    }, [i18n.language, titleKey]);

    return <Component {...props} />;
  };
};
