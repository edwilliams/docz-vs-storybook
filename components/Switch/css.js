const CSS = {
  buttonOne: {
    width: '50%',
    color: 'blue',
    padding: '5px 0',
    borderTop: '1px solid blue',
    borderBottom: '1px solid blue',
    borderLeft: '1px solid blue',
    borderRadius: '3px',
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
  },
  buttonTwo: {
    width: '50%',
    color: 'blue',
    padding: '5px 0',
    borderTop: '1px solid blue',
    borderBottom: '1px solid blue',
    borderRight: '1px solid blue',
    borderRadius: '3px',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
  }
}

CSS.buttonOneActive = { ...CSS.buttonOne, ...{
  background: 'blue',
  color: 'white'
}}

CSS.buttonTwoActive = { ...CSS.buttonTwo, ...{
  background: 'blue',
  color: 'white'
}}

export default CSS
