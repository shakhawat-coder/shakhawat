import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { HiOutlineMail } from "react-icons/hi";

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
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <>
      <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400 text-center">
          Contact Me
        </h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1 border border-gray-300 dark:border-gray-600">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Feel free to reach out to me for any inquiries, collaborations,
                or just to say hello!
              </p>
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900">
                  <HiOutlineMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <a
                  href="mailto:shakhawathossen188@gamil.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
                >
                  shakhawathossen188@gamil.com
                </a>
              </div>
              <div className="flex items-center space-x-3 mt-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900">
                  <HiOutlineMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <a
                  href="https://www.linkedin.com/in/shakhawathossen/"
                  className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
                >
                  shakhawathossen
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2 border border-gray-300 dark:border-gray-600 p-6">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
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
                  <div className="text-red-500 mt-1">{formik.errors.name}</div>
                )}
              </div>
              <div className="mb-4">
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
                  <div className="text-red-500 mt-1">{formik.errors.phone}</div>
                )}
              </div>
              <div className="mb-4">
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
                  <div className="text-red-500 mt-1">{formik.errors.email}</div>
                )}
              </div>
              <div className="mb-4">
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
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
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
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
