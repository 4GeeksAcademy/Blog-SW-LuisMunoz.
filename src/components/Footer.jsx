import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container className="text-center">
        <small>
         Star Wars Blog © {new Date().getFullYear()}.
        </small>
      </Container>
    </footer>
  );
}

export default Footer;