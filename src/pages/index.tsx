import { Helmet } from 'react-helmet-async'
import { Seo } from 'primitive-jsx'
import ComponentA from '@components/ComponentA/ComponentA'
import ComponentB from '@components/ComponentB/ComponentB'
import { useWrapper } from '@components/WrapperProvider/WrapperProvider'
import useStore from '@lib/tools/useStore'

function HomePage() {
  const [syncState, setSyncState] = useWrapper() as Array<any>
  const [state, dispatch] = useStore(syncState)
  return (
    <>
      <Seo component={Helmet} title="Home | Vite" />
      <ComponentA
        state={state}
        dispatch={dispatch}
        setSyncState={setSyncState}
      />
      <ComponentB
        state={state}
        dispatch={dispatch}
        setSyncState={setSyncState}
      />
    </>
  )
}

export default HomePage
