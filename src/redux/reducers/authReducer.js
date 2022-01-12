const INITIAL_STATE = {
  data: [
    {
      time: '09:00',
      title: 'Punchin',
      description: 'The Beginner',
      lineColor: '#009688',
        // icon: require('../../assets/buy-button.png'),
      imageUrl: 'https://cdn-icons.flaticon.com/png/512/3655/premium/3655469.png?token=exp=1641980332~hmac=6bd5d49da2c3d41083bdfed97ffc5650'
    },
    {
      time: '10:45',
      title: 'Break',
      description: 'Badminton',
      //   icon: require('../img/badminton.png'),
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/1019/1019607.png'
    },
    {
      time: '12:00',
      title: 'Lunch',
      //   icon: require('../img/lunch.png'),
      description: 'Badminto.',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/1086/1086741.png'
    },
    {
      time: '14:00',
      title: 'Punchout',
      description: 'Team',
      lineColor: '#009688',
      //   icon: require('../img/soccer.png'),
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/1086/1086748.png'
    },
  ]
}

export default function auth(state = INITIAL_STATE, action) {
  
  switch (action.type) {
    case 'DESIGN_ATTEMPT':
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false
      }
      break;
    case 'DESIGN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        userData: action.userData,
        error: undefined
      }
      break;
    case 'DESIGN_FAILED':
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.error
      }
      break;
    case 'DESIGN':
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false
      }
      break;
    default:
      return state
  }
}
