import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./insho-style.css";
import FavColor from "./components/favColor";
import Contact from "./components/Contact";
import PersonalInfo from "./components/PersonalInfo";
import HobbiesGallery from "./components/HobbiesGallery";
import StarRating from "./components/StarRating";
import Skills from "./components/Skills";

export default function MyApp() {
  return (
    <section>
      <StarRating/>
      <Hero />
      <PersonalInfo />
      <Skills />
      <RiwayatPendidikan />
      <HobbiesGallery />
      <FavColor />
      <Contact />
    </section>
  );
}