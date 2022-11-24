import { useContext, createContext, useState, useMemo } from 'react'

const WrapperContext = createContext(0)

function WrapperProvider(props: any) {
  const [syncValue, setSyncValue] = useState(0)
  const value = useMemo(() => [syncValue, setSyncValue], [syncValue])
  return <WrapperContext.Provider value={value} {...props} />
}

function useWrapper() {
  const context = useContext(WrapperContext as any)
  if (!context) {
    throw new Error(`useWrapper must be used within a WrapperProvider`)
  }
  return context
}

export { WrapperProvider, useWrapper }
