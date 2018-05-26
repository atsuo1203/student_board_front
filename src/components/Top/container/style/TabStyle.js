import styled from 'styled-components';

export const BoxDiv = styled.div`
  display: flex;
  width: ${props => props.width}px;
  height:20px;
  margin:5px;
  border:1px solid black;
  background-color:lightgray;
`

export const deleteButtonStyles = {
  icon: {
    height: '18px',
    width: '24x',
    padding: '0px 0px 3px 0px',
  },
  body: {
    right: '2px',
    height: '18px',
    width: '24px',
    padding: '0px 0px 3px 0px',
  },
};