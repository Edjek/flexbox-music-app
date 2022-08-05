import Game from './Game';
import Result from './Result';
import '../styles/Flexbox.css';

let Flexbox = () => {
    return (
        <section className="container">
            <Game page={1} />
            <Result />
        </section>
    );
};

export default Flexbox;
