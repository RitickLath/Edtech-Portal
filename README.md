# EduBridge

## Overview
This project is a MERN stack-based online learning platform, enabling user authentication, course management by instructors, and course browsing by students. The application integrates JWT-based authentication, OTP verification, and Zod validations. The frontend is deployed on Vercel, while the backend is hosted on Render.

## Features

### Authentication
- **Signup/Login:** Users and instructors can register and log in.
- **JWT Authentication:** Secure token-based authentication.
- **OTP Verification:** Email-based OTP for account verification using Nodemailer.
- **Profile Management:** Users can update personal information.

### Instructor Capabilities
- **Course Management:** Instructors can create and manage courses, including title, description, price, tags, categories, thumbnails (stored on Cloudinary), and lectures.
- **Dashboard:** Instructors can view and manage their posted courses.

### Student Capabilities
- **Course Browsing:** Students can view and search for courses.
- **Course Details:** Detailed course information, including lectures.
- **Profile Management:** Update personal information.

### Additional Features
- **Contact Us:** Users can send messages via a contact form, receiving confirmation emails.
- **Zod Validations:** Ensures proper form input validation.

### Deployment
- **Frontend:** Deployed on Vercel.
- **Backend:** Deployed on Render.

## API Routes

### Authentication & Profile
- **POST /signup:** Register new users and instructors with OTP verification.
- **POST /verification:** Verify OTP to activate accounts.
- **POST /login:** User login with JWT token generation.
- **POST /update:** Update user profile information.

### Course Management
- **POST /addCourse:** Instructors add new courses.
- **POST /addLectures:** Add lectures to courses.
- **GET /courses:** Retrieve all courses.
- **GET /SingleCourse?id={courseId}:** Get details of a specific course.

### User Details
- **GET /userDetails:** Fetch user details, including purchased and selling courses.

### Contact Us
- **POST /contact:** Submit contact form and send confirmation email.

## Frontend Routes

### Pages
- **"/", "/home":** Home page.
- **"/contact":** Contact form page.
- **"/course":** Course list.
- **"/course/:id":** Course details.

### Authentication
- **"/signup":** Signup page.
- **"/login":** Login page.
- **"/verification":** OTP verification page.

### Dashboard
- **"/dashboard":** Instructor dashboard.
- **"/dashboard/profile":** Profile management.
- **"/dashboard/course":** Manage posted courses.
- **"/dashboard/course/add-course":** Add a new course.
- **"/dashboard/settings":** Account settings.

## Technologies Used

- **Frontend:** React.js, React Router, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, Nodemailer, Zod
- **Storage:** Cloudinary (for course thumbnails)
- **Deployment:** Vercel (Frontend), Render (Backend)

## Conclusion
This MERN stack-based learning platform provides robust features for both students and instructors, offering a seamless user experience with secure authentication, comprehensive course management, and scalable deployment.
