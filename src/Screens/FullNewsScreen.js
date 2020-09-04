import React, { Component } from 'react'
import { View, Button, ScrollView, ActivityIndicator, FlatList, Text, Image } from 'react-native'
import Axios from 'axios';




export default class FullNewsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name', null),
            headerStyle: {
                backgroundColor: "#fb703f"
            },
            headerTitleStyle: {
                color: "#2f2d29",
                textAlign: "center",
                fontSize: 25,
                fontWeight: "400",
                textTransform: "uppercase"
            },
            headerTintColor: "#2f2d29"
        };

    };
    constructor(props) {
        super(props);

        this.state = {

        }

    }


    render() {
        const name = this.props.navigation.getParam('name', null);
        const content = this.props.navigation.getParam('content', null);
        const title = this.props.navigation.getParam('title', null);
        const author = this.props.navigation.getParam('author', null);
        const time = this.props.navigation.getParam('time', null);
        const imageuri = this.props.navigation.getParam('imageuri', null);
        const description = this.props.navigation.getParam('description', null);
        return (

            <View style={{ backgroundColor: "#2f2d29", flex: 1, padding: 10 }}>

                <Text style={{ fontSize: 20, fontWeight: "500", marginTop: 2, fontFamily: 'serif', color: "white" }}>{title}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}><Text style={{ color: "#fb703f" }}>{author}</Text><Text style={{ color: "#fb703f" }}> Time : {time}</Text></View>
                <ScrollView style={{ marginTop: 5 }}>
                    <Image source={{ uri: imageuri }} style={{ height: 200, width: "100%", }} />


                    <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "300", fontFamily: 'serif', color: "#fb703f" }}>{description}</Text>
                    <Text style={{ fontSize: 20, color: "#fb703f" }}>{content}</Text>
                </ScrollView>
            </View >

        );

    }
}