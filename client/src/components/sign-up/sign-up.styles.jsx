import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    padding-top: 5rem;
    width: 85vw;
    align-items: center;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
