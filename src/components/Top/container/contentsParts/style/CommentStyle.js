import styled from 'styled-components';

const borderColor = '#000000'

export const Div = styled.div`
  border: solid 1px ${borderColor};
  border-radius: 5px;
  position: relative;
  margin: 5px;
  background: #F6F6F6;
`

export const HeaderDiv  = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3px;
  margin-right: 3px;
`

export const HeaderID = styled.span`
  color: #4f9ff6;
`

export const HeaderName = styled.span`
  color: #00ff00;
  text-shadow: 0.5px 0.5px 0 #000;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
`
export const HeaderDate = styled.span`
  color: #000000
`

export const TextDiv  = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  word-wrap: break-word;
`