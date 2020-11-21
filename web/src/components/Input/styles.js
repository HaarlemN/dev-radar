import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  
  &:first-child {
    margin-top: 0;
  }
`;

export const Label = styled.label`
  color: #acacac;
  font-size: 14px;
  font-weight: bold;
  display: block;
`;

export const MyInput = styled.input`
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 1px solid #eee;
  transition: border-bottom 0.3s;

  &:hover {
    border-bottom: 1px solid #7d40e7;
  }

  &:focus {
    border-bottom: 1px solid #7d40e7;
  }
`;
