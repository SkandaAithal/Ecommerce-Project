import React, { lazy } from "react";
import HeroSection from "../Components/HeroSection";
import RenderOnViewportEntry from "../helpers/RenderOnViewportEntry";
const FeatureProduct = lazy(() => import("../Components/FeatureProduct"));
const Services = lazy(() => import("../Components/Services"));
const Trusted = lazy(() => import("../Components/Trusted"));

function Home() {
  return (
    <>
      <HeroSection heading="The UrbanPulse " />
      <RenderOnViewportEntry threshold={0} style={{ minHeight: "240px" }}>
        <FeatureProduct />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry threshold={0} style={{ minHeight: "240px" }}>
        <Services />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry threshold={0} style={{ minHeight: "240px" }}>
        <Trusted />
      </RenderOnViewportEntry>
    </>
  );
}

export default Home;
