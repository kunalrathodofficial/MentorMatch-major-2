// import React from 'react'
// import { Pie,Doughnut } from 'react-chartjs-2';
// import { useState } from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// const DashboardChart = ({details,currentChart}) => {
//     ChartJS.register(ArcElement, Tooltip, Legend);


//     const randomColor = (num) => {
//         const colors = []
//         for(let i=0; i<num; i++) {
//             colors.push(`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`)
//         }
//         return colors;
//     }

//     const StudentsData = {
//         labels: details?.map(course => course?.courseName),
//         datasets: [
//             {
//                 label: '# of Students',
//                 data: details?.map(course => course?.totalStudents),
//                 backgroundColor: randomColor(details?.length),
//                 borderColor: randomColor(),
//                 borderWidth: 1,
//             },
//         ],
//     };

//     const RevenueData = {
//         labels: details?.map(course => course?.courseName),
//         datasets: [
//             {
//                 label: '# of ₹',
//                 data: details?.map(course => course?.totalRevenue),
//                 backgroundColor: randomColor(details?.length),
//                 borderColor: randomColor(),
//                 borderWidth: 1,
//             },
//         ],
//     };


//   return (
//     <div>
//             <div className='mt-8 '> 
//             {/* change label position extreme right and increase gap and change chart size */}
//                 {currentChart === 'revenue' ? <Pie data={RevenueData}
//                 options={{
//                     plugins: {
//                         legend: {
//                             position: 'right',
//                             labels: {
//                                 boxWidth: 10,
//                                 boxHeight: 10,
//                                 padding: 20,
//                                 font: {
//                                     size: 12,
//                                 },
//                             },
//                         },
//                     },
//                     aspectRatio: 2,
//                 }
//             }

//                  /> : <Pie data={StudentsData} />}
//                 </div>

//     </div>
//   )
// }

// export default DashboardChart

import React from 'react'
import { Pie, Doughnut, Bar, Line } from 'react-chartjs-2';
import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const DashboardChart = ({ details, currentChart }) => {
    
    const randomColor = (num) => {
        return Array.from({ length: num }, () => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.8)`);
    };

    const chartData = (label, data) => ({
        labels: details?.map(course => course?.courseName),
        datasets: [{
            label: label,
            data: data,
            backgroundColor: randomColor(details?.length),
            borderColor: randomColor(details?.length),
            borderWidth: 1,
        }]
    });

    const totalRevenueData = chartData('Revenue (₹)', details?.map(course => course?.totalRevenue));
    const totalStudentsData = chartData('Students', details?.map(course => course?.totalStudents));

    return (
        <div className='mt-8 w-full flex flex-col items-center'>
            <div className="w-[80%] h-[300px] flex justify-center">
                {currentChart === 'revenue' && <Pie data={totalRevenueData} options={{ plugins: { legend: { position: 'right' } } }} />}
                {currentChart === 'students' && <Doughnut data={totalStudentsData} options={{ plugins: { legend: { position: 'right' } } }} />}
                {currentChart === 'bar' && <Bar data={totalRevenueData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />}
                {currentChart === 'line' && <Line data={totalStudentsData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />}
            </div>
        </div>
    );
};

export default DashboardChart;
