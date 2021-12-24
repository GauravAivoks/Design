const INITIAL_STATE = {
  data: [
    {
      time: '09:00',
      title: 'Punchin Details',
      description: 'The Beginner Archery and Beginner Crossbow . ',
      lineColor: '#009688',
      //   icon: require('../img/archery.png'),
      imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
    },
    {
      time: '10:45',
      title: 'Break in Details',
      description: 'Badminton is a racquet sport played .',
      //   icon: require('../img/badminton.png'),
      imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
    },
    {
      time: '12:00',
      title: 'Lunch',
      //   icon: require('../img/lunch.png'),
      description: 'Badminton is a racquet sport played .',
      imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
    },
    {
      time: '14:00',
      title: 'Punchout Details',
      description: 'Team sport played between two   ',
      lineColor: '#009688',
      //   icon: require('../img/soccer.png'),
      imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
    },
    {
      time: '16:30',
      title: 'Go to Fitness center',
      description: 'Look out for the Best Gym & Fitness  :)',
      //   icon: require('../img/dumbbell.png'),
      imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
    }
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
