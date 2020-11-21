import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 3.1rem;
`;

export const InputGroup = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;

  div {
    margin-top: 0;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 3.1rem;
  padding: 1.5rem 2rem;
  
  border: 0;
  border-radius: 2px;
  
  background: #7d40e7;
  color: #fff;
  
  font-size: 1.6rem;
  font-weight: bold;
  
  cursor: pointer;
  
  transition: background-color 0.3s;

  &:hover {
    background: #6931ca;
  }
`;
