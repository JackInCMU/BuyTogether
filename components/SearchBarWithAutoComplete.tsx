import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {MAP_API_KEY} from "../config/GoogleMap";

export const SearchBarWithAutoComplete = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          query={{
            key: MAP_API_KEY,
            language: 'en',
          }}
          onPress={(data, details = null) => console.log(data)}
          onFail={(error) => console.error(error)}
          requestUrl={{
            url:
              'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
            useOnPlatform: 'web',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#ecf0f1',
    height:400,

  },
  searchBar: {
    paddingTop:10,
    width:300,
    alignSelf:"center",
    height: "100%"
  }

});
