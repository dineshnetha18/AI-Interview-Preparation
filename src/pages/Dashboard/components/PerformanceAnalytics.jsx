import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const skillsData = [
    {name: 'week-1', score: 60},
    {name: 'week-2', score: 70},
    {name: 'week-3', score: 75},
    {name: 'week-4', score: 80},
    {name: 'week-5', score: 85},
    {name: 'week-6', score: 90},
];

const codingData = [
    {name: 'week-1', score: 50},
    {name: 'week-2', score: 60},
    {name: 'week-3', score: 65},
    {name: 'week-4', score: 70},
    {name: 'week-5', score: 80},
    {name: 'week-6', score: 85},
];

const skillsBreakdown = [
  { name: 'Communication', value: 30, color: 'hsl(142, 76%, 36%)' },
  { name: 'Problem Solving', value: 25, color: 'hsl(239, 84%, 67%)' },
  { name: 'Leadership', value: 20, color: 'hsl(38, 92%, 50%)' },
  { name: 'Technical Knowledge', value: 25, color: 'hsl(0, 84%, 60%)' },
];

const PerformanceAnalytics = ({ className }) => {
  return (
    <div className={`flex flex-col h-full justify-between mt-4 hover:shadow-[0_0_20px_#5866F24D] text-white bg-[#6B6BFA]/5 border border-[#6B6BFA]/15 rounded-xl p-6 ${className}`}>
        <div className='w-full mb-2'>
        <h2 className='text-[1.2rem] font-bold'>Performance Analytics</h2>
        <p className='text-white/70 text-[0.9rem] py-1.5'>Track your interview performance over time</p>
        </div>
        <div className='w-full flex flex-col gap-y-5 items-center h-auto'>
        <div className='w-full py-3 flex justify-between space-x-8'>
            <div className='w-[50%]'>
                <h3 className='text-[1.1rem] font-bold'>Skills Q&A Progress</h3>
                <div className='h-64 mt-5'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <LineChart data={skillsData}>
                            <CartesianGrid strokeDasharray={'3 3'} stroke='#6B6BFA4D' />
                                <XAxis 
                                dataKey='name'
                                stroke='#FFFFFFB2'
                                fontSize={12}
                                />
                                <YAxis
                                stroke='#FFFFFFB2'
                                fontSize={12}
                                />
                                <Tooltip 
                                contentStyle={{
                                    backgroundColor: '#0A0E26',
                                    border: '1px solid #6B6BFA',
                                    borderRadius: '8px',
                                    color: '#FFFFFFB2'
                                }}
                                />
                                <Line 
                                type='monotone'
                                dataKey='score'
                                stroke='#6B6BFA'
                                strokeWidth={3}
                                dot={{r: 6, fill: '#6B6BFA', strokeWidth: 2}}
                                activeDot={{r: 8, fill: '#6B6BFA', strokeWidth: 2}}
                                />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='w-[50%]'>
                <h3 className='text-[1.1rem] font-bold'>Coding Challenge Progress</h3>
                <div className = 'h-64 mt-5'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <LineChart data={codingData}>
                            <CartesianGrid strokeDasharray={'3 3'} stroke = '#33CCFF4D' />
                            <XAxis
                            dataKey= 'name'
                            stroke='#FFFFFFB2'
                            fontSize={12}
                            />
                            <YAxis 
                            stroke='#FFFFFFB2'
                            fontSize={12}
                            />
                            <Tooltip 
                            contentStyle={{
                                backgroundColor: '#0A0E26',
                                border: '1px solid #33CCFF',
                                borderRadius: '8px',
                                color: '#FFFFFFB2'
                            }}
                            />
                            <Line
                            type='monotone'
                            dataKey='score'
                            stroke='#33CCFF'
                            strokeWidth={3}
                            dot={{r: 6, fill: '#33CCFF', strokeWidth: 2}}
                            activeDot={{r: 8, fill: '#33CCFF', strokeWidth: 2}}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
        <div className='w-full py-3'>
            <h1 className='text-[1.2rem] font-bold'>Skills Assessment Breakdown</h1>
            <div className='h-64 mt-4 w-full'>
                <ResponsiveContainer width='100%' height='100%'>
                    <PieChart>
                        <Pie
                        data={skillsBreakdown}
                        cx='50%'
                        cy='50%'
                        innerRadius={50}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey='value'
                        >
                            {
                                skillsBreakdown.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color}/>
                                ))
                            }
                        </Pie>
                        <Tooltip
                        contentStyle={{
                            backgroundColor: '#0A0E26',
                            border: '1px solid #6B6BFA',
                            borderRadius: '8px',
                            fontSize: '14px',
                        }}
                        itemStyle={{ color: '#FFFFFFB2' }}
                        />
                        <Legend
                        iconType='circle'
                        layout='vertical'
                        verticalAlign='middle'
                        align='right'
                        wrapperStyle={{ fontSize: '14px', lineHeight:'30px'}}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PerformanceAnalytics;