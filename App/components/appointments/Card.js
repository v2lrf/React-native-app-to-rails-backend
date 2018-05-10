import React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default class AppointmentCard extends React.Component { 
  render() {
    return (
      <Card>
        <CardTitle
          subtitle={this.props.appointment.title}
        />
        <CardContent text={this.props.appointment.body} />
        <CardAction 
          separator={true} 
          inColumn={false}>
          <CardButton
            onPress={this.props.seeAppointmentDetail}
            title="See detail"
            color="#FEB557"
          />
          <CardButton
            onPress={this.props.editAppointment}
            title="Edit"
            color="#FEB557"
          />
          <CardButton
            onPress={this.props.deleteAppointment}
            title="Delete"
            color="#FEB557"
          />
        </CardAction>
      </Card>
    );
  }
}