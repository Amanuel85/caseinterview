import { createStore } from 'redux'
import alertReducer from './../reducer/alertReducer'

const actionCreateor = (action) => {
  if (!action) {
    action = Math.floor(Math.random()*10)
  }
  return action
}

const store = createStore(alertReducer)
export default store