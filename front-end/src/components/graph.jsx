import { Line } from 'react-chartjs-2';

export default function Graph({ evalsData, scoreData }){

    const data = {
        labels: evalsData.map((item, index) => index + 1),
        datasets: [
            {
                label: 'Graph',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: scoreData, 
      },
    ],
  };
    return( 
        <div>
            <Line data={data} options={options} />
        </div>
    )
}

