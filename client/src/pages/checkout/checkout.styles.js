import styled from "styled-components";

export const CheckoutPageContainer = styled.main`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    margin: 0 auto;
    width: 95%;
    overflow: hidden;
  }
`;

export const CheckoutHeader = styled.header`
  text-align: center;
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CheckoutBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;

    @media screen and (max-width: 800px) {
      width: 23%;
    }
  }
`;

export const CheckoutTotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
