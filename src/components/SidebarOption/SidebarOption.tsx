import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
import "./SidebarOption.css";

export interface IProps {
  title: String;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  id?: String;
}

function SidebarOption({ title, Icon }: IProps) {
  return (
    <div className="sidebarOption">
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
