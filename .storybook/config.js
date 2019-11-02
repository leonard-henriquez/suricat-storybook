import { configure, addParameters } from '@storybook/react'
import theme from './theme'

// Option defaults.
addParameters({
  options: {
    theme: theme,
  },
})

// automatically import all files ending in *.story.js
configure(require.context('../src/components', true, /\.story\.(j|t)sx?$/), module)
