import HeroSection from "../Components/Hero/hero"
import Service from "../Components/Services/service"
import About from "../Components/About/about"
import Industry from "../Components/Industry/industries"
import Partners from "../Components/Partners/partners"
import Clients from "../Components/Clients/Clients"
import Connect from "../Components/Connect/Connect"
import Career from "../Components/Career/Career"
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
