export default function signupReducer(state = {
  currentUserId: ''
}, action) {
 console.log(action)
 switch(action.type) {
   case 'CREATE_USER':
     return Object.assign({}, {
       currentUserId: action.currentUserId
     });
   default:
     return state;
 }
};
