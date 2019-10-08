import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MovieScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";

const TabNavigation = createBottomTabNavigator({
    MovieScreen,
    TVScreen,
    SearchScreen
});

export default createAppContainer(TabNavigation);
