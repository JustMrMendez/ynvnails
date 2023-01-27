import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function AuthPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signIn, signUp } = useAuth();
    const Navigate = useNavigate();
    const [created, setCreated] = useState(false);

    function handleLogin(event: { preventDefault: () => void }) {
        event.preventDefault();
        signIn(email, password)
            .catch((error: { message: React.SetStateAction<string> }) => {
                setError(error.message);
                if (error.message === "Email is Already in Use") {
                    setError(error.message);
                }
                setTimeout(() => {
                    setError("");
                }, 2000);
            })
            .then(res => {
                console.log(res);
                Navigate("/Internal");
            });
    }

    function handleSignup(event: { preventDefault: () => void }) {
        event.preventDefault();
        signUp(email, password)
            .catch((error: { message: React.SetStateAction<string> }) => {
                setError(error.message);
                setTimeout(() => {
                    setError("");
                }, 2000);
                setError(error.message);
            })
            .then(res => {
                if (res) {
                    setCreated(true);
                }
            });
    }

    return (
        <main className="relative z-40 flex h-full min-h-screen w-full flex-col items-center rounded-b-2xl bg-pink-50 pb-20 pt-20 shadow-lg md:rounded-none md:pt-24">
            <div className="grid h-[50vh] w-11/12 place-items-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-400 shadow-lg">
                <h1 className="text-center text-5xl font-medium text-white ">
                    Hello There
                </h1>
                <form className="mt-2 mb-4 flex-wrap gap-4">
                    {error && (
                        <div className="mb-4 rounded bg-pink-200 px-2 text-center text-sm italic text-red-600 md:text-xl">
                            Email Already Exist
                        </div>
                    )}
                    {created && (
                        <div className="mb-4 rounded bg-pink-200 px-2 text-center text-sm italic text-green-600 md:text-xl">
                            Account Created, Welcome!
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
                            className="focus:shadow-outline w-full appearance-none rounded border py-3 px-5 leading-tight text-gray-700 focus:outline-none"
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
                            className="focus:shadow-outline w-full appearance-none rounded border py-3 px-3 leading-tight text-gray-700 focus:outline-none"
                            type="password"
                            id="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="flex justify-between ">
                        <button
                            className="focus:shadow-outline rounded-b-3xl bg-pink-600 py-3 px-4 font-bold text-white hover:bg-pink-400 focus:outline-none"
                            type="button"
                            onClick={handleLogin}
                        >
                            Log In
                        </button>
                        <button
                            className="focus:shadow-outline rounded-b-3xl bg-pink-600 py-2 px-4 font-bold text-white hover:bg-pink-400 focus:outline-none"
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
