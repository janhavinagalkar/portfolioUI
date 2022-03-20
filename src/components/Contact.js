import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  const [formDetails, setFormDetails] = useState({
    isError: {
      name: "",
      email: "",
      subject: "",
    },
  });
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [msg, setmsg] = useState("");
  const formValidationFunc = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = formDetails.isError;
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    switch (name) {
      case "name":
        isError.name = value.length < 4 ? "Atleast 4 characters required" : "";
        setName(value);
        break;
      case "email":
        isError.email = regex.test(value) ? "" : "Email address is invalid.";
        setemail(value);
        break;
      case "subject":
        isError.subject =
          value.length < 4 ? "Atleast 4 characters required" : "";
        setsubject(value);
        break;
      default:
        break;
    }
    setFormDetails({ isError });
  };
  const clearFields = () => {
    setName("");
    setemail("");
    setsubject("");
    setmsg("");
  };
  const handleSendMsg = () => {
    if (
      formDetails.isError.name !== "" ||
      formDetails.isError.email !== "" ||
      formDetails.isError.subject !== ""
    ) {
      alert("Please enter valid details.");
    } else if (name && email && subject && msg) {
      alert("Message sent succefully!");
      clearFields();
    } else {
      alert(`Please fill all required fields.`);
    }
  };
  return (
    <div className="container">
      <div className="row pContainer">
        <div className="col-md-6 d-flex flex-column">
          <label className="headerLabel aboutTitle">Send a Message</label>
          <div className="d-flex flex-column mt-2">
            <label className="labelForm">Name</label>
            <input
              type="text"
              className="contactInputBox"
              placeholder="Please enter Name"
              name="name"
              value={name}
              onChange={formValidationFunc}
            ></input>
            {formDetails.isError.name.length > 0 && (
              <label className="errorMsg">{formDetails.isError.name}</label>
            )}
          </div>
          <div className="d-flex flex-column mt-2">
            <label className="labelForm">Email</label>
            <input
              type="text"
              className="contactInputBox"
              name="email"
              value={email}
              onChange={formValidationFunc}
              placeholder="Please enter E-mail"
            ></input>
            {formDetails.isError.email.length > 0 && (
              <label className="errorMsg">{formDetails.isError.email}</label>
            )}
          </div>
          <div className="d-flex flex-column mt-2 mb-3">
            <label className="labelForm">Subject</label>
            <input
              type="text"
              name="subject"
              value={subject}
              className="contactInputBox"
              onChange={formValidationFunc}
              placeholder="Please enter Subject"
            ></input>
            {formDetails.isError.subject.length > 0 && (
              <label className="errorMsg">{formDetails.isError.subject}</label>
            )}
          </div>
          <textarea
            className="contactInputBox"
            placeholder="Write here..."
            value={msg}
            onChange={(e) => setmsg(e.target.value)}
          ></textarea>
          <button className="contactbtn" onClick={handleSendMsg}>
            Send Message
          </button>
        </div>
        <div className="col-md-6">
          <div>
            <label className="headerLabel aboutTitle">Get in Touch</label>
            <label className="aboutInfo">
              Whether you want to get in touch, talk about a project
              collaboration, or just say hi, I'd love to hear from you. Simply
              fill the from and send me an email.
            </label>
            <div id="navLogo" className="d-flex justify-content-center mt-5">
              <div
                className="circleWithLogo"
                title="https://github.com/janhavinagalkar"
              >
                <a
                  href="https://github.com/janhavinagalkar"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <BsGithub className="contactLogos" />
                </a>
              </div>
              <div
                className="circleWithLogo"
                title="janhavinagalkar13@gmail.com"
              >
                <MdOutlineEmail className="contactLogos" />
              </div>
              <div className="circleWithLogo" title="Pune">
                <ImLocation className="contactLogos" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
