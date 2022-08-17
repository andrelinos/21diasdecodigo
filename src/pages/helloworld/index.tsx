import './styles.css';

export function HelloWorld() {
    return (
        <div className="container-hello-world">
            <h1 className="day-title">Primeiro dia</h1>
            <div className="content">
                <svg
                    fill="none"
                    viewBox="0 0 1000 500"
                    width="auto"
                    height="auto"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <foreignObject width="100%" height="100%">
                        <div className="svg-container">
                            <h1 className="title">Hello Word!</h1>
                            <span className="hashtag21">#21diasdecodigo</span>
                        </div>
                    </foreignObject>
                </svg>
            </div>
        </div>
    );
}
