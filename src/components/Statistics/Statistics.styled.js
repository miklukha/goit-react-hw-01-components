import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;

  border-radius: 3px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  background-color: #ffffff;

  & + & {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Title = styled.h2`
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;

  color: #9a9797;
`;

export const List = styled.ul`
  display: flex;
  color: ${props => props.color};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0px;

  padding-top: 10px;
  padding-bottom: 10px;

  color: #ffffff;
`;

export const Label = styled.span`
  font-size: 10px;
  line-height: calc(18 / 10);
`;

export const Percentage = styled.span`
  font-size: 12px;
`;
