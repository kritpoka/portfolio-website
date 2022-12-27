import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>ส่วนของบ้าน</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src="https://cdn-icons-png.flaticon.com/512/2642/2642358.png" alt="Image" />
                  <h5>ห้องนอน</h5>
                </div>
                <div className="item">
                  <img src="https://cdn-icons-png.flaticon.com/512/3565/3565091.png" alt="Image" />
                  <h5>ห้องน้ำ</h5>
                </div>
                <div className="item">
                  <img src="https://cdn-icons-png.flaticon.com/512/1044/1044293.png" alt="Image" />
                  <h5>สวน</h5>
                </div>
                <div className="item">
                  <img src="https://cdn-icons-png.flaticon.com/512/2534/2534800.png" alt="Image" />
                  <h5>ห้องนั่งเล่น</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
export default Skills;