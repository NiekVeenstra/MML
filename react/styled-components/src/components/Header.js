import React from "react";
import { Container } from "./styles/Container.styled";
import { StyledHeader } from "./styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <h1>hubble</h1>
      </Container>
    </StyledHeader>
  );
}
