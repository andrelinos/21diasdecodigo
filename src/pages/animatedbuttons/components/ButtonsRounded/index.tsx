import './styles.scss';

export function ButtonsRounded() {
    return (
        <div
            className="flex w-[1200px] my-16 flex-wrap mx-auto
                     justify-around relative"
        >
            <button className="btn btn-white btn-animate btn-danger">
                Excluir
            </button>
            <button className="btn btn-white btn-animate btn-success">
                Sucesso
            </button>
            <button className="btn btn-white btn-animate btn-primary">
                Acessar
            </button>
        </div>
    );
}
