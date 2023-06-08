import React, { useState } from "react";
import { login, saveToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [inputFields, setInputFields] = useState({
        username: "",
        password: "",
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const token = await login({
                password: inputFields.password,
                username: inputFields.username,
            });
            saveToken(token, () => navigate("/"));
        } catch (error) {
            console.log('error', error);
        }
    }
    return (
        <section className="flex min-h-screen items-center justify-center bg-yellow-50">
            <div className="min-w-[40%] min-h-[25rem] rounded-3xl shadow-lg py-16 px-12 bg-white">
                <div className="flex flex-col items-center gap-3 mb-8">
                    <h2 className="text-4xl text-black drop-shadow-lg font-bold">
                        Log in
                    </h2>
                    <p className="text-lg font-normal max-w-[16rem] text-center">
                        Hey, Enter your details to login to your account
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center gap-3"
                >
                    <input
                        type="text"
                        name="username"
                        required
                        value={inputFields.username}
                        onChange={handleChange}
                        className="w-full min-h-[3rem] rounded-lg px-4 text-base font-medium placeholder:text-ipColor border-solid border border-green-900"
                        placeholder="Enter username"
                    />
                    <input
                        type="password"
                        name="password"
                        required
                        value={inputFields.password}
                        onChange={handleChange}
                        className="w-full min-h-[3rem] rounded-lg px-4 text-base font-medium placeholder:text-ipColor border-solid border border-green-900"
                        placeholder="Enter Password"
                        minLength={8}
                    />
                    <button
                        type="submit"
                        className="mt-6 w-full min-h-[3rem] bg-btnBg text-white rounded-lg"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Login;
