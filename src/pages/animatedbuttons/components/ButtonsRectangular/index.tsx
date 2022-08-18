import './styles.scss';

export function ButtonsRectangular() {
    return (
        <div className="flex w-[1200px]  flex-wrap mx-auto justify-center">
            <button className="w-64 btn-red-tr rounded-md after:rounded-md">
                Excluir
            </button>
            <button className="w-64 btn-green-tr rounded-md after:rounded-md">
                Sucesso
            </button>
            <button className="w-64 btn-blue-tr rounded-md after:rounded-md">
                Acessar
            </button>
        </div>
    );
}
