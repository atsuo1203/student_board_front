import styled from 'styled-components';

const borderColor = '#000000'

export const Div = styled.div`
  border: solid 1px ${borderColor};
  position: relative;
  margin: 3px;
  margin-top: 8px;
  height: 75vh;
  overflow: auto;
`

export const Title = styled.span`
  margin-top: 3px;
  margin-left: 3px;
  margin-right: 3px;
  font-size: 250%;
  word-wrap: break-word;
`