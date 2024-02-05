import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignupForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: "", lastname: "", email: "",
        password: "", confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Password do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData,
        };
        console.log("Printing Account Data");
        console.log(accountData);

        navigate("/dashboard");
    }

    return (
        <div>
            {/* Student-Instructor tab */}
            <div>
                <button>
                    Students
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* First name and Last name */}
                <div>

                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name='firstname'
                            onChange={changeHandler}
                            value={formData.firstname}
                            placeholder='Enter First Name'
                        />
                    </label>

                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name='lastname'
                            onChange={changeHandler}
                            value={formData.lastname}
                            placeholder='Enter Last Name'
                        />
                    </label>

                </div>

                {/* email address */}
                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name='email'
                        onChange={changeHandler}
                        value={formData.email}
                        placeholder='Enter Email Address'
                    />
                </label>

                {/* createpassword and confirm password */}
                <div>

                    <label>

                        <p>Create Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandler}
                            value={formData.password}
                            placeholder='Enter Password'
                        />

                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>

                    </label>

                    <label>

                        <p>Confirm Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name='confirmPassword'
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                            placeholder='Confirm Password'
                        />

                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>


                    </label>

                </div>

                <button>Create Account</button>

            </form>


        </div>
    )
}

export default SignupForm;