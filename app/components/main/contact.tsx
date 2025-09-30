"use client";

import React, { useState, useRef } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState<string>();
  const [formFill, setFormFill] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget;

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "b5045b30-36b2-414c-be3d-2bd998191180");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
      setFormFill({ email: "", name: "", subject: "", message: "" });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormFill((prev) => ({ ...prev, [name.toLowerCase()]: value }));
  };

  const isFormValid =
    formFill.email.trim() !== "" &&
    formFill.name.trim() !== "" &&
    formFill.subject.trim() !== "" &&
    formFill.message.trim() !== "";

  const isAnyFieldFilled =
    formFill.email.trim() !== "" ||
    formFill.name.trim() !== "" ||
    formFill.subject.trim() !== "" ||
    formFill.message.trim() !== "";

  const handleCancel = () => {
    formRef.current?.reset();
    setFormFill({ email: "", name: "", subject: "", message: "" });
    setResult(undefined);
  };
  return (
    <section
      id="contact"
      className="w-full px-[12%] py-15 scroll-mt-20 min-h-screen "
    >
      <h4 className="text-center mb-2 text-lg">Contact Me</h4>
      <h2 className="text-center text-5xl font-medium">
        Connecting and Follow Me
      </h2>
      <p className="max-w-2xl mx-auto mt-2 mb-12 text-center">
        Anda dapat menghubungi saya dan ikuti saya di sosial media
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center ">
        <div className="bg-[#eff1ed] border rounded-lg p-6 shadow-[4px_4px_0_#080808] dark:bg-[#1c1c1c] dark:border-white dark:shadow-[4px_4px_0_#eaeae9]">
          <h3 className="text-xl font-medium mb-4 text-center">Send Email</h3>

          <form
            action=""
            ref={formRef}
            onSubmit={onSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border rounded-2xl px-4 py-2 outline-black bg-white placeholder:italic font-normal dark:text-black"
                required
                name="Email"
                value={formFill.email}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="border rounded-2xl px-4 py-2 outline-black bg-white placeholder:italic font-normal dark:text-black"
                required
                name="Name"
                value={formFill.name}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border rounded-2xl px-4 py-2 outline-black bg-white placeholder:italic font-normal dark:text-black"
              required
              name="Subject"
              value={formFill.subject}
              onChange={handleChange}
            />
            <textarea
              placeholder="Write Your Message"
              rows={5}
              className="border rounded-2xl px-4 py-20 pt-2 outline-black bg-white resize-none align-top placeholder:italic font-normal dark:text-black"
              name="Message"
              value={formFill.message}
              onChange={handleChange}
            ></textarea>

            <div className="flex gap-4 mt-2 justify-center">
              <button
                type="button"
                onClick={handleCancel}
                disabled={!isAnyFieldFilled}
                className={`px-10 py-2 rounded-3xl border ${
                  isAnyFieldFilled
                    ? "bg-[#DD1414]/60 hover:bg-[#DD1414]/100 transitic hover:cursor-pointer hover:shadow-[2px_2px_0_#080808]"
                    : "cursor-default"
                }`}
                // className="bg-[#DD1414]/60 text-white px-10 py-2 rounded-3xl hover:bg-[#DD1414]/100 transitic hover:cursor-pointer border hover:shadow-[2px_2px_0_#080808]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!isFormValid}
                className={`px-10 py-2 rounded-3xl border ${
                  isFormValid
                    ? "hover:bg-[#178214] hover:opacity-90 hover:text-white transitic hover:cursor-pointer hover:shadow-[2px_2px_0_#080808]"
                    : "cursor-default"
                }`}
              >
                Submit
              </button>
            </div>
            <p className="text-center italic">{result}</p>
          </form>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#eff1ed] border rounded-lg p-6 shadow-[4px_4px_0_#080808] h-[200px] w-full dark:bg-[#1c1c1c] dark:border-white dark:shadow-[4px_4px_0_#eaeae9]">
            <h3 className="font-medium text-xl mb-4 text-center">
              Sosial Media
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-3xl sm:text-4xl md:text-5xl h-auto py-4">
              {/* WhatsApp */}
              <a
                href="https://whatsapp.com/username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className=" hover:scale-110 transition-transform"
              >
                <FaWhatsapp />
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className=" hover:scale-110 transition-transform"
              >
                <FaInstagram />
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className=" hover:scale-110 transition-transform"
              >
                <FaFacebook />
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                className=" hover:scale-110 transition-transform"
              >
                <FaLinkedin />
              </a>
              {/* Github */}
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className=" hover:scale-110 transition-transform"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="mt-36 text-center">
            <p className="text-sm text-gray-950 dark:text-white">
              Thanks for Visiting
            </p>
            <p className="text-3xl mt-1 font-bold">My Website</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
