import React from "react";
import { 
    StyleSheet,
    Text,
    View,
 } from "react-native";


 const styles = StyleSheet.create ({
    display: {
        flex: 1,
        padding:20,
        justifyContent: "center",
        backgroundColor: "#d3d3d3",
        alignItems: "flex-end",
    },
    displayValue: {
        fontSize: 60,
        color: "white",
    }

})

export default props =>
<View style={styles.display}>
       <Text style={styles.displayValue} 
       numberOfLines={1}>{props.value}</Text> 
</View>