import NavBar from './NavBar';
import Rules from './Rules';
import Practice from './Practice';
import '../styles/Game.css';

const Game = ({ page }) => {
    return (
        <div className="game">
            <NavBar page={page} />
            <Rules />
            <Practice />
        </div>
    );
};

export default Game;
