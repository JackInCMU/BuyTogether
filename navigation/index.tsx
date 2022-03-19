/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {AntDesign, FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, ImageComponent, Pressable} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {RootStackParamList, RootTabParamList, RootTabScreenProps} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ProfileScreen from '../screens/ProfileScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ShopMainScreen from '../screens/ShopMainScreen';
import CartScreen from '../screens/CartScreen';

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const MainMenuStack = createNativeStackNavigator();
const screenOptions = {
    headerShown: false,
  };

function RootNavigator() {
    return (
        <MainMenuStack.Navigator initialRouteName='SignInScreen' screenOptions={screenOptions}>
            <MainMenuStack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
            <MainMenuStack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
            <MainMenuStack.Group screenOptions={{presentation: 'modal'}}>
                <MainMenuStack.Screen name="Modal" component={ModalScreen}/>
            </MainMenuStack.Group>
            <MainMenuStack.Screen name="SignInScreen" component={SignInScreen}/>
            <MainMenuStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        </MainMenuStack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();
    // @ts-ignore
    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                //headerShown:false
            }}>
            <BottomTab.Screen
                name="TabOne"
                component={CartScreen}
                options={({navigation}: RootTabScreenProps<'TabOne'>) => ({
                    title:"Main",
                    tabBarIcon: ({color})  => <TabBarIcon name="home" color={color}/>,
                    // headerRight: () => (
                    //     <Pressable
                    //         onPress={() => navigation.navigate('Modal')}
                    //         style={({pressed}) => ({
                    //             opacity: pressed ? 0.5 : 1,
                    //         })}>
                    //         <FontAwesome
                    //             name="info-circle"
                    //             size={25}
                    //             color={Colors[colorScheme].text}
                    //             style={{marginRight: 15}}
                    //         />
                    //     </Pressable>
                    // ),
                })}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoScreen}
                options={{
                    title: 'message',
                    tabBarIcon: ({color})  => <TabBarIcon name="message1" color={color}/>,
                    headerShown: false
                }}
            />
            <BottomTab.Screen
                name="Message"
                component={TabTwoScreen}
                options={{
                    title: 'order',
                    tabBarIcon: ({color}) => <TabBarIcon name="bars" color={color}/>,
                    headerShown:false
                }}
            />
            <BottomTab.Screen
                name="Me"
                component={TabTwoScreen}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="user" color={color}/>,
                    headerShown:false
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>['name'];
  color: string;
}) {
  return <AntDesign size={30} style={{ marginBottom: -3 }} {...props} />;
}

