import "./_chatonline.scss"

function ChatOnline() {
    return (
        <div className="chatOnlineContainer">
            <div className="friend">
                <div className="imgContainer">
                    <img className="" src="https://cdn.discordapp.com/avatars/471238565033148427/121f385ebe564b8441ec617ced1e5d4e.webp" />
                    <div className="badge"></div>
                </div>
                <div className="username">John Doe</div>
            </div>
        </div>
    );
}

export default ChatOnline;