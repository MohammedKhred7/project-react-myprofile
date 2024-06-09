import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left_section">
        <div className="avatar">
          <img src="/my.jpg" className="image_avatar" alt="my image" />
          <span className="icon-check_circle"></span>
        </div>

        <h1 className="title">FRONT END DEVELOPER</h1>
        <p className="subtitle">
          {" "}
          I’m a professional front end developer who has been working in the
          industry for over 2 years. I deal with beautiful and pure designs, and
          I always strive to discover new skills
        </p>

        <div className="icons flex">
          <div className="icon icon-facebook1"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-x"></div>
        </div>
      </div>
      <div className="right_section animation ">
      <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
}
