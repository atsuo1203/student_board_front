import styled from 'styled-components';

export const BoxDiv = styled.div`
  display: flex;
  width: ${props => props.width}px;
  height:20px;
  margin:5px;
  border:1px solid black;
  background-color:lightgray;
`
export const titleStyle = {
  position: 'relative',
  top: '-10px',
  fontSize: '1em',
  color: '#000000'
}

export const deleteButtonStyle = {
  smallIcon: {
    width: 18,
    height: 18,
  },
  small: {
    position: 'relative',
    top: '4px',
    width: 20,
    height: 20,
    padding: 0,
  },
}