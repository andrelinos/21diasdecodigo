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
    chart: {
        id: 'basic-chart',
    },
    xaxis: {
        categories: [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez',
        ],
    },
    labels: ['A', 'B', 'C', 'D', 'E'],
    series: [
        {
            name: 'series-1',
            data: [30, 40, 45, 50, 49],
        },
        {
            name: 'series-2',
            data: [10, 20, 15, 20, 29],
        },
        {
            name: 'series-3',
            data: [50, 60, 55, 60, 69],
        },
    ],
};

export default function AreaChart({ type }: Props) {
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
