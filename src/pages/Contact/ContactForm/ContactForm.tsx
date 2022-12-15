import './ContactForm.scss';

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="contact__introduction">
        <h1 className="contact-form__title">Contact Us</h1>
        <p className="contact-form__description">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <div className="contact-form__fields-container">
        <input
          className="contact-form__field contact-form__input"
          type="text"
          placeholder="Name"
        />
        <input
          className="contact-form__field contact-form__input"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="contact-form__field contact-form__input"
          type="tel"
          placeholder="Phone"
        />
        <textarea
          name=""
          id=""
          cols={5}
          rows={3}
          className="contact-form__field contact-form__textarea"
          placeholder="Your Message"
        ></textarea>
      </div>
      <button className="contact-form__submit-button">Submit</button>
    </form>
  );
};

export default ContactForm;
