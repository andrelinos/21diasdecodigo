import { ArrowFatLinesRight, CheckCircle, Rocket } from 'phosphor-react';
import { Link } from 'react-router-dom';

interface Props {
    title: string;
    image: string;
    url: string;
    day: string;
    children: React.ReactNode;
}

export function HomeCard({ title, image, url, day, children }: Props) {
    return (
        <div className="card-content">
            <span className="day-card-over">{day}</span>
            <span className="card-image">
                <img src={image} alt="Image Projeto" />
            </span>
            <div className="description">
                <h1>{title}</h1>
                <h2>
                    <Rocket size={32} /> Tecnologias utilizadas
                </h2>
                <ul className="list-techs">{children}</ul>
                <div className="button-container">
                    <a href={url} title={title}>
                        Acessar projeto
                        <ArrowFatLinesRight size={32} weight="fill" />
                    </a>
                </div>
            </div>
        </div>
    );
}
