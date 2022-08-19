import { Routes, Route } from 'react-router-dom';

import { Home } from './pages';
import { AnimatedButtons } from './pages/animatedbuttons';
import BasicCharts from './pages/charts';
import { HelloWorld } from './pages/helloworld';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/helloworld" element={<HelloWorld />} />
            <Route path="/animatedbuttons" element={<AnimatedButtons />} />
            <Route path="/charts" element={<BasicCharts />} />
        </Routes>
    );
}

export default App;
