import styled from '@emotion/styled/macro';

export const Card = styled.div`
  width: 200px;
  margin: 0 auto;
  padding-top: 30px;

  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  background-color: #ffffff;
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
  font-size: 18px;

  color: #2e2e2e;
`;

export const Tag = styled.p`
  font-size: 12px;

  color: #9a9797;
`;

export const Location = styled.p`
  font-size: 12px;

  color: #9a9797;

  composes: ${Tag};
`;

export const Stats = styled.ul`
  display: flex;
  background-color: #eeeeee;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0px;

  padding-top: 10px;
  padding-bottom: 10px;

  border-top: 1px solid rgba(149, 157, 165, 0.2);
  border-right: 1px solid rgba(149, 157, 165, 0.2);

  &:nth-of-type(3) {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-size: 12px;
  line-height: calc(18 / 12);

  color: #9a9797;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 12px;

  color: #2e2e2e;
`;
