import { createGlobalStyle } from 'styled-components'

import { Global } from './globals'
import { Lightbox } from './lightbox'

const GlobalStyle = createGlobalStyle`
${Global}
${Lightbox}
`

export default GlobalStyle