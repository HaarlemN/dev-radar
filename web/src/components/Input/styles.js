import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;

  &:first-child {
    margin-top: 0;
  }
`;

export const Label = styled.label`
  color: #acacac;
  font-size: 1.4rem;
  font-weight: bold;
  display: block;
`;

export const MyInput = styled.input`
  width: 100%;
  height: 3.3rem;
  font-size: 1.4rem;
  color: #666;
  border: 0;
  border-bottom: 0.1rem solid #eee;
  transition: border-bottom 0.3s;

  &:hover {
    border-bottom: 0.1rem solid #7d40e7;
  }

  &:focus {
    border-bottom: 0.1rem solid #7d40e7;
  }
`;
