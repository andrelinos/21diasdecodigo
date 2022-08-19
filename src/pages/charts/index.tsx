import Chart from './components/Chart';
import AreaChart2 from './components/Chart2';
import AreaChart3 from './components/Chart3';
import AreaChart4 from './components/Chart4';

export default function BasicCharts() {
    return (
        <div className="flex flex-col w-full min-h-screen gap-4 bg-zinc-900 px-8 py-16">
            <h1 className="font-bold text-4xl text-center text-white py-8">
                Gráficos usando o ApexCharts no ReactJS
            </h1>
            <div className="flex gap-6 flex-wrap justify-center">
                {/* Com dados diferentes no formato */}
                <Chart type="area" />
                <Chart type="bar" />
                <Chart type="line" />

                <Chart type="heatmap" />

                <Chart type="radar" />

                {/* Com dados diferentes no formato */}
                <AreaChart2 type="pie" />
                <AreaChart2 type="donut" />
                <AreaChart2 type="radialBar" />
                <AreaChart2 type="polarArea" />

                {/* Com dados diferentes no formato */}
                <AreaChart3 type="scatter" />

                {/* Com dados diferentes no formato */}
                <AreaChart4 type="candlestick" />
            </div>
        </div>
    );
}
