import { ButtonsRectangular } from './components/ButtonsRectangular';
import { ButtonsRounded } from './components/ButtonsRounded';
import { ButtonsSquare } from './components/ButtonsSquare';

import './styles.scss';

export function AnimatedButtons() {
    return (
        <div className="flex w-screen flex-col h-screen bg-gray-600 wrapper-top">
            <div className="flex w-6xl flex-col mx-auto p-8">
                <h1 className="my-8">Botões animados</h1>
                <ButtonsRectangular />
                <ButtonsSquare />
                <ButtonsRounded />
            </div>
        </div>
    );
}
