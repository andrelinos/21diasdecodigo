import {
    ArrowArcRight,
    ArrowFatLinesRight,
    CheckCircle,
    GithubLogo,
    Globe,
    InstagramLogo,
    LinkedinLogo,
    Rocket,
    RocketLaunch,
    YoutubeLogo,
} from 'phosphor-react';
import { HomeCard } from '../components/home/cards';
import { Item } from '../components/home/cards/ItemList';

import '../styles/home.css';
import { data } from './api/data';

export function Home() {
    return (
        <div className="container-home">
            <div className="header-content">
                <span className="title">21 dias de código</span>
                <span className="buttons">
                    <a
                        href="https://www.instagram.com/andrelinossilva/"
                        title="Instagram"
                        target="_blank"
                    >
                        <InstagramLogo size={32} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/andrelinosilva/"
                        title="LinkedIn"
                        target="_blank"
                    >
                        <LinkedinLogo size={32} />
                    </a>
                    <a
                        href="https://app.rocketseat.com.br/me/andrelinosilva/"
                        title="Rocketseat"
                        target="_blank"
                    >
                        <RocketLaunch size={32} />
                    </a>
                    <a
                        href="https://www.youtube.com/c/AndrelinoSilvas/"
                        title="Youtube"
                        target="_blank"
                    >
                        <YoutubeLogo size={32} />
                    </a>
                    <a
                        href="https://www.andrelino.dev/"
                        title="Site Andrelino Silva"
                        target="_blank"
                    >
                        <Globe size={32} />
                    </a>
                    <a
                        href="https://github.com/andrelinos/"
                        title="Github Andrelino Silva"
                        target="_blank"
                    >
                        <GithubLogo size={32} />
                    </a>
                </span>
            </div>
            <div className="main-content">
                {data.map(({ title, image, day, url, techs }, index) => (
                    <HomeCard
                        key={`${title}${index}`}
                        image={image}
                        title={title}
                        day={day}
                        url={url}
                    >
                        {techs.map((tech) => (
                            <Item key={tech} title={tech} />
                        ))}
                    </HomeCard>
                ))}
            </div>
        </div>
    );
}
