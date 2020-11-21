import styled from 'styled-components';

export const Container = styled.li`
  background: #fff;
  box-shadow: 0 0 1.4rem 0 rgba(0, 0, 0, 0.02);
  border-radius: 0.2rem;
  padding: 2rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
`;

export const InfoContainer = styled.div`
  margin-left: 1rem;
`;

export const Title = styled.strong`
  display: block;
  font-size: 1.6rem;
  color: #333;
`;

export const Techs = styled.span`
  font-size: 1.3rem;
  color: #999;
  margin-top: 0.2rem;
`;

export const Bio = styled.p`
  color: #666;
  font-size: 1.4rem;
  line-height: 2rem;
  margin: 1rem 0;
`;

export const Link = styled.a`
  color: #8e4dff;
  font-size: 1.4rem;
  text-decoration: none;

  transition: color 0.3s;

  &:hover {
    color: #5a2ea6;
  }
`;
