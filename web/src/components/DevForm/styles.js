import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
`;

export const InputGroup = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  div {
    margin-top: 0;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 30px;
  padding: 15px 20px;
  
  border: 0;
  border-radius: 2px;
  
  background: #7d40e7;
  color: #fff;
  
  font-size: 16px;
  font-weight: bold;
  
  cursor: pointer;
  
  transition: background-color 0.3s;

  &:hover {
    background: #6931ca;
  }
`;
