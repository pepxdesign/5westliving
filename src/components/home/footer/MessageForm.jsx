import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";
import axios from "axios";
import FadeInUp from "../../animation/FadeInUp";

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

function MessageForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [submitted, setSubmitted] = useState(false); // Tracks if submitted successfully
  const [error, setError] = useState(null); // Optional: show error message

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(FORMSPREE_URL, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.status === 200) {
        reset(); // Clear the form
        setSubmitted(true); // Show success message
        setError(null); // Clear any previous error
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("There was an issue submitting the form.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="aximo-form-field">
          <Field error={errors.name}>
            <input
              {...register("name", { required: "Name is required." })}
              type="text"
              name="name"
              id="name"
              placeholder="Full Name*"
            />
          </Field>
        </div>
        <div className="aximo-form-field">
          <Field error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              type="email"
              name="email"
              id="email"
              placeholder="Email*"
            />
          </Field>
        </div>
        <div className="aximo-form-field">
          <Field error={errors.phone}>
            <input
              {...register("phone", { required: "Phone is required." })}
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number*"
            />
          </Field>
        </div>

        <div className="aximo-form-field">
          <Field error={errors.date}>
            <input
              {...register("date", { required: "Date is required." })}
              type="text"
              name="date"
              id="date"
              placeholder="Preferred Date*"
            />
          </Field>
        </div>

        <button id="aximo-submit-btn" type="submit">
          Send message
        </button>
      </form>
      {/* Success Message */}
      {submitted && (
        <FadeInUp>
          <p className="success-message">
            Your message has been sent successfully!
          </p>
        </FadeInUp>
      )}

      {/* Error Message */}
      {error && (
        <FadeInUp>
          <p className="error-message">{error}</p>
        </FadeInUp>
      )}
    </>
  );
}

export default MessageForm;
