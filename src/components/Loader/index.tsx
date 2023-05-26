import { Preloader, Loading } from './styles'

interface LoaderProps {
  visibility: string
  display: string
}

const Loader: React.FC<LoaderProps> = (
  { visibility, display }: LoaderProps,
): JSX.Element => (
  <Preloader id="preloader" display={display} visibility={visibility}>
    <Loading id="loader" />
  </Preloader>
)

export default Loader;