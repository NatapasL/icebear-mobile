import React from 'react'
import { TextInput } from 'react-native'

import { styles } from './styles'

const Component = ({ marginBottom, ...rest }) => (
  <TextInput style={[styles.input, { marginBottom }]} {...rest} />
)

Component.defaultProps = {
  autoCapitalize: 'none',
}

export default Component
