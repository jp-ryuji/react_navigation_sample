import React from 'react';
import { Button, Image , View, Text } from 'react-native';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../assets/images/spiro.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button')}
        title="info"
        color="#fff"
      />
    )
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        {/* NOTE: the navigation prop is passed in to every screen component (definition) in StackNavigator */}
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}
