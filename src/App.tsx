import { Routes, Route } from 'react-router-dom';

import { Home } from './pages';
import { HelloWorld } from './pages/helloworld';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/helloworld" element={<HelloWorld />} />
        </Routes>
    );
}

export default App;
