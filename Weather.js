import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ["#00c6fb", "#005bea"],
        title: "Raining Like a MF",
        subtitle: "For more info look outside",
        icon: "weather-rainy",
        // icon: "ios-rainy"
    },
    Clear: {
        colors: ["#fef253", "#ff7300"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt",
        icon: "weather-sunny",
        // icon: "ios-sunny"
    },
    Thunderstorm: {
        colors: ["#00ecbc", "#007adf"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: "weather-lightning",
        // icon: "ios-thunderstorm"
    },
    Clouds: {
        colors: ["#d7d2cc", "#304352"],
        title: "Clouds",
        subtitle: "I know, Fucking boring",
        icon: "weather-cloudy",
        // icon: "ios-cloudy"
    },
    Snow: {
        colors: ["#7de2fc", "#b9b6e5"],
        title: "Cold as balls",
        subtitle: "Do you wanna build a snowman? Fuck, no.",
        icon: "weather-sknowy",
        // icon: "ios-snow"
    },
    Drizzle: {
        colors: ["#89f7fe", "#66a6ff"],
        title: "Drizzle",
        subtitle: "It's like a rain, but gay",
        icon: "weather-hail",
        // icon: "ios-rainy"
    },
    Mist: {
        colors: ["#89f7fe", "#66a6ff"],
        title: "Mist",
        subtitle: "It's like you have no glasses",
        icon: "weather-rainy",
        // icon: "ios-rainy"
    },
    Haze: {
        colors: ["#89f7fe", "#66a6ff"],
        title: "Mist",
        subtitle: "Don't know what that is",
        icon: "weather-fog",
        // icon: "ios-rainy"
    }
}

// export default class Weather extends Component {
//     render() {
//         return (
//             <LinearGradient colors={["#00c6fb", "#005bea"]} style={styles.container}>
//                 <StatusBar hidden="true" />
//                 <View style={styles.upper}>
//                     <Ionicons color="white" size={144} name="ios-rainy" />
//                     <Text style={styles.temp}>{`35º`}</Text>
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>Raining like a MF</Text>
//                     <Text style={styles.subtitle}>For more info look outside</Text>
//                 </View>
//             </LinearGradient>
//         );
//     }
// }

function Weather({ temp, weatherName }) {
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            {console.log(weatherName)}
            <StatusBar hidden="true" />
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                {/* <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} /> */}
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 50,
    }
})
