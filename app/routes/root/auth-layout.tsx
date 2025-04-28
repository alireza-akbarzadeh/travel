import React from "react";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main className="auth">
      <section className="size-full glassmorphism flex-center px-6">
        <Outlet />
      </section>
    </main>
  );
}
