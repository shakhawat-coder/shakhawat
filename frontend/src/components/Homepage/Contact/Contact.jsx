import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  phone: Yup.string()
    .matches(
      /^(?:\+880|01)[0-9]{9}$/,
      "Phone number must start with +880 or 01 followed by 9 digits"
    )
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await emailjs.send(
          "service_vxwcpkc", // your EmailJS service ID
          "template_5bng5x9", // your EmailJS template ID
          {
            user_name: values.name,
            user_phone: values.phone,
            user_email: values.email,
            user_subject: values.subject,
            user_message: values.message,
            time: new Date().toLocaleString(), // ✅ added parentheses
          },
          "vAhjwd6HzSa-grOa6" // your public key
        );
        alert("Message sent successfully!");
        resetForm();
      } catch (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Try again later.");
      }
    },
  });
  return (
    <>
      <section
        id="contact"
        className="bg-[linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),url('/bannerbg2.jpg')] dark:bg-[linear-gradient(rgba(0,0,0,0.95),rgba(0,0,0,0.95)),url('/bannerbg2.jpg')] bg-cover bg-center min-h-screen bg-[#f9f9f9] dark:bg-[#050505] text-gray-800 dark:text-gray-200 px-2 sm:px-4 lg:px-6 py-16"
      >
        <div className="max-w-6xl mx-auto  rounded-lg shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-gray-400 text-center">
            Contact With Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-6">
            <div className="col-span-1 border rounded-md border-gray-300 dark:border-gray-600 backdrop-blur-md">
              <div className="p-3 sm:p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Feel free to reach out to me for any inquiries,
                  collaborations, or just to say hello!
                </p>
                <div className="flex  items-center space-x-1 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900">
                    <HiOutlineMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <a
                    href="mailto:shakhawathossen188@gamil.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 truncate"
                  >
                    shakhawathossen188@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 mt-4 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900">
                    <MdOutlinePhoneInTalk className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <a
                    href="tel:+8801780551403"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    +8801780551403
                  </a>
                </div>
                {/* watsapp  */}
                <div className="flex items-center space-x-3 mt-4 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900">
                    <BsWhatsapp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <a
                    href="https://wa.me/8801780551403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    +8801780551403
                  </a>
                </div>
                <div className="flex items-center space-x-3 mt-4 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900">
                    <BsLinkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/md-shakhawat-hossen-209992180/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    Md Shakhawat Hossen
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-2 border backdrop-blur-md rounded-md border-gray-300 dark:border-gray-600 p-6">
              <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 dark:text-gray-400"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter Your Name..."
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-3 py-2 border ${
                        formik.touched.name && formik.errors.name
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400`}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-red-500 mt-1">
                        {formik.errors.name}
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 dark:text-gray-400"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Enter Your Phone Number..."
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-3 py-2 border ${
                        formik.touched.phone && formik.errors.phone
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400`}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="text-red-500 mt-1">
                        {formik.errors.phone}
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 dark:text-gray-400"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email..."
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-3 py-2 border ${
                        formik.touched.email && formik.errors.email
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400`}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-red-500 mt-1">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 dark:text-gray-400"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Enter Your Subject..."
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-3 py-2 border ${
                        formik.touched.subject && formik.errors.subject
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400`}
                    />
                    {formik.touched.subject && formik.errors.subject && (
                      <div className="text-red-500 mt-1">
                        {formik.errors.subject}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write Your Message..."
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-3 py-2 border ${
                      formik.touched.message && formik.errors.message
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400`}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <div className="text-red-500 mt-1">
                      {formik.errors.message}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 font-medium bg-blue-600 dark:bg-transparent border border-transparent dark:border dark:border-white/50 text-white dark:text-white/50 rounded-md hover:bg-transparent hover:text-blue-600 hover:border hover:border-blue-600 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
