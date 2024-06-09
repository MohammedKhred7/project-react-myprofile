import { useForm, ValidationError } from "@formspree/react";
import contactAnimation from "../../animation/contact.json";
import doneAnimation from '../../animation/done.json'
import "./contact.css";
import Lottie from "lottie-react";
export default function Contact() {
  const [state, handleSubmit] = useForm("meqybwrp");
  return (
    <section className="contact_us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="subtitle">
        contact us for more information and get notification when 1 publish
        something new
      </p>

      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form  onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input
                          autoComplete="off"
                          required
                          type="email"
                          name="email"
                          id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{marginTop:'20px'}}>
            <label htmlFor="Massage">Your Massage</label>
            <textarea required name="Message" id="Massage"></textarea>
            <ValidationError
              prefix="Message"
              field="Message"
              errors={state.errors}
            />
          </div>
          <button  type="submit" disabled={state.submitting} className="submit">
          {state.submitting ? "Submitting ..." : "Submit"}</button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>
        <div className="animation" style={{marginRight:"4rem"}}>
        <Lottie
            className="contact-animation"
            style={{ height: 360 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}
