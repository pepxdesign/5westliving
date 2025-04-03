import ArrowRight3Img from "../../../assets/images/icon/arrow-right3.svg";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";

function MessageForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
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
	);
}

export default MessageForm;
