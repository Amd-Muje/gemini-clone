import React from "react";
import "./Sidebar.css";
import {
	ChatIcon,
	ClockCounterClockwiseIcon,
	GearIcon,
	ListIcon,
	PlusIcon,
	QuestionIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

const Sidebar = () => {
	const iconSize = 20;

	const [extended, setExtended] = useState(false);

	return (
		<div className="sidebar">
			<div className="top">
				<ListIcon onClick={() => setExtended(prev=>!prev)} className="menu" size={iconSize} />
				<div className="new-chat">
					<PlusIcon size={iconSize} />
					{extended ? <p>New Chat</p> : null}
				</div>
				{extended ? (
					<div className="recent">
						<p className="recent-title">Recent</p>
						<div className="recent-entry">
							<ChatIcon size={iconSize} />
							<p> What is react...</p>
						</div>
					</div>
				) : null}
			</div>
			<div className="bottom">
				<div className="bottom-item recent-entry">
					<QuestionIcon size={iconSize} />
					{extended ? <p>Help</p> : null}
				</div>
				<div className="bottom-item recent-entry">
					<ClockCounterClockwiseIcon size={iconSize} />
					{extended ? <p>Activity</p> : null}
				</div>
				<div className="bottom-item recent-entry">
					<GearIcon size={iconSize} />
					{extended ? <p>Settings</p> : null}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
