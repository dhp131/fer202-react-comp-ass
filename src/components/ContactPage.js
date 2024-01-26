import React, { useState } from "react";

const ContactPage = () => {
	// Sử dụng hook useState để quản lý trạng thái của form
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	// Hàm xử lý thay đổi giá trị của các trường input
	const handleInputChange = (e) => {
		// Destructuring để lấy name và value từ event.target
		const { name, value } = e.target;
		// Sử dụng setFormData để cập nhật giá trị của trường tương ứng trong state
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	// Hàm xử lý khi form được submit
	const handleSubmit = (e) => {
		// Ngăn chặn sự kiện mặc định của form (khi nhấn nút submit, trang không bị load lại)
		e.preventDefault();
		// Bạn có thể thêm logic xử lý form submission ở đây. Hiện tại, chỉ log dữ liệu ra console
		console.log("Form submitted:", formData);
	};

	return (
		<div className="container">
			<h2>Contact Us</h2>
			<p>
				If you have any questions or inquiries, feel free to reach out
				to us:
			</p>

			{/* Form với className là "contact-form" và sự kiện onSubmit được gắn với hàm handleSubmit */}
			<form className="contact-form" onSubmit={handleSubmit}>
				{/* Input cho trường "Name" */}
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Your Name"
					// Giá trị của input được liên kết với state formData
					value={formData.name}
					// Sự kiện onChange gọi hàm handleInputChange để cập nhật state khi giá trị thay đổi
					onChange={handleInputChange}
				/>

				{/* Input cho trường "Email" */}
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Your Email"
					value={formData.email}
					onChange={handleInputChange}
				/>

				{/* TextArea cho trường "Message" */}
				<label htmlFor="message">Message:</label>
				<textarea
					id="message"
					name="message"
					placeholder="Your Message"
					value={formData.message}
					onChange={handleInputChange}
				></textarea>

				{/* Nút Submit */}
				<button type="submit">Send Message</button>
			</form>
		</div>
	);
};

export default ContactPage;

// 1. Import React và useState từ React.
// 2. Khai báo một functional component ContactPage.
// 3. Sử dụng useState để tạo state formData để lưu trữ dữ liệu của form.
// 4. Khai báo hàm handleInputChange để xử lý sự kiện khi giá trị của các trường input thay đổi.
// 5. Hàm handleInputChange sử dụng destructuring để lấy name và value từ event.target.
// 6. Sử dụng setFormData để cập nhật state formData với giá trị mới của trường tương ứng.
// 7. Khai báo hàm handleSubmit để xử lý sự kiện khi form được submit.
// 8. Ngăn chặn sự kiện mặc định của form để tránh việc trang bị load lại.
// 9. In ra console dữ liệu của form (bạn có thể thay thế bước này bằng xử lý logic tương ứng với yêu cầu của bạn).
// 10.Trả về JSX với một form, các trường input và textarea, cũng như nút Submit. Mỗi trường input kết nối với state formData
// và sử dụng sự kiện onChange để cập nhật state khi người dùng nhập liệu. Nút Submit kết nối với hàm handleSubmit để xử lý sự kiện submit.
