import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Context from './Context';
import Flexbox from './pages/Flexbox';
import Page from './components/Page';
import './styles/index.scss';

function App() {
    const Provider = Context.Provider;
    const [result, setResult] = useState('');
    const [vinyl, setVinyl] = useState('');
    const [page, setPage] = useState(1);

    return (
        <Provider value={{ result, setResult, vinyl, setVinyl, page, setPage }}>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Flexbox />} />
                        <Route path="/page" element={<Page />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
