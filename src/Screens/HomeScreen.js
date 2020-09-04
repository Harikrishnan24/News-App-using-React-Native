import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Button, Header, Text, Content, View, Icon, Left, Body } from 'native-base'
export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            country: ''
        }

    }


    render() {
        return (


            <Container style={{ backgroundColor: "#2f2d29", }}>
                <Header style={{ backgroundColor: "#fb703f", justifyContent: "center", alignItems: "center" }}>
                    <Icon name="md-map" style={{ color: "#2f2d29", paddingRight: 8, fontSize: 30 }} /><Text style={{ color: "#2f2d29", textTransform: "uppercase", fontSize: 30 }}>Select a Country</Text>
                </Header>
                <Content padder style={{ marginTop: 10, }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Button style={style.btn} onPress={() => {
                            this.props.navigation.state.params.handleCountry("in");
                            this.props.navigation.pop();
                        }}>
                            <Text style={style.contxt}>India</Text>
                        </Button>
                        <Button style={style.btn} onPress={() => {
                            this.props.navigation.state.params.handleCountry("au");
                            this.props.navigation.pop();
                        }}>
                            <Text style={style.contxt}>Australia</Text>
                        </Button>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Button style={style.btn} onPress={() => {
                            this.props.navigation.state.params.handleCountry("cn");
                            this.props.navigation.pop();
                        }}>
                            <Text style={style.contxt}>China</Text>
                        </Button>


                        <Button style={style.btn} onPress={() => {
                            this.props.navigation.state.params.handleCountry("sg");
                            this.props.navigation.pop();
                        }}>
                            <Text style={style.contxt}>Singapore</Text>
                        </Button>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Button style={style.btn} onPress={() => {
                            this.props.navigation.state.params.handleCountry("us");
                            this.props.navigation.pop();
                        }}>
                            <Text style={style.contxt} >United States</Text>
                        </Button>
                        <Button style={style.btn} onPress={() => {
                            this.props.navigation.state.params.handleCountry("ae");
                            this.props.navigation.pop();
                        }}>
                            <Text style={style.contxt} >UAE</Text>
                        </Button>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Button style={style.btn} onPress={() => {
                            this.props.navigation.state.params.handleCountry("za");
                            this.props.navigation.pop();
                        }}>
                            <Text style={style.contxt} >South Africa</Text>
                        </Button>
                        <Button style={style.btn} onPress={() => {
                            this.props.navigation.state.params.handleCountry("nz");
                            this.props.navigation.pop();
                        }}>
                            <Text style={style.contxt} >New Zealand</Text>
                        </Button>

                    </View>
                </Content>
            </Container >
        );

    }
}
const style = StyleSheet.create({
    btn: {
        marginTop: 10,
        width: "45%",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#292626",
        borderColor: "#fb703f",
        borderWidth: 4,
        elevation: 10

    },

})