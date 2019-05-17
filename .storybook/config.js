import { addParameters, configure } from '@storybook/react'
import { themes } from '@storybook/theming'

// Option defaults.
addParameters({
  options: {
    theme: themes.light,
  },
})

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
