import React from 'react'

interface ChartsHeaderProp {
  category?: string
  title?: string
};

export function ChartsHeader({ category, title } : ChartsHeaderProp) {
  return (
    <div className=" mb-10">
    <div>
      <p className="text-lg text-gray-400">Chart</p>
      <p className="text-3xl font-extrabold tracking-tight text-gray-200">{category}</p>
    </div>
    <p className="text-center text-gray-200 text-xl mb-2 mt-3">{title}</p>
  </div>
  )
}
