/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description List of routes for Tabs Navigator and Stack navigator, Along addational  Option for Tabs
 */
import Home from '../screens/Home'; 
import Login from '../screens/Login'; 

export const RoutesList = [
  

  {
    name: 'Login',
    component: Login,
    options: { 
      tabBarLabel: 'Login',
       
    },
  },

  {
    name: 'Home',
    component: Home,
    options: { 
      tabBarLabel: 'Home', 
    },
  },
];
