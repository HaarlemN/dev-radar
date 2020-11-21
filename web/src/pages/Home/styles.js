import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 60px 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

export const SideCard = styled.aside`
  width: 100%;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;

  @media(min-width: 850px) {
    width: 320px;
  }
`;

export const Title = styled.strong`
  font-size: 20px;
  text-align: center;
  display: block;
  color: #333;
`;

export const DevsContainer = styled.main`
  flex: 1;

  margin-left: 0;
  margin-top: 30px;

  @media(min-width: 850px) {
    margin-left: 30px;
    margin-top: 0;
  }
`;

export const DevsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  list-style: none;

  @media (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
