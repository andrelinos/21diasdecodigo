import { Routes, Route } from 'react-router-dom';

import { Home } from './pages';
import { AnimatedButtons } from './pages/animatedbuttons';
import { HelloWorld } from './pages/helloworld';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/helloworld" element={<HelloWorld />} />
            <Route path="/animatedbuttons" element={<AnimatedButtons />} />
        </Routes>
    );
}

export default App;
