import { Banner, Navbar } from "./component/HeaderComponent.jsx";
import { Footer } from "./component/FooterComponent.jsx";
import { Main } from "./component/mainComponent.jsx";
import { FiliereSection, EquipePedaSection, AboutSection,ContactSection } from "./component/SectionApp.jsx";
import { AppearOnScroll } from "./component/ScrollEffect.jsx";
import "./style/bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/css/bootstrap.css";
import "./style/bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/js/bootstrap.bundle.js";
import "./style/theme.css";

function App() {
  return (
    <>
      <Banner />
      <Main>
        <AppearOnScroll>
          <FiliereSection />
        </AppearOnScroll>
        <AppearOnScroll>
          <EquipePedaSection />
        </AppearOnScroll>
        <AppearOnScroll>
          <ContactSection />
        </AppearOnScroll>
        <AppearOnScroll>
          <AboutSection />
        </AppearOnScroll>
      </Main>
      <Footer />
    </>
  );
}

export default App;
