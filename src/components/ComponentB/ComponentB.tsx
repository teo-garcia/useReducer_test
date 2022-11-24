import { Button } from 'primitive-jsx'

function ComponentB(props: any) {
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
      <h2>Component B</h2>
      <p>
        Current Value for B:
        <Button onClick={handleClick}>{state.value}</Button>
      </p>
    </section>
  )
}

export default ComponentB
