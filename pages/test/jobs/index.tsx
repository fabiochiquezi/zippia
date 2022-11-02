// Only page of the project
// I configured in next.config to make it Home

import Head from 'next/head'
import Card from 'components/Card'
import { getJobs } from 'api/zippiaAPI'
import { Error } from 'components/Error'
import { GetServerSideProps } from 'next'
import { Job, Jobs, Response } from 'types/jobs'
import { isPostedLast7Days } from 'helpers/date'
import { Button } from 'components/Button/Simple'
import React, { FC, useEffect, useState } from 'react'
import { SelectCompanies } from 'components/Select/Companies'

// Type that comes from the server
interface Data {
    data: Response<Jobs>
}

const App: FC<Data> = ({ data }) => {
    // got some vars from 'data'
    const { ok, data: res } = data
    const jobs = res?.jobs as Job[]

    // I'm using three different states
    // [list] -> set up an array to list the jobs
    const [list, setList] = useState<Job[]>(jobs)
    // [dayFilter] -> to mark whether the filter is on or off and activate or not the button w/ class
    const [daysFilter, setDaysFilter] = useState(false)
    // [companiesFilter] -> to mark whether the filter is on or off, and to pass to select the value
    const [companiesFilter, setCompaniesFilter] = useState('All')

    // useEffect will follow if something went different with the filters and in case, rebuild the 'list'
    useEffect(() => {
        // 0 - Functions to get the list after filtering it
        // Function to filter by company name
        function companyFilterFn(list: Job[]): Job[] {
            const isNameEqual = (item: Job): boolean =>
                item.companyName === companiesFilter
            const newList = list.filter(isNameEqual)
            return newList
        }
        // Function to filter by the last 7 days
        function dayFilterFn(list: Job[]): Job[] {
            const newList = list.filter(el => isPostedLast7Days(el.postedDate))
            return newList
        }

        // 1 - set listJobs to get jobs as a 'let',
        let listJobs = jobs
        // 2 - define the conditions to apply the filters (in this case only apply if the value is not the default of the buttons)
        const isDaysFilterOn = daysFilter
        const isCompanyFilterOn = companiesFilter !== 'All'
        // 3 - apply filters on a queue determined by conditions
        if (isDaysFilterOn) listJobs = dayFilterFn(listJobs)
        if (isCompanyFilterOn) listJobs = companyFilterFn(listJobs)
        // 4 - set a new list with filters or not
        setList(listJobs)
    }, [daysFilter, companiesFilter, jobs])

    // In fail of request return an error component to the user
    if (!ok) return <Error />
    return (
        <div>
            <Head>
                <title>Zippia | 2nd Test</title>
                <meta name="description" content="Giving the best I can" />
                <link
                    rel="shortcut icon"
                    href="../favicon.ico"
                    type="image/x-icon"
                />
            </Head>

            <main>
                <header className="flex justify-center gap-4 mt-8">
                    <Button
                        title="Last 7 days"
                        state={daysFilter}
                        onClick={() => setDaysFilter(prev => !prev)}
                    />
                    <SelectCompanies
                        setState={setCompaniesFilter}
                        value={companiesFilter}
                        jobs={jobs}
                    />
                </header>
                <ul className="mx-auto px-2 max-w-[480px] my-[28px]">
                    {/* if no list send the user a message  */}
                    {!list.length && (
                        <p className="text-center text-lg mt-16">No Jobs ;(</p>
                    )}
                    {/* map and build the list with cards */}
                    {list.map((el, index) => {
                        const {
                            jobTitle,
                            companyName,
                            jobDescription,
                            postedDate
                        } = el
                        // I have set a limit on the frontend to ensure this rule is not broken
                        const limit = 10
                        const isLimit = index > limit

                        if (isLimit) return null
                        return (
                            <div
                                className={index < limit ? 'mb-10' : ''}
                                key={index}
                            >
                                <Card
                                    jobTitle={jobTitle}
                                    companyName={companyName}
                                    jobDescription={jobDescription}
                                    postedDate={postedDate}
                                />
                            </div>
                        )
                    })}
                </ul>
            </main>
        </div>
    )
}

// Get the data with SSR
export const getServerSideProps: GetServerSideProps = async context => {
    try {
        const data = await getJobs()
        return {
            props: {
                data: { ok: true, data }
            }
        }
    } catch (e: unknown) {
        return {
            props: {
                data: { ok: false, data: null }
            }
        }
    }
}

export default App
