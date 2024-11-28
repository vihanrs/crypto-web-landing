import "./Companies.scss";
import { companyInfo } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Companies() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="companies">
      <div className="companies__container wrapper" data-aos="fade-up">
        {companyInfo.map(({ id, img }) => (
          <img src={img} alt="company" key={{ id }} />
        ))}
      </div>
    </section>
  );
}

export default Companies;
