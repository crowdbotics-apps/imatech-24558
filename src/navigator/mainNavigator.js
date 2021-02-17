import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Additem206756Navigator from '../features/Additem206756/navigator';
import Maps206752Navigator from '../features/Maps206752/navigator';
import UserProfile206748Navigator from '../features/UserProfile206748/navigator';
import ArticleList205962Navigator from '../features/ArticleList205962/navigator';
import Maps205949Navigator from '../features/Maps205949/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Additem206756: { screen: Additem206756Navigator },
Maps206752: { screen: Maps206752Navigator },
UserProfile206748: { screen: UserProfile206748Navigator },
ArticleList205962: { screen: ArticleList205962Navigator },
Maps205949: { screen: Maps205949Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
