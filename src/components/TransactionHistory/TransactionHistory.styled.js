import styled from '@emotion/styled/macro';

export const Table = styled.table`
  margin: 0 auto;
  width: 400px;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #ffffff;

  border-collapse: collapse;
`;

export const Head = styled.thead`
  background-color: rgb(131, 162, 245);
`;

export const Row = styled.tr`
  text-align: center;
`;

export const HeadCell = styled.th`
  padding-top: 5px;
  padding-bottom: 5px;

  width: calc(100% / 3);
  text-align: center;

  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;
  border-right: 1px solid rgba(255, 255, 255, 0.534);

  &:nth-of-type(3) {
    border-right: none;
  }
`;

export const Body = styled.tbody`
  & ${Row}:nth-of-type(odd) {
    background-color: #ffffff;
  }

  & ${Row}:nth-of-type(even) {
    background-color: #eeeeee;
  }
`;

export const BodyCell = styled.th`
  padding-top: 5px;
  padding-bottom: 5px;

  width: calc(100% / 3);
  text-align: center;

  font-size: 10px;
  color: #9a9797;
  border-right: 1px solid rgba(114, 114, 114, 0.2);

  &:nth-of-type(3) {
    border-right: none;
  }
`;
