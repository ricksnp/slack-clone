import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { useHistory } from "react-router-dom";
import db from "../../firebase";
import "./SidebarOption.css";

export interface IProps {
  title: String;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  id?: String;
  addChannelOption?: boolean;
}

function SidebarOption({ title, Icon, id, addChannelOption }: IProps) {
  const history = useHistory();

  const selectChannel = () => {
    // If there is an id present for the channel, we push the channel onto the 
    // history stack.  Otherwise, just push the name of the channel.
    if (id){
      history.push(`/room/${id}`)
    }
    else{
      history.push(`${title}`)
    }
  }

  // Add a channel through the database, automatically refreshes
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name: ");
    if (channelName){
      db.collection('rooms').add({
        name: channelName
      })
    }
  }

  // All of the options you see in the sidebar.  If we don't pass an icon in as a prop,
  // show a # instead.
  return (
    <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
