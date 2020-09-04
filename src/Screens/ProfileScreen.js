import React, { Component } from 'react'
import { Text, View, Content, Container, Header, Body, Form, Item, Label, Input, Thumbnail, Button, Picker } from 'native-base'
import Axios from 'axios';
import { StyleSheet } from 'react-native';

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        const id = this.props.navigation.getParam('id', null);


    }


    /*  componentDidMount() {
          if (this.state.loading) {
              const response = this.loadData();
              response.then(data => {
                  console.log(data);
                  this.setState({ data: data.data.data }, () => {
                      this.setState({ loading: false })
                  })
              }).catch(error => { });
          }
      }
  
      loadData = async () => {
          return await Axios({
              url: "https://reqres.in/api/users",
              method: 'GET',
              params: {
                  page: 1,
                  per_page: 50
              }
          });
      }
  */


    render() {


        username = this.props.navigation.getParam('username', 'Name');
        email = this.props.navigation.getParam('email', 'email@email.com');
        address = this.props.navigation.getParam('address', 'Address,ABC Building,India');

        return (
            //<View style={{ marginTop: 0.3, backgroundColor: 'black' }}>
            //  {loading ? <ActivityIndicator /> : null}
            //{!loading && data ?
            /*  <FlatList data={data} keyExtractor={(item, key) => { return item.email }} renderItem={({ item }) => {
                  return <View style={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 5, borderBottomColor: "orange", borderBottomWidth: 1, marginTop: 10, }}>
                      <View style={{ flex: .2, }}>
                          <Image source={{ uri: item.avatar }} style={{ width: 40, height: 40, borderRadius: 100, borderWidth: 2, borderColor: 'orange' }} />
                      </View>
                      <View style={{ flex: .8 }}>
                          <Text style={{ color: "orange", fontSize: 17 }}>{item.first_name}{" "}{item.last_name}</Text>
                      </View>
                  </View>
              }} /> : null}
      </View>*/
            <Container style={style.cnt}>
                <Header style={{ backgroundColor: "#fb703f" }} >
                    <Body style={{ alignItems: "center" }}>
                        <Text style={{ color: "white", fontWeight: "400", fontSize: 25, }} >Profile</Text>
                    </Body>
                </Header>

                <Content>
                    <View style={{ width: "95%" }}>
                        <Form>
                            <View style={{ alignItems: "center", marginTop: 10 }}>
                                <Thumbnail style={{ width: 120, borderWidth: 6, borderColor: "#ff6f00", borderRadius: 100, height: 120 }} large source={{ uri: "https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png" }} />
                            </View>
                            <Item stackedLabel>
                                <Label style={{ color: "white" }}> Username</Label>
                                <Label style={{ color: "white" }}>{username}</Label>
                            </Item>
                            <Item stackedLabel>
                                <Label style={{ color: "white" }}> Email</Label>
                                <Label style={{ color: "white" }}>{email}</Label>

                            </Item>
                            <Item stackedLabel>
                                <Label style={{ color: "white" }}>Address</Label>
                                <Label style={{ color: "white" }}>{address}</Label>

                            </Item>





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