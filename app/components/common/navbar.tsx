import React from 'react';
import { Link } from 'react-router';

export function Navbar() {
  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1>Tourvisto</h1>
      </Link>
    </section>
  );
}
