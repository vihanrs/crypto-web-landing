import "./Earnings.scss";
import Img from "../../assets/earnings.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Earnings() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="earnings">
      <div className="earnings__container wrapper">
        <div className="earnings__left">
          <img src={Img} alt="earnings" />
        </div>
        <div className="earnings__right" data-aos="zoom-in-up">
          <h2>Track your earnings and cryptocode made it easy</h2>
          <p>
            Nulla dui ultirices sed nam ligula dignissm tell us. Sem semper
            lorem facilisis ut amet tincidunt adipiscing meascesnas.
          </p>
          <a href="" className="btn">
            GET STARTED
          </a>
        </div>
      </div>
    </section>
  );
}

export default Earnings;
