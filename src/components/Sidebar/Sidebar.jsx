import React, { useContext } from "react";
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
import { Context } from "../../context/Context";

const Sidebar = () => {
	const iconSize = 20;

	const [extended, setExtended] = useState(false);
	const { onSent, prevPrompts, setRecentPromt,newChat } = useContext(Context);

	const loadPrompt = async (prompt) => {
		setRecentPromt(prompt);
		await onSent(promt)
	}


	return (
		<div className="sidebar">
			<div className="top">
				<ListIcon
					onClick={() => setExtended((prev) => !prev)}
					className="menu"
					size={iconSize}
				/>
				<div onClick={()=> newChat()} className="new-chat">
					<PlusIcon size={iconSize} />
					{extended ? <p>New Chat</p> : null}
				</div>
				{extended ? (
					<div className="recent">
						<p className="recent-title">Recent</p>
						{prevPrompts.map((item, index) => {
							return (
								<div onClick={() => loadPrompt(item)} className="recent-entry">
									<ChatIcon size={iconSize} />
									<p>{item.slice(0,18)}...</p>
								</div>
							);
						})}
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
