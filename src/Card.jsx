import profilePic from './assets/profile-pic.png';

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile pic"/>
            <h2 className="card-title">Josef</h2>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, ratione.</p>
        </div>
    );
}

export default Card;