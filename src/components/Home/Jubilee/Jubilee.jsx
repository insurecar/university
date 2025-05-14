import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const pluralForms = {
  pl: {
    week: ["tydzień", "tygodnie", "tygodni"],
    day: ["dzień", "dni", "dni"],
    hour: ["godzina", "godziny", "godzin"],
    minute: ["minuta", "minuty", "minut"],
    second: ["sekunda", "sekundy", "sekund"],
  },
  en: {
    week: ["week", "weeks", "weeks"],
    day: ["day", "days", "days"],
    hour: ["hour", "hours", "hours"],
    minute: ["minute", "minutes", "minutes"],
    second: ["second", "seconds", "seconds"],
  },
};

const pluralize = (value, forms) => {
  const abs = Math.abs(value);
  if (abs === 1) return forms[0];
  if (abs % 10 >= 2 && abs % 10 <= 4 && (abs < 10 || abs >= 20))
    return forms[1];
  return forms[2];
};

const getTimeLeft = (targetDate) => {
  const diff = new Date(targetDate) - new Date();
  if (diff <= 0) return null;

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(daysTotal / 7);
  const days = daysTotal % 7;

  return { weeks, days, hours, minutes, seconds };
};

export const Jubilee = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  const { i18n } = useTranslation();
  const lang = i18n.language === "pl" ? "pl" : "en";

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) return <div>Time is up!</div>;

  const { weeks, days, hours, minutes, seconds } = timeLeft;

  return (
    <div style={{ display: "flex", gap: "12px", fontFamily: "sans-serif" }}>
      <div>
        <strong>{weeks}</strong> {pluralize(weeks, pluralForms[lang].week)}
      </div>
      <div>
        <strong>{days}</strong> {pluralize(days, pluralForms[lang].day)}
      </div>
      <div>
        <strong>{hours}</strong> {pluralize(hours, pluralForms[lang].hour)}
      </div>
      <div>
        <strong>{minutes}</strong>{" "}
        {pluralize(minutes, pluralForms[lang].minute)}
      </div>
      <div>
        <strong>{seconds}</strong>{" "}
        {pluralize(seconds, pluralForms[lang].second)}
      </div>
    </div>
  );
};
