import { Button } from 'primitive-jsx'

function ComponentA(props: any) {
  const { state, setSyncState, dispatch } = props

  const handleClick = () => {
    dispatch({
      type: 'SET_STATE',
      payload: {
        value: state.value + 1,
      },
    })
    setSyncState(state.value + 1)
  }
  return (
    <section>
      <h2>Component A</h2>
      <p>
        Current Value for A:
        <Button onClick={handleClick}>{state.value}</Button>
      </p>
    </section>
  )
}

export default ComponentA
