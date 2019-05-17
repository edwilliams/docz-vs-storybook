import React from 'react'
import PropTypes from 'prop-types'
import CSS from './css'

const Switch = props => {

  const click = () => {
    if ( !props.disabled && props.onClick ) props.onClick()
  }

  const css = ( props.css ) ? { ...CSS, ...props.css } : CSS

  const { disabled, options, position } = props

  const cssContainer = ( disabled ) ? { ...css.container, opacity: '0.56' } : css.container

  return(
    <div style={cssContainer} onClick={click}>
      {options.map(( opt, i ) => {
        const cssButtonOne = ( position === 'left' ) ? css.buttonOneActive : css.buttonOne
        const cssButtonTwo = ( position === 'left' ) ? css.buttonTwo : css.buttonTwoActive
        return ( i === 0 )
          ? <button key={i} style={cssButtonOne}>{opt}</button>
          : <button key={i} style={cssButtonTwo}>{opt}</button>
      })}
    </div>
  )

}

Switch.defaultProps = {
  options: ['', ''],
  position: 'left',
}

Switch.propTypes = {
  disabled: PropTypes.bool,
  options: PropTypes.array,
  position: PropTypes.string,
  onClick: PropTypes.func,
}

export default Switch
