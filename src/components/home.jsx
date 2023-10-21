import VisitBtn from "./VisitBtn";


export default function Home() {
  return (
    <section className="home">
      <div className="container">
      
        <div className="col-md-12 home-text">
          <h2>Good food choices <br /> are good investments.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam et purus a odio finibus bibendum amet leo.</p>
          <div className="flex-btn">

          <VisitBtn visitText="Order Now"/>
          <button className="learnMore">learn more</button>

          </div>
        </div>
        
      </div>
    </section>
  );
}
