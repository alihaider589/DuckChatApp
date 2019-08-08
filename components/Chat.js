// // @flow
// import React from 'react';
// import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

// import Fire from '../Fire';
 
//  type Props = {
//   name?: string,
// };

// class Chat extends React.Component<Props> {

//   static navigationOptions = ({ navigation }) => ({
//     title: (navigation.state.params || {}).name || 'Chat!',
//   });

//   state = {
//     messages: [],
//   };

//   get user() {
//     return {
//       name: this.props.navigation.state.params.name,
//       _id: Fire.shared.uid,
//     };
//   }

//   render() {
//     return (
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={Fire.shared.send}
//         user={this.user}
//       />
//     );
//   }

//   componentDidMount() {
//     Fire.shared.on(message =>
//       this.setState(previousState => ({
//         messages: GiftedChat.append(previousState.messages, message),
//       }))
//     );
//   }
//   componentWillUnmount() {
//     Fire.shared.off();
//   }
// }

// export default Chat;





import React from 'react';

import {View} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import Backend from './Backend';

export default class Chat extends React.Component {
    static navigationOptions = {
        title: 'Welcome To World of Ducks',
        headerStyle: {
            paddingTop: 20,
            height: 60,
            backgroundColor: 'rgb(85, 122, 226)'
        },
      };
    
  state = {
    messages: [],
  };
  componentWillMount() {

  }
  render() {
    return (
 


      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
            Backend.sendMessage(message);
        }}
        user={{
            _id: Backend.getUid(),
            name: this.props.name,
        }}
        />
      
    );
  }
  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}

Chat.defaultProps = {
  name: 'John Smith',
};

Chat.propTypes = {
  name: React.string,
};