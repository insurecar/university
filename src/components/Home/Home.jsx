import { Intro, Jubilee, EventSlider } from "./";
import { Calendar } from "./Calendar/Calendar";

export const HomeComponent = () => {
  return (
    <>
      <Intro />
      <Jubilee targetDate="2026-10-12T09:00:00" />
      <Calendar />
    </>
  );
};
