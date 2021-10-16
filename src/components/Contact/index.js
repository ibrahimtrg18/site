import React from "react";
import Input from "../Input";
import Button from "../Button";
import "./style.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__wrapper">
        <form className="send-mail">
          <h1 className="title">Contact Me</h1>
          <Input name="name" type="text" className="full mb-1" label="name" />
          <Input
            name="email"
            type="email"
            className="full mb-1"
            label="email"
          />
          <Input
            name="message"
            type="textarea"
            className="full mb-1"
            label="message"
          />
          <Button type="submit">Send</Button>
        </form>
        <aside className="personal">
          <h4>Mail:</h4>
          <a href="mailto: ibrahimtarigan@gmail.com" className="mb-1">
            ibrahimtarigan@gmail.com
          </a>
          <h4>Phone:</h4>
          <a href="tel:+6281260009709" className="mb-1">
            +62 812 6000 9709
          </a>
          <h4>Address:</h4>
          <p></p>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
