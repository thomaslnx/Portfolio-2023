import React, { MutableRefObject, RefObject } from 'react'

import { Preloader, Loading } from './styles'

interface LoaderProps {
  visibility: string
  display: string
}

const Loader: React.FC<LoaderProps> = (
  { visibility, display }: LoaderProps,
  // ref: RefObject<MutableRefObject<null>>
): JSX.Element => (
  <Preloader /* ref={ref} */ id="preloader" display={display} visibility={visibility}>
    <Loading id="loader" />
  </Preloader>
)

// export default forwardRef<React.MutableRefObject<null>, LoaderProps> (Loader)
export default Loader;