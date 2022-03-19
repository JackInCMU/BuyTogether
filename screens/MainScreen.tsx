import React from "react";
import { View, Text } from "react-native";
import { SearchBar } from "react-native-screens";

export default function MainScreen() {
    return (
        <View>
            <Text>BuyTogether</Text>
            <SearchBar
                placeholder="Search for shops"
            >
            </SearchBar>
            <Text>Search Bar</Text>
            <Text>Get Your 20% off</Text>
            <Text>Tab Icon</Text>
            <Text>Right Tab View</Text>
        </View>
    )

}