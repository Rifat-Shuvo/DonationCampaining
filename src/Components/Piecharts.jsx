import React from 'react';
import { Cell, Label, Pie, PieChart } from 'recharts';

const Piecharts = () => {

    const donatedItems = JSON.parse(localStorage.getItem('donated'))
    let donated = donatedItems.length
    let totalitems = 12
    let remainingItems = totalitems - donated
    //console.log(donated);
    const data = [
        { name: "totalDonation", value: donated },
        { name: "RemainigDonation", value: remainingItems }
    ]
    const colors = ["#F34E15", "#BAF315"]

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    }
    return (
        <div className=''>
            <div className='font-bold text-2xl flex items-center justify-center h-[60vh]'>
            <PieChart width={400} height={400}>
                <Pie data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
            label={renderCustomizedLabel}
                    innerRadius={0}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]}></Cell>
                    ))}

                </Pie>
            </PieChart>
            </div>
            
                <div className='flex justify-center'>
                <p className='mr-3 text-xl'>Your Donation</p>
                <div className='w-14 h-3 bg-[#F34E15] mt-3'></div>
                </div>

                <div className='flex justify-center mt-5'>
                <p className='mr-3 text-xl'>Total Donation</p> 
                <div className='w-14 h-3 bg-[#BAF315] mt-3'></div>
                </div>
            
        </div>
    );
};

export default Piecharts;