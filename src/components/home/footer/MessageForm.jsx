import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";
import axios from "axios";
import FadeInUp from "../../animation/FadeInUp";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

function MessageForm() {
	const [selectedDate, setSelectedDate] = useState(null);
	const [fname, setFName] = useState("");
	const [lname, setLName] = useState("");
	const [phone, setPhone] = useState("");
	const [open, setOpen] = useState(false);
	const ref = useRef();
  	const today = new Date();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submitted, setSubmitted] = useState(false); // Tracks if submitted successfully
  const [error, setError] = useState(null); // Optional: show error message

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setOpen(false); // close calendar
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
    setFName(value);
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
    setLName(value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setPhone(value);
  };

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
		setSelectedDate(null);
		setPhone(null);
		setFName(null);
		setLName(null);
        setSubmitted(true); // Show success message
        setError(null); // Clear any previous error
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("There was an issue submitting the form.");
    }
  };


  // Optional: close dropdown when clicking outside

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="aximo-form-field split-field">
          <Field error={errors.first_name} >
            <input
              {...register("first_name", { required: "First Name is required." })}
              type="text"
              name="first_name"
              id="first_name"
			  value={fname}
			  onChange={handleFirstNameChange}
              placeholder="First Name*"
            />
          </Field>
		  <Field error={errors.last_name}>
            <input
              {...register("last_name", { required: "Last Name is required." })}
              type="text"
              name="last_name"
              id="last_name"
			  value={lname}
			  onChange={handleLastNameChange}
              placeholder="Last Name*"
            />
          </Field>
        </div>
        <div className="aximo-form-field split-field">
          <Field error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              type="email"
              name="email"
              id="email"
              placeholder="Email*"
            />
          </Field>
		  <Field error={errors.phone}>
            <input
              {...register("phone", { required: "Phone is required." })}
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number*"
			  value={phone}
      		  onChange={handlePhoneChange}
            />
          </Field>
        </div>
		<div className="aximo-form-field" ref={ref}>
          <Field error={errors.preferredDate}>
            <input
              {...register("preferredDate", { required: "Date is required." })}
              type="text"
			  readOnly
              name="preferredDate"
              id="preferredDate"
              placeholder="Preferred Date*"
			  onClick={() => setOpen((prev) => !prev)}
			  value={selectedDate ? format(selectedDate, "dd-MM-yyyy") : ""}
			  className="date-field"
            />
          </Field>
		  {open && (
        <div className="z-10 mt-2 bg-white shadow-md border rounded date-picker-wrapper">
			<DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleDateChange}
            disabled={{ before: new Date() }}
          />
        </div>
      )}
        </div>

        <button id="aximo-submit-btn" type="submit">
          Send message
        </button>
      </form>
      {/* Success Message */}
      {submitted && (
        <FadeInUp>
          <p className="mt-4 text-green-600 font-medium success-message">
            Your message has been sent successfully!
          </p>
        </FadeInUp>
      )}

      {/* Error Message */}
      {error && (
        <FadeInUp>
          <p className="mt-4 text-red-600 font-medium error-message">{error}</p>
        </FadeInUp>
      )}
    </>
  );
}

export default MessageForm;
