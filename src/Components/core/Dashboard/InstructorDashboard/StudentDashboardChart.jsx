// StudentDashboardChart.jsx
import React, { useState } from 'react';
import { Pie, Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';

const StudentDashboardChart = ({ currentChart }) => {
    ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

    const randomColor = (num) => {
        return Array.from({ length: num }, () => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
    };

    // Hardcoded data
    const details = [
        {
            courseName: "React for Beginners",
            progressPercentage: 50,
            timeSpent: 20,
        },
        {
            courseName: "Node.js Essentials",
            progressPercentage: 80,
            timeSpent: 35,
        },
    ];

    const ProgressData = {
        labels: details.map(course => course.courseName),
        datasets: [
            {
                label: 'Course Progress (%)',
                data: details.map(course => course.progressPercentage),
                backgroundColor: randomColor(details.length),
                borderColor: randomColor(details.length),
                borderWidth: 1,
            },
        ],
    };

    const CompletionData = {
        labels: ["Completed", "Incomplete"],
        datasets: [
            {
                label: 'Courses',
                data: [1, 1],
                backgroundColor: randomColor(2),
                borderColor: randomColor(2),
                borderWidth: 1,
            },
        ],
    };

    const TimeSpentData = {
        labels: details.map(course => course.courseName),
        datasets: [
            {
                label: 'Time Spent (hrs)',
                data: details.map(course => course.timeSpent),
                backgroundColor: randomColor(details.length),
            },
        ],
    };

    return (
        <div className='mt-8 space-y-8'>
            {currentChart === 'progress' && <Doughnut data={ProgressData} options={{ plugins: { legend: { position: 'right' } }, aspectRatio: 2 }} />}
            {currentChart === 'completion' && <Pie data={CompletionData} options={{ plugins: { legend: { position: 'right' } }, aspectRatio: 2 }} />}
            {currentChart === 'bar' && <Bar data={TimeSpentData} options={{ plugins: { legend: { position: 'right' } }, aspectRatio: 2 }} />}
            {currentChart === 'line' && <Line data={TimeSpentData} options={{ plugins: { legend: { position: 'right' } }, aspectRatio: 2 }} />}
        </div>
    );
};

export default StudentDashboardChart;