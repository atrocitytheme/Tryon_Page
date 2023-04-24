import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  contactDescription: Yup.string().required("Required"),
});

const BUSINESS_EMAIL = "nliolo.official@gmail.com";

const initialValues = {
  email: "",
  contactDescription: "",
};

interface ContactFormFill {
  onSubmit?: (
    values: ContactFormValueT,
    sendEmailFunc: (from: string, text: string) => void
  ) => void;
}

type ContactFormValueT = {
  email: string;
  contactDescription: string;
};

/**
 * @license apache-2.0
 * @author jxw
 * @description contact form component for tryon.
 * @param onSubmit - callback function for form submission, takes formik value as input.
 */
export const ContactForm: React.FC<ContactFormFill> = ({ onSubmit }) => {
  const handleSubmit = (values: ContactFormValueT, { setSubmitting }) => {
    if (onSubmit) {
      onSubmit(values, sendEmail);
    }
    setSubmitting(false);
  };

  function sendEmail(from: string, text: string) {
    const subject = `[Nliolo Request] Contact from ${from}`;
    const emailLink = `mailto:${encodeURIComponent(
      BUSINESS_EMAIL
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
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
                Your Email
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
