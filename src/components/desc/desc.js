import styled from 'styled-components'
import PropTypes from 'prop-types'

const Desc = styled.p`
  font-size: ${props => (props.small ? '12px' : '16px')};
  color: ${({ theme }) => theme.colorBlack};
  line-height: 22px;
  font-weight: ${props => (props.bold ? '600' : '300')};
  text-align: ${props => (props.center ? 'center' : 'left')};
`
Desc.propTypes = {
  small: PropTypes.bool,
  bold: PropTypes.bool,
  center: PropTypes.bool,
}
export default Desc