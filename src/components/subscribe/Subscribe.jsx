import "./Subscribe.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Subscribe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="subscribe">
      <div className="subscribe__container wrapper">
        <h2 data-aos="fade-up">Subscribe & get news updates</h2>
        <p data-aos="fade-up">
          Duis massa posuere commodo sed tortor ultrices accumsan augue. Aliquet
          bibendum placerat vivamus diam ullamcorper vitae sapien auctor ut.
          Suspendisse donec id aenean diam dolor nec vitae massa id. Velit
          nullam consequat orci amet fames sed. Amet tincidunt adipiscing varius
          maecenas adipiscing.
        </p>
        <form action="#" data-aos="fade-up">
          <input type="email" placeholder="Write Your Email Here" />
          <a href="#" className="btn">
            Subscribe
          </a>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
