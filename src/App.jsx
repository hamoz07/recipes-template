import FoodHeader from "./components/header.jsx";
import FoodHome from "./components/home.jsx";
import Report from "./components/report.jsx";
import MoreSection from "./components/MoreSection.jsx";
import SeeAvid from "./components/SeeAvid.jsx";
import Magic_menu from "./components/magic-menu.jsx";
import Carousel from "./components/Carousel.jsx";
import Footer from "./components/footer.jsx";
import QA from "./components/QA.jsx";
import MorningAd from "./components/MorningAd.jsx";


import right_img from "./assets/2.png";
import left_img from "./assets/vegetables.png";
import Subscribe from "./components/Subscribe.jsx";

function App() {
  //* don't forget to add the scrolling effect for box-shadow of the navbar
  return (
    <>
      <FoodHeader />
      <FoodHome />
      <Report />
      <MoreSection img={left_img} mainTitle={`We pride ourselves on making real food from the best ingredients.`} />
      <MoreSection
        img={right_img}
        mainTitle="We make everything by hand with the best possible ingredients."
        specify="row-reverse"
        listSpecifier={{
          display: "block",
          position: "relative",
          padding: 0,
          marginBottom: "30px",
        }}
      />
      <SeeAvid
        img={right_img}
        mainTitle="We make everything by hand with the best possible ingredients."
      />
      <Magic_menu />
      <Carousel />
      <QA />
      <MorningAd />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
