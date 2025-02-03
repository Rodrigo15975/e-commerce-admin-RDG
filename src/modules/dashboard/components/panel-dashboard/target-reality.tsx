"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    target: 400,
    reality: 240,
  },
  {
    name: "Feb",
    target: 300,
    reality: 139,
  },
  {
    name: "Mar",
    target: 200,
    reality: 980,
  },
  {
    name: "Apr",
    target: 278,
    reality: 390,
  },
  {
    name: "May",
    target: 189,
    reality: 480,
  },
  {
    name: "Jun",
    target: 239,
    reality: 380,
  },
]

export function TargetReality() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Bar dataKey="target" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="reality" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

