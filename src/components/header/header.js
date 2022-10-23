import styled from 'styled-components'
import PropTypes from 'prop-types'

const Header = styled.h1`
  font-size: ${props => (props.small ? '18px' : '20px')};
  font-weight: ${props => (props.bold ? '600' : '300')};
  color: ${props =>
    props.black ? props.theme.colorGrey : props.theme.colorBlue};
  margin-bottom: ${props => (props.margin ? '15px' : null)};
`
Header.propTypes = {
  small: PropTypes.bool,
  bold: PropTypes.bool,
  black: PropTypes.bool,
  margin: PropTypes.bool,
}
export default Header