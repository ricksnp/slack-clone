import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "../../firebase";
import { useEffect, useState } from "react";
import Message from "../Message/Message"
import {IProps} from "../Message/Message";
function Chat() {
  interface ParamTypes {
    roomId: string;
  }

  const { roomId } = useParams<ParamTypes>();
  const [roomDetails, setRoomDetails] = useState<any>(null);
  const [roomMessages, setRoomMessages] = useState<any>([]);
  
  useEffect(() => {
    if (roomId){
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomDetails(snapshot.data())
      ))
    }
    db.collection('rooms').doc(roomId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(
      snapshot => setRoomMessages(
        snapshot.docs.map(doc => doc.data())
      )
    )
  }, [roomId])
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name }</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p><InfoOutlinedIcon /> Details</p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map((message:IProps) => (
          <Message
          message={message.message}
          timestamp={message.timestamp}
          user={message.user}
          userimage={message.userimage}
          />
        ))}
      </div>
    </div>
  );
}

export default Chat;
