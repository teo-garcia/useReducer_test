import { Helmet } from 'react-helmet-async'
import { Seo } from 'primitive-jsx'
import ComponentA from '@components/ComponentA/ComponentA'
import ComponentB from '@components/ComponentB/ComponentB'
import { WrapperProvider } from '@components/WrapperProvider/WrapperProvider'

function HomePage() {
  return (
    <>
      <WrapperProvider>
        <Seo component={Helmet} title="Home | Vite" />
        <ComponentA />
        <ComponentB />
      </WrapperProvider>
    </>
  )
}

export default HomePage
