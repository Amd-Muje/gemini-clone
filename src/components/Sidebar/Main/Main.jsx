import "./Main.css";
import profileImg from "../../../assets/profile.png"; // Adjust the path as necessary
import geminiImg from "../../../assets/gemini.png"; // Adjust the path as necessary
import {
	CompassIcon,
	CookingPotIcon,
	GraphIcon,
	ImagesIcon,
	LightbulbFilamentIcon,
	MicrophoneIcon,
	PaperPlaneRightIcon,
    UserCircleIcon,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { Context } from "../../../context/Context";

const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResult,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

	return (
		<div className="main">
			<div className="nav">
				<p>Gemini</p>
				<img src={profileImg} alt="profile img" width={32} />
			</div>
			<div className="main-container">
				{!showResult ? (
					<>
						<div className="greet">
							<p>
								<span>Hello, Dev</span>
							</p>
							<p>How Can I Help You Today?</p>
						</div>
						<div className="cards">
							<div className="card">
								<p>Buat rencana perjalanan</p>
								<CompassIcon className="icon" size={32} />
							</div>
							<div className="card">
								<p>Sarankan resep masakan</p>
								<CookingPotIcon className="icon" size={32} />
							</div>
							<div className="card">
								<p>Bandingkan teknologi</p>
								<GraphIcon className="icon" size={32} />
							</div>
							<div className="card">
								<p>Jelaskan sebuah konsep</p>
								<LightbulbFilamentIcon className="icon" size={32} />
							</div>
						</div>
					</>
				) : (
					<div className="result">
                        <div className="result-title">
                            <img src={profileImg} alt="profile img" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={geminiImg} alt="" />
                            {loading ? 
                            <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            :
                            
                            <p dangerouslySetInnerHTML={{ __html: resultData }} />
                            }
                        </div>
                    </div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => setInput(e.target.value)}
							value={input}
							type="text"
							placeholder="Enter a promt Here"
						/>
						<div>
							<ImagesIcon className="searchbar-icon" size={32} />
							<MicrophoneIcon className="searchbar-icon" size={32} />
							<PaperPlaneRightIcon
								onClick={() => onSent()}
								className="searchbar-icon"
								size={32}
							/>
						</div>
					</div>
					<p className="bottom-info">
						Gemini is a large multimodal model that can accept images and text
						as input and generate text as output. It is designed to be helpful,
						honest, and harmless.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
