import './styles.scss';

export function ButtonsSquare() {
    return (
        <div
            className="flex w-[1200px] my-16 text-white flex-wrap mx-auto
                     justify-around"
        >
            <button className="btn-secondary-red btn-red">Excluir</button>
            <button className="btn-secondary-red btn-green">Sucesso</button>
            <button className="btn-secondary-red btn-blue">Acessar</button>
        </div>
    );
}
