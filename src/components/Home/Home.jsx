import { Intro, Jubilee, EventSlider, PastEventSlider } from "./";

export const HomeComponent = () => {
  return (
    <>
      <Intro />
      <Jubilee targetDate="2026-10-12T09:00:00" />
      <EventSlider />
      <PastEventSlider />
    </>
  );
};
