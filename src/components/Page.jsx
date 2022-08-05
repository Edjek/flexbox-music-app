import Game from './Game';
import Result from './Result';

let Page = () => {
    return (
        <section className="container">
            <Game page={2} />
            <Result />
        </section>
    );
};

export default Page;
