/*Importing required components for the home page*/
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
      <HeroSection /> {/*For hero section*/}

      <Section> <Service /> </Section> {/*For service section*/}
      <Section> <About /> </Section> {/*For about section*/}
      <Section> <Industry /> </Section> {/*For industry section*/}
      <Section> <Partners /> </Section> {/*For partners section*/}
      <Section> <Clients /> </Section> {/*For clients section*/}
      <Section> <Connect /> </Section> {/*For connect section*/}
      <Section> <Career /> </Section>  {/*For career section*/}
 
      <br />
    </main>
  );
}
