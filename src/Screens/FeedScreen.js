import React, { Component } from 'react'
import { View, ScrollView, ActivityIndicator, RefreshControl, FlatList, Image } from 'react-native'
import Axios from 'axios';
import { Button, Text } from 'native-base'
import { black } from 'ansi-colors';


export default class FeedScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        const id = this.props.navigation.getParam('id', null);
        this.state = {
            loading: true,
            data: undefined,
            refreshing: false,
            country: undefined

        }
        this.selectCountry = this.selectCountry.bind(this);
    }
    selectCountry(country) {
        this.setState({ country: country, loading: true }, () => {
            if (this.state.loading) {
                const response = this.loadData(this.state.country);
                response.then(data => {
                    console.log(data);
                    this.setState({ data: data.data.articles }, () => {
                        this.setState({ loading: false })
                    })
                }).catch(error => { });
            }
        });
    }

    componentDidMount() {
        const { country } = this.state;
        if (this.state.loading) {
            const response = this.loadData(country ? country : "in");
            response.then(data => {
                console.log(data);
                this.setState({ data: data.data.articles }, () => {
                    this.setState({ loading: false })
                })
            }).catch(error => { });
        }
    }


    loadData = async (country) => {

        return await Axios({

            url: "https://newsapi.org/v2/top-headlines?country=" + country + "&apiKey=779cee365d62452abe8e53d88f7d0d08",
            method: 'GET',

        });
    }
    onRefresh = () => {
        const { country } = this.state;
        this.setState({ refreshing: true });
        fetchdata().then(() => {
            if (this.state.loading) {
                const response = this.loadData(country ? country : "in");
                response.then(data => {
                    console.log(data);
                    this.setState({ data: data.data.articles }, () => {
                        this.setState({ loading: false })
                    })
                }).catch(error => { });
            }
        });
    }

    render() {
        const { loading, data, country } = this.state;
        return (

            <View style={{ backgroundColor: "#2f2d29", flex: 1 }}>
                <View style={{ flexDirection: "row", padding: 10, borderBottomColor: "#fb703f", borderBottomWidth: 5, backgroundColor: '#38322E' }}>

                    <View style={{ justifyContent: "center", alignContent: "center" }}>
                        <Text style={{ fontSize: 38, color: "#fb703f", fontWeight: "400", marginLeft: 45, marginRight: 5, textAlign: "center", }}>HEADLINES</Text>
                    </View>
                    <Button style={{ backgroundColor: "#fb703f", marginLeft: 10 }} onPress={() => {
                        this.props.navigation.navigate('Home', {
                            handleCountry: this.selectCountry
                        })
                    }} ><Text style={{ letterSpacing: 2 }}>{country ? country : "Country"}</Text>
                    </Button>
                </View>
                {loading ? <ActivityIndicator /> : null}
                {
                    !loading && data ?
                        <ScrollView style={{ padding: 6, }} refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }>
                            <FlatList data={data} keyExtractor={(item, key) => { return item.name }} renderItem={({ item }) => {
                                return <View style={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 5, borderBottomColor: "#fb703f", borderBottomWidth: 2, padding: 20, }}>
                                    <View style={{ flex: .3, }}>

                                        <Image source={{ uri: item.urlToImage }} style={{ height: 100, borderWidth: 3, borderColor: 'white' }} />
                                    </View>
                                    <View style={{ flex: .7, marginLeft: 10 }} >
                                        <Text style={{ color: "#FF8A65" }}>{item.source.name}</Text>
                                        <Text style={{ color: "white", letterSpacing: 0.3, fontWeight: "500", fontSize: 14 }} onPress={() => this.props.navigation.navigate('FullNew', { name: item.source.name, time: item.publishedAt, content: item.content, title: item.title, author: item.author, description: item.description, imageuri: item.urlToImage })} >{item.title}</Text>
                                        <Text style={{ color: "#fb703f" }}>{item.author}</Text>
                                    </View>
                                </View>
                            }} />
                        </ScrollView> : null
                }
            </View >

        );

    }
}

