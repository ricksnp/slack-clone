import { useState } from 'react';
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';
import "./ChatInput.css";
import firebase from "firebase";

interface ChannelProps {
    channelName: string,
    channelId: string
}

function ChatInput({channelName, channelId}: ChannelProps) {

    const [input, setInput] = useState<string>("");
    const [{user}] = useStateValue();

    const sendMessage = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (channelId) {
            db.collection('rooms').doc(channelId)
            .collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userimage: user.photoURL
            });
        }
        setInput("");
    }
    return (
        <div className="chatInput">
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName?.toLowerCase()}`}/>
                <button type="submit" onClick={sendMessage}></button>
            </form>
        </div>
    )
}

export default ChatInput
