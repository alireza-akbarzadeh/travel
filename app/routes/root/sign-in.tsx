import React from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { loginWithGitHub, loginWithGoogle } from "@/appwrite/auth";

export default function SignIn() {
  const handleSignIn = async (type: "google" | "github") => {
    if (type === "google") {
      await loginWithGoogle();
      return;
    }
    await loginWithGitHub();
  };

  return (
    <div className="sign-in-card">
      <header className="header">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/icons/logo.svg"
            alt="logo"
            className="size-[30px]"
          />
          <h1 className="p-28-bold text-dark-100">
            {import.meta.env.VITE_APP_NAME}
          </h1>
        </Link>
      </header>
      <article>
        <h2 className="p-28-semibold text-dark-100 text-center">
          Start Your Travel Journey
        </h2>
        <p className="p-18-reqular text-center text-gray-100 !leading-7">
          Sign in with google to manage destinations, itineraries, and user
          activity with ease.
        </p>
      </article>
      <div className="flex gap-4">
        <Button
          onClick={() => handleSignIn("google")}
          type="button"
          className="button-class !h-11"
        >
          <img src="/assets/icons/google.svg" alt="google auth button" />
          <span className="p-18-semibold text-white">Sign in with google</span>
        </Button>
        <Button
          onClick={() => handleSignIn("github")}
          className="h-11"
          type="button"
        >
          <img
            src="/assets/icons/google.svg"
            alt="google auth button"
            className=""
          />
          <span className="p-18-semibold text-white">Sign in with github</span>
        </Button>
      </div>
    </div>
  );
}
