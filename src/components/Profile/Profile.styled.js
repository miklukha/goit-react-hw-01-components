import styled from '@emotion/styled/macro';

export const Card = styled.div`
  width: 200px;
  margin: 0 auto;
  padding-top: 30px;

  border-radius: 5px;
  box-shadow: ${props => props.theme.utils.shadow};

  background-color: ${props => props.theme.colors.white};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  margin-bottom: 30px;
`;

export const Avatar = styled.div`
  height: 50px;
  width: 50px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.dark};
`;

export const Tag = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.gray};
`;

export const Location = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.gray};

  composes: ${Tag};
`;

export const Stats = styled.ul`
  display: flex;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  background-color: ${props => props.theme.colors.bgItem};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0px;

  padding-top: 10px;
  padding-bottom: 10px;

  border-top: 1px solid ${props => props.theme.colors.border};
  border-right: 1px solid ${props => props.theme.colors.border};

  &:nth-of-type(3) {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: calc(18 / 12);
  color: ${props => props.theme.colors.gray};
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.dark};
`;
