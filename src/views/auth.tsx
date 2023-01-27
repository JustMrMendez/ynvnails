import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function AuthPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signIn, signUp } = useAuth();
    const Navigate = useNavigate();

    function handleLogin(event: { preventDefault: () => void }) {
        event.preventDefault();
        signIn(email, password)
            .catch((error: { message: React.SetStateAction<string> }) => {
                setError(error.message);
            })
            .then(res => {
                console.log(res);
                Navigate("/");
            });
    }

    function handleSignup(event: { preventDefault: () => void }) {
        event.preventDefault();
        signUp(email, password)
            .catch((error: { message: React.SetStateAction<string> }) => {
                setError(error.message);
            })
            .then(res => {
                console.log(res);
            });
    }

    return (
        <main className="max-w-7xll relative z-30 flex h-full w-full flex-col items-center gap-10 rounded-b-2xl bg-pink-50 pb-24 shadow-lg md:rounded-none md:pt-24">
            <div className="flex h-screen flex-col items-center justify-center bg-gray-200">
                <form className="w-full max-w-lg rounded bg-white p-6 shadow">
                    {error && (
                        <div className="mb-4 text-xs italic text-red-600">
                            {error}
                        </div>
                    )}
                    <div className="mb-4">
                        <label
                            className="mb-2 block font-bold text-gray-700"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                            type="email"
                            id="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="mb-2 block font-bold text-gray-700"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                            type="password"
                            id="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                            type="button"
                            onClick={handleLogin}
                        >
                            Log In
                        </button>
                        <button
                            className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                            type="button"
                            onClick={handleSignup}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default AuthPage;
