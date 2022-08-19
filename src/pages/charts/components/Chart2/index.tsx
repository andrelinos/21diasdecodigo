import Chart from 'react-apexcharts';
import { Container } from '../Container';

type Props = {
    type?:
        | 'area'
        | 'line'
        | 'bar'
        | 'histogram'
        | 'pie'
        | 'donut'
        | 'radialBar'
        | 'scatter'
        | 'bubble'
        | 'heatmap'
        | 'treemap'
        | 'boxPlot'
        | 'candlestick'
        | 'radar'
        | 'polarArea'
        | 'rangeBar'
        | undefined;
};

const options = {
    series: [44, 55, 13, 43, 22],
    options: {
        chart: {
            width: 380,
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    },
};

export default function AreaChart2({ type }: Props) {
    return (
        <Container>
            <span
                className="text-white font-bold text-3xl text-center
                    bg-zinc-800 py-8 border border-zinc-900"
            >
                {type}
            </span>
            <div className="p-8">
                <Chart
                    options={options}
                    series={options.series}
                    type={type}
                    width={500}
                    height={500}
                />
            </div>
        </Container>
    );
}
