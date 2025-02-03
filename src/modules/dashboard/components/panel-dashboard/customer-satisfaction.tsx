"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: 400,
  },
  {
    name: "Feb",
    total: 300,
  },
  {
    name: "Mar",
    total: 200,
  },
  {
    name: "Apr",
    total: 278,
  },
  {
    name: "May",
    total: 189,
  },
  {
    name: "Jun",
    total: 239,
  },
  {
    name: "Jul",
    total: 349,
  },
]

export function CustomerSatisfaction() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip />
        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

