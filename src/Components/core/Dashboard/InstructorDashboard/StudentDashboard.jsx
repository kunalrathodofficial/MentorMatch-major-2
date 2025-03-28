import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StudentDashboardChart from './StudentDashboardChart';

const StudentDashboard = () => {
    const { user } = useSelector(state => state.profile);
    const [currentChart, setCurrentChart] = useState('progress');

    return (
        <div className='mx-auto w-11/12 max-w-[1000px] py-10'>
            <div className='space-y-2'>
                <h1 className='text-2xl font-bold text-richblack-5'>Hi {user?.firstName} 👋</h1>
                <p className='font-medium text-richblack-200'>Track your learning progress</p>
            </div>
            <div className='my-4 flex flex-col-reverse gap-3 md:flex-row md:h-[450px] md:space-x-4'>
                {/* Analytics Section */}
                <div className='flex flex-col flex-1 rounded-md bg-richblack-800 p-6'>
                    <div className='flex items-center justify-between'>
                        <p className='text-lg font-bold text-richblack-5'>Visualize</p>
                        <div className='flex items-center space-x-2'>
                            <button onClick={() => setCurrentChart('progress')} className={`px-3 py-2 rounded-md ${currentChart === 'progress' ? 'bg-yellow-500 text-richblack-900' : 'bg-richblack-700 text-white'}`}>Progress</button>
                            <button onClick={() => setCurrentChart('completion')} className={`px-3 py-2 rounded-md ${currentChart === 'completion' ? 'bg-yellow-500 text-richblack-900' : 'bg-richblack-700 text-white'}`}>Completion</button>
                            <button onClick={() => setCurrentChart('bar')} className={`px-3 py-2 rounded-md ${currentChart === 'bar' ? 'bg-yellow-500 text-richblack-900' : 'bg-richblack-700 text-white'}`}>Bar</button>
                            <button onClick={() => setCurrentChart('line')} className={`px-3 py-2 rounded-md ${currentChart === 'line' ? 'bg-yellow-500 text-richblack-900' : 'bg-richblack-700 text-white'}`}>Line</button>
                        </div>
                    </div>
                    <StudentDashboardChart currentChart={currentChart} />
                </div>

                {/* Statistics Section */}
                <div className='flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6'>
                    <p className='text-lg font-bold text-richblack-5'>Statistics</p>
                    <div className='mt-4 space-y-4'>
                        <div>
                            <p className='text-lg text-richblack-200'>Total Courses</p>
                            <p className='text-3xl font-semibold text-richblack-50'>2</p>
                        </div>
                        <div>
                            <p className='text-lg text-richblack-200'>Completed Courses</p>
                            <p className='text-3xl font-semibold text-richblack-50'>1</p>
                        </div>
                        <div>
                            <p className='text-lg text-richblack-200'>Time Spent</p>
                            <p className='text-3xl font-semibold text-richblack-50'>55 hrs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
