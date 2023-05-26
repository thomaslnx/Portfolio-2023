import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('@pages/Marcos'), { ssr: false })

const Home: React.FC = (): JSX.Element => (
  <DynamicComponent />
)

export default Home;