import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {Card} from "react-native-elements";
export default function EditScreenInfo({path}: { path: string }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Card containerStyle={styles.card_container}>
                    <Text style={styles.paragraph}>
                        Customer: Jane {"\n"}
                        Address: 5000 Forbes Avenue {"\n"}
                        Status:
                        <Card containerStyle={styles.order_status}>
                            <Text style={{color:'red'}}>
                                Ongoing
                            </Text>
                        </Card>
                        {"\n"}Order Time: 2pm Mar 13
                    </Text>
                </Card>
                <Card containerStyle={styles.card_container}>
                    <Text style={styles.paragraph}>
                        Customer: Judy {"\n"}
                        Address: 5000 Forbes Avenue {"\n"}
                        Status:
                        <Card containerStyle={styles.order_status}>
                            <Text style={{color:'red'}}>
                                Ongoing
                            </Text>
                        </Card>
                        {"\n"}Order Time: 2pm Mar 13
                    </Text>
                </Card>
                <Card containerStyle={styles.card_container}>
                    <Text style={styles.paragraph}>
                        Customer: Davis {"\n"}
                        Address: 201 Forbes Avenue {"\n"}
                        Status:
                        <Card containerStyle={styles.order_status}>
                            <Text style={{color:'green'}}>
                                Completed
                            </Text>
                        </Card>
                        {"\n"}Order Time: 3pm Mar 10
                    </Text>
                </Card>
            </View>
        </SafeAreaView>
    );
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#99DE9F',
    },
    paragraph: {
        margin: 10,
        fontSize: 18,
        textAlign: 'left',
        color: '#34495e',
    },
    card_container: {
        alignItems: 'flex-start',
        borderRadius: 10,
        borderWidth: 2
    },
    order_status: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 1,
        margin: 3,
        borderRadius:10,
    },
});
