import HeroSection from "../components/Hero/hero"
import Service from "../components/Services/service"
import About from "../components/About/about"
import Industry from "../components/Industry/industries"
import Partners from "../components/Partners/partners"
import Clients from "../components/Clients/Clients"
import Connect from "../components/Connect/Connect"
import Career from "../components/Career/Career"
import Section from "../components/HomeSections"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />

      <Section> <Service /> </Section>
      <Section> <About /> </Section>
      <Section> <Industry /> </Section>
      <Section> <Partners /> </Section>
      <Section> <Clients /> </Section>
      <Section> <Connect /> </Section>
      <Section> <Career /> </Section>
      <br />
    </main>
  );
}
