import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
export default class App extends React.Component {
  state = {
    jsonData: '',
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          jsonData: json.body,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  componentDidMount() {
    fetch('https://webhook.site/4e5fa517-2fe2-4861-ab83-f35ebe056da8', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        param1: 'value1',
        param2: 'value2',
      }),
    });
     
  }
  
  


  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <Text>{this.state.jsonData}</Text>
      </View>
    );
  }
}