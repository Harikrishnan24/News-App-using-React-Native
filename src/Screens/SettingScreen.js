import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Text, View, Content, Container, Header, Body, Form, Item, Label, Input, Thumbnail, Button, Picker } from 'native-base';
import Axios from 'axios';




export default class SettingScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            address: ''

        }

    }





    render() {
        return (

            <Container style={style.cnt}>
                <Header style={{ backgroundColor: "#fb703f" }} >
                    <Body style={{ alignItems: "center" }}>
                        <Text style={{ color: "white", fontWeight: "400", fontSize: 25, }} >Settings</Text>
                    </Body>
                </Header>

                <Content>
                    <View style={{ width: "95%" }}>
                        <Form>
                            <View style={{ alignItems: "center", marginTop: 10 }}>
                                <Thumbnail style={{ width: 120, borderWidth: 6, borderColor: "#ff6f00", borderRadius: 100, height: 120 }} large source={{ uri: "https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png" }} />
                            </View>
                            <Item floatingLabel>
                                <Label style={{ color: "white" }}>User Name</Label>
                                <Input style={{ color: "white" }} onChangeText={(username) => this.setState({ username })} />
                            </Item>

                            <Item floatingLabel>
                                <Label style={{ color: "white" }}>Email Address</Label>
                                <Input style={{ color: "white" }} onChangeText={(email) => this.setState({ email })} />
                            </Item>
                            <Item stackedLabel>
                                <Label style={{ color: "white" }}> Address</Label>
                                <Input placeholder="ABC Building, India" placeholderTextColor="white" style={{ color: "white" }} onChangeText={(address) => this.setState({ address })} />
                            </Item>
                            <View style={{ marginTop: 10, padding: 20 }}>
                                <Button onPress={() => this.props.navigation.navigate('Profile', { username: this.state.username, email: this.state.email, address: this.state.address })} style={{ width: "105%", backgroundColor: "#FF6F00", justifyContent: "center" }}>
                                    <Text>Edit</Text>
                                </Button>
                            </View>
                        </Form>
                    </View>

                </Content>
            </Container >
        );

    }
}

const style = StyleSheet.create({
    cnt: {
        backgroundColor: "#2f2d29"
    }
})