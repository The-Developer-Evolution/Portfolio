import React from 'react'
import { Metadata } from 'next'
import { FaSpinner } from 'react-icons/fa6'

export const metadata: Metadata = {
    title: "Loading...",
    description: "Please wait while the content is loading.",
}   
export default function Loading() {
  return (
    <main className="overflow-hidden flex flex-col gap-24">
        <h1 className="text-4xl font-bold text-center mt-20">Loading...</h1>
        <div className="flex justify-center mt-4">
            <FaSpinner className="animate-spin text-4xl" />
        </div>
        <p className="text-center mt-4">Please wait while the content is loading.</p>
    </main>
  )
}
