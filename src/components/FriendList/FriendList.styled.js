import styled from '@emotion/styled';

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 200px;
  margin: 0 auto;
  padding: 5px 10px;

  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  background-color: #ffffff;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;

  border-radius: 50%;

  background-color: ${({ eventType, theme }) =>
    eventType ? theme.colors.isOnline : theme.colors.isOffline};
`;

export const Name = styled.p`
  font-size: 16px;
  color: #2e2e2e;
`;
