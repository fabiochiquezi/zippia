/*
    Explanation:
    Simple select in style of a button to to make the filter
*/

import React from 'react'
import { Job } from 'types/jobs'

interface props {
    jobs: Job[]
    value: string
    setState: React.Dispatch<React.SetStateAction<string>>
}

const SelectCompanies: React.FC<props> = ({ jobs, value, setState }) => {
    // Here I got the list of jobs and from that I extracted the name of the companies
    const companies = jobs.reduce((arr: string[], item: Job) => {
        const companyName = item.companyName
        const isEqual = (el: any): boolean => el.companyName === companyName
        const existAtArr = arr.some(isEqual)
        if (!existAtArr) arr.push(item.companyName)
        return arr
    }, [])

    return (
        <select
            value={value}
            onChange={e => {
                setState(e.currentTarget.value)
            }}
            className={`px-2 max-w-[102px] rounded-md ${
                value === 'All'
                    ? 'bg-white text-gray-600 border-2 border-gray-200'
                    : 'bg-indigo-400 border-2 border-indigo-400 text-white'
            }`}
        >
            <option value="All">All</option>
            {companies.map((el, index) => (
                <option key={index} value={el}>
                    {el}
                </option>
            ))}
        </select>
    )
}

export { SelectCompanies }
