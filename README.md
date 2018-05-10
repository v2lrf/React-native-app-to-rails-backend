This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

# Test the application locally
First, you have to create the seeds and launch the rails server available [here](https://github.com/Eth3rnit3/Rails_React_Native_Demo)

You need [Expo](https://github.com/expo/expo) to be installed on your system. All you have to do is 

```
npm install

npm start
```

You only have to choose with which device to open the application. You will be on the login screen and only have to enter the login and password of the seeds of the backend 

```
login: api_user@domain.com

password: 123456
```

Now you can find the appointments created by the seeds and test the basic CRUD on the Appointment model which contains a title field and a body field


# How to use this boilerplate to start a new application

This project contains the main logic that allows a user to connect to a Ruby on Rails backend that uses the [Devise Auth Token](https://github.com/lynndylanhurley/devise_token_auth) gem. 
Thanks to redux and redux-persist the modified token at each request is saved locally and the user is automatically reconnected when it exits and returns to the application

If you want to reuse this project you only have to delete the two appointments folders in app/components and app/views as well as the file AppointmentStack.js and modify the references to it in the file AppStack.js

Now you can start a new application that already connects to your Ruby on Rails backend.

I chose to leave the Appointment model as an example for your own model.

I absolutely don't pretend to have done anything perfect but it works. I didn't create the sign_up part because I don't need it in the application I'm working on but I would need to implement deeplinking to be able to manage invitations with [Devise Invitable](https://github.com/scambra/devise_invitable), this will probably be part of a future commit.

Any remarks about a possible wrong way of doing things or observations to improve the project will be taken with great pleasure.

And of course any contribution too.

Appy code :-)