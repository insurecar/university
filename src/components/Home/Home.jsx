import { Intro, Jubilee, EventSlider } from "./";

export const Home = () => {
  return (
    <>
      <Intro />
      {/* <Jubilee targetDate="2026-10-12T09:00:00" /> */}
      <Jubilee targetDate="2026-05-19T09:00:00" />
      <EventSlider />
    </>
  );
};
