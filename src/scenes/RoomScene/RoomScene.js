import React from 'react'

import { RoomContainer } from '../../containers'

const Component = (props) => (
  <RoomContainer {...props} />
)

export default React.memo(Component)
