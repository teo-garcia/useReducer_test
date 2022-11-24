import { useReducer } from 'react'

function useStore(value: any) {
  const initialState = {
    value,
  }

  function StateReducer(state = initialState, action: any) {
    const { type, payload } = action
    switch (type) {
      case 'SET_STATE': {
        return {
          value: payload.value,
        }
      }
      default: {
        return state
      }
    }
  }

  return useReducer(StateReducer, initialState)
}

export default useStore
