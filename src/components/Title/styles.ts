import styled from 'styled-components'

import { Props } from '.'

export const Title = styled.h3<Props>`
  color: ${(props) => props.theme.pColor};
  font-siize: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
