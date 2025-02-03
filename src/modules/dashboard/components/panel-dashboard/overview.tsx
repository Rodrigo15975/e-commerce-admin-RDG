"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Monday",
    online: 400,
    offline: 240,
  },
  {
    name: "Tuesday",
    online: 300,
    offline: 139,
  },
  {
    name: "Wednesday",
    online: 200,
    offline: 980,
  },
  {
    name: "Thursday",
    online: 278,
    offline: 390,
  },
  {
    name: "Friday",
    online: 189,
    offline: 480,
  },
  {
    name: "Saturday",
    online: 239,
    offline: 380,
  },
  {
    name: "Sunday",
    online: 349,
    offline: 430,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="offline" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="online" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

