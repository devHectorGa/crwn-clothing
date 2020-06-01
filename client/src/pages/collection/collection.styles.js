import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 28px;
  margin-bottom: 25px;
  max-width: 125px;
  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 100%;
    /* min-width: 100%; */
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 15px;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px 15px;
  }
`;
