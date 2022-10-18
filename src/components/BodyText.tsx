import React, { FC } from 'react'
import { useColorScheme } from 'react-native'

import { Box, Text, useTheme } from 'native-base'

type BodyTextProps = {
  text?: string
  children?: React.ReactNode
}

export const BodyText: FC<BodyTextProps> = (props) => {
  const { text, children } = props
  const { colors } = useTheme()
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <Box>
      <Text
        fontSize={'md'}
        color={isDarkMode ? colors.light[200] : colors.light[700]}
      >
        {text} {children}
      </Text>
    </Box>
  )
}
