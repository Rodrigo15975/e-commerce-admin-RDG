'use client'

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  {
    name: 'Jan',
    loyal: 400,
    new: 240,
  },
  {
    name: 'Feb',
    loyal: 300,
    new: 139,
  },
  {
    name: 'Mar',
    loyal: 200,
    new: 980,
  },
  {
    name: 'Apr',
    loyal: 278,
    new: 390,
  },
  {
    name: 'May',
    loyal: 189,
    new: 480,
  },
  {
    name: 'Jun',
    loyal: 239,
    new: 380,
  },
  {
    name: 'Jul',
    loyal: 349,
    new: 430,
  },
]

export function VisitorInsights() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="loyal"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <Line type="monotone" dataKey="new" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}
