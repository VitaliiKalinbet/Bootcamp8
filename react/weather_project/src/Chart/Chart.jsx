import React from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import styles from './Chart.css';
import PropTypes from 'prop-types';

const Chart = ({ arrOfAverageHumidity, arrOfAverageTemp, arrOfWindSpeed, arrOfPressure }) => {

    let myChart = {
        type:'line',
        labels: [moment().format('ll'),moment().add( 1,'d').format('ll'),moment().add( 2,'d').format('ll'),moment().add( 3,'d').format('ll'),moment().add( 4,'d').format('ll')],

        datasets: [
            {
                label:'Average temperature,℃',
                data: arrOfAverageTemp,
                fill:false,
                backgroundColor:'red',
                borderColor: 'red',
                pointStyle: 'circle',
                pointRadius: 6,
                pointHoverRadius: 10,
                // yAxisID:'first-y-axis'
             },

            {
                label:'Average humidity, %',
                data: arrOfAverageHumidity,
                backgroundColor:'blue',
                borderColor: 'blue',
                fill:false,
                hidden:true,
                pointStyle: 'circle',
                pointRadius: 6,
                pointHoverRadius: 10,
                //  yAxisID: 'second-y-axis',
            },

            {
               label:'Average wind speed, m/s',
               data: arrOfWindSpeed,
               backgroundColor:'orange',
               borderColor: 'orange',
               fill:false,
               hidden:true,pointStyle: 'circle',
               pointRadius: 6,
               pointHoverRadius: 10,
            //    yAxisID: 'third-y-axis',
           },

           {   hidden: true,
               label:'Average atmosphere pressure, mm',
               data: arrOfPressure,
               backgroundColor:'green',
               borderColor: 'green',
               fill:false,
               pointStyle: 'circle',
               pointRadius: 6,
               pointHoverRadius: 10,
            //    yAxisID: 'fourth-y-axis',
           }
        ],
    }

  let option = {

       title: {
           display: true,
           text: 'Weather chart for five days',
          },

       scales: { yAxes: [{
                    scaleLabel: {
                    display: true,
                    borderColor: 'white',
                    labelString: 'Value of indicators',
                    fontSize: 18
                            },
                        }
                        ],

                xAxes: [{
                    scaleLabel: {
                    display: true,
                    labelString: 'Days',
                    fontSize: 18,
                }
                }]
        },
         }

   return (
       <div className={styles.chart}>
           <Line data = {myChart}  options= {option}/>
       </div>
   );
};

Chart.propTypes = {
    arrOfAverageHumidity: PropTypes.array.isRequired,
    arrOfAverageTemp: PropTypes.array.isRequired,
    arrOfWindSpeed: PropTypes.array.isRequired,
    arrOfPressure: PropTypes.array.isRequired,
}

export default Chart;