/*
    Explanation:
    Simple function that do a request to zippia api and return a response
*/
import axios from 'axios'
import { Jobs } from 'types/jobs'

export async function getJobs(): Promise<Jobs> {
    const payload = {
        companySkills: true,
        dismissedListingHashes: [],
        fetchJobDesc: true,
        jobTitle: 'Business Analyst',
        locations: [],
        numJobs: 20,
        previousListingHashes: []
    }

    const get = await axios({
        url: 'https://www.zippia.com/api/jobs/',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: payload
    })
    return get.data
}
