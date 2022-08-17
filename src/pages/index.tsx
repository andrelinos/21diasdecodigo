import {
    ArrowArcRight,
    ArrowFatLinesRight,
    CheckCircle,
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
                    <button>
                        <InstagramLogo size={32} />
                    </button>
                    <button>
                        <LinkedinLogo size={32} />
                    </button>
                    <button>
                        <RocketLaunch size={32} />
                    </button>
                    <button>
                        <YoutubeLogo size={32} />
                    </button>
                    <button>
                        <YoutubeLogo size={32} />
                    </button>
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
