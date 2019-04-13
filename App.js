import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Weather from './Weather'

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          isLoaded: true
        })
        console.log(position.coords)
      }),
      error => {
        console.log(error)
        this.setState({
          error: error
        })
      }
  }

  render() {
    const { isLoaded, error } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
          < Weather />
        ) : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>Getting the fucking weather
              </Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40,
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24
  }
});
