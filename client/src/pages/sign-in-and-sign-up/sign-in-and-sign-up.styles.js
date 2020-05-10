import styled from "styled-components";

export const SignInSignUpContainer = styled.div`
  margin: 30px auto;
  width: 850px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    max-width: 95vw;
  }
`;
