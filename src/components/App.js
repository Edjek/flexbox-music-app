import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Context from '../Context';
import Flexbox from './Flexbox';
import Page from './Page';
import '../styles/App.css';

function App() {
    const Provider = Context.Provider;
    const [result, setResult] = useState('');
    const [vinyl, setVinyl] = useState('');
    return (
        <Provider value={{ result, setResult, vinyl, setVinyl }}>
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