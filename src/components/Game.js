import NavBar from './NavBar';
import Rules from './Rules';
import Practice from './Practice';
import '../styles/Game.css';

const Game = () => {
    return (
        <div className="game">
            <NavBar />
            <Rules />
            <Practice />
        </div>
    );
};

export default Game;
