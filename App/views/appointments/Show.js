import React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default class AppointmentShow extends React.Component { 
  render() {
    var { appointment } = this.props.navigation.state.params
    const { navigate } = this.props.navigation;
    return (
      <Card>
        <CardTitle
          subtitle={appointment.title}
        />
        <CardContent text={appointment.body} />
        <CardAction 
          separator={true} 
          inColumn={false}>
          <CardButton
            onPress={() => {}}
            title="Edit"
            color="#FEB557"
          />
          <CardButton
            onPress={() => {navigate("Index")}}
            title="Return"
            color="#FEB557"
          />
        </CardAction>
      </Card>
    );
  }
}