import Header from "@/components/Header";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Works from "@/components/Works";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Works />
      <Services />
    </div>
  );
}
