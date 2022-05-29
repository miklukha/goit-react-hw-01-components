import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;

  border-radius: 3px;
  box-shadow: ${props => props.theme.utils.shadow};

  background-color: ${props => props.theme.colors.white};

  & + & {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  text-transform: uppercase;
  text-align: center;

  color: ${props => props.theme.colors.gray};
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

  color: ${props => props.theme.colors.white};
`;

export const Label = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  line-height: calc(18 / 10);
`;

export const Percentage = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
`;
