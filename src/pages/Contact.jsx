import React, {lazy } from "react";

// Lazy load components for code splitting
const ContactHero = lazy(() => import("../components/ContactHero"));
const OfficeMap = lazy(() => import("../components/OfficeMap"));
// const SocialSection = lazy(() => import("../components/SocialSection"));

export default function Contact() {
  return (
    <>
        <ContactHero />
        {/* <SocialSection /> */}
        <OfficeMap />
    </>
  );
}
