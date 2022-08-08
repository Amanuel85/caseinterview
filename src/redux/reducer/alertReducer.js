//import Redux from 'redux'
const actionCreateor = () => {
  
    let action = Math.floor(Math.random()*100)
  
  return action
}
const initialState =[ {id:1,timeLimit: 10, text: "snow", link: 'www.google.com',
  alertType: "error", alertTitle: "snow Alert"
},
{id:2,timeLimit: 10, text: "Ice", link: 'www.google.com',
  alertType: "warning", alertTitle: "Ice Alert"}]
  

// alertDetail: {
//           ...state.alertDetail, id: action.payload.id,
//           timeLimit: action.payload.timeLimit,
//           text: action.payload.text, link: action.payload.link,
//           alertType: action.payload.alertType, alertTitle: action.payload.alertTitle
//         }

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addingAlert': 
      {
        return state.concat(action.payload)
         // ,{
        //    ...state.alertDetail, id: actionCreateor(),
        //    timeLimit: action.payload.timeLimit,
        //   text: action.payload.text, link: action.payload.link,alertType: action.payload.alertType, alertTitle: action.payload.alertTitle
        //  }
      }
      
      case 'deletingAlert':
      { return [state.filter(item=>item.id !== action.payload)] }
      
    default:
      return state;
  }
  
}
console.log(actionCreateor())
export default alertReducer