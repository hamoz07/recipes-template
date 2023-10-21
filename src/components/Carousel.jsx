import { Carousel } from "react-bootstrap";
import opinion1 from "../assets/opinion-1.jpg";
import opinion2 from "../assets/opinion-2.jpg";
const OpinionCarousel = () => {
  return (
    <div className="slider">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block border-radius-rounded"
                  src={opinion1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>
                  &quot;Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live.&quot;
                  </p>
                  <span>Simab Dave - Web Designer</span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block border-radius-rounded"
                  src={opinion2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>
                  &quot;Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live.&quot;
                  </p>
                  <span>Simab Dave - Web Designer</span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block border-radius-rounded"
                  src={opinion1}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>
                  &quot;Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live.&quot;
                  </p>
                  <span>Simab Dave - Web Designer</span>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpinionCarousel;
