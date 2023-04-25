import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  contactDescription: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
});

interface EmailFormat {
  email: string;
  contactDescription: string;
  company: string;
}

const BUSINESS_EMAIL = "nliolo.official@gmail.com";

const initialValues = {
  email: "",
  contactDescription: "",
  company: "",
};

interface ContactFormFill {
  onSubmit?: (
    values: EmailFormat,
    sendEmailFunc: (msg: EmailFormat) => void
  ) => void;
}

/**
 * @license apache-2.0
 * @author jxw
 * @description contact form component for tryon.
 * @param onSubmit - callback function for form submission, takes formik value as input.
 */
export const ContactForm: React.FC<ContactFormFill> = ({ onSubmit }) => {
  const handleSubmit = (
    values: EmailFormat,
    { setSubmitting }: FormikHelpers<EmailFormat>
  ) => {
    if (onSubmit) {
      onSubmit(values, sendEmail);
    }
    setSubmitting(false);
  };

  function sendEmail(msg: EmailFormat) {
    const { email, contactDescription, company } = msg;
    const subject = `[Nliolo Request] Contact from ${company}`;
    const message = `Hi Nliolo, \n${contactDescription}}\n\n Contact Email: ${email}`;
    const emailLink = `mailto:${encodeURIComponent(
      BUSINESS_EMAIL
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      message
    )}`;
    window.open(emailLink);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className=" w-screen max-w-2xl mx-auto">
          <div className="text-center font-serif">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Your Contact Email
              </label>
              <Field
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="contactDescription"
              >
                Your use case
              </label>
              <Field
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                component="textarea"
                name="contactDescription"
                id="contactDescription"
              />
              <ErrorMessage
                className="text-red-500"
                name="contactDescription"
                component="div"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <Field
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                component="input"
                name="company"
                id="company"
              />
              <ErrorMessage
                className="text-red-500"
                name="company"
                component="div"
              />
            </div>
            <button
              className=" hover:bg-blue-200 bg-gray-400 hover:border text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isSubmitting}
            >
              Contact Us!
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
