
import { memo } from "react";
import HeroSection from "../components/Hero/hero";
import Service from "../components/Services/service";
import About from "../components/About/about";
import Industry from "../components/Industry/industries";
import Partners from "../components/Partners/partners";
import Clients from "../components/Clients/Clients";
import Connect from "../components/Connect/Connect";
import Career from "../components/Career/Career";
import Section from "../components/HomeSections";

// Memoized components to prevent unnecessary re-renders
const MemoizedHeroSection = memo(HeroSection);
const MemoizedService = memo(Service);
const MemoizedAbout = memo(About);
const MemoizedIndustry = memo(Industry);
const MemoizedPartners = memo(Partners);
const MemoizedClients = memo(Clients);
const MemoizedConnect = memo(Connect);
const MemoizedCareer = memo(Career);

export default function Home() {
  return (
    <main className="overflow-hidden">
      <MemoizedHeroSection /> {/*For hero section*/}
      <Section>
        {" "}
        <MemoizedService />{" "}
      </Section>
      <Section>
        {" "}
        <MemoizedAbout />{" "}
      </Section>
      <Section>
        {" "}
        <MemoizedIndustry />{" "}
      </Section>
      <Section>
        {" "}
        <MemoizedPartners />{" "}
      </Section>
      <Section>
        {" "}
        <MemoizedClients />{" "}
      </Section>
      <Section>
        {" "}
        <MemoizedConnect />{" "}
      </Section>
      <Section>
        {" "}
        <MemoizedCareer />{" "}
      </Section>
      <br />
    </main>
  );
}
