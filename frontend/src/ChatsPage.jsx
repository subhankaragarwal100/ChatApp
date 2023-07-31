
// import {
//     MultiChatWindow,
//     MultiChatSocket,
//     useMultiChatLogic,
//   } from 'react-chat-engine-advanced';
  
//     const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//       '0fc710ae-80a0-41f2-b0c2-cba68f1ffe99',
//        props.user.username,
//        props.user.secret
//     );
//     return (
//         <div style={{height: '100vh'}}>
//         <MultiChatSocket {...chatProps}/>
//         <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
//         </div>
//     )
//   }

import{ PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  return(
    <div style={{height: '100vh'}}>
      <PrettyChatWindow
       projectId='0fc710ae-80a0-41f2-b0c2-cba68f1ffe99'
       username={props.user.username}
       secret={props.user.secret}
       style={{height: '100%'}}
      
      />
    </div>
  )
}

export default ChatsPage