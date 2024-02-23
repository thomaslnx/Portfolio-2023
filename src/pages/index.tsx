import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('@pages/Marcos'), { ssr: false })
const isWindowDefined = () => typeof window === 'undefined';

const Home: React.FC = (): JSX.Element => {
  return ( <> { !isWindowDefined() && <DynamicComponent /> } </>)
}

export default Home;