/*
    Explanation:
    All the types used
*/

// Once I made the request I used QuickType (https://quicktype.io/typescript) to get the types of the data
export interface Salary {
    average: number
    high: number
    low: number
}

export interface Job {
    OBJcity: string
    OBJcompanyID: number
    OBJcompanyDisplay: string
    OBJcountry: string
    OBJdesc: string
    OBJindustry: string
    OBJjobTags: string[]
    OBJpostingDate: Date
    OBJstate: string
    OBJstateCode: string
    OBJtitle: string
    OBJtitleDisplay: string
    OBJurl: string
    OBJzipcode: string
    actionDateSince: string
    benefits: any[]
    bestCompaniesPageURLAtJobLocation: string
    careerMainPageURL: string
    companyID: number
    companyInitial: string
    companyLogo: string
    companyName: string
    companyZippiaOverallScore: number
    contactEmails: any[]
    contactEmailsFlag: boolean
    cpc: number
    easyApplyFlag: boolean
    estimatedSalary: string
    formattedOriginalCompanyName: string
    iconClass: string
    iconSVG: string
    isSpammyCompany: boolean
    jobDescription: string
    jobId: string
    jobLevels: string[]
    jobMajor: boolean
    jobTags: string[]
    jobTitle: string
    jobURL: string
    listingHash: string
    location: string
    nearbyTo0: string[]
    originalCPC: string
    partnerName: string
    postedDate: string
    postingDate: Date
    preferredDegrees: any[]
    requiredDegree: string
    salary: Salary
    salaryPeriod: string
    showNewJobBedge: boolean
    skillsets: string[]
    snippets: string[]
    socCodeName: boolean
    socode: string
    source: string
    sponsorFlag: boolean
    sponsoredDlp: boolean
    templateName: string
    titleID: string
    unifiedZippiaSalary: number
    url: string
}

export interface Jobs {
    remainingJobs: number
    totalJobs: number
    jobs: Job[]
}

// A simple response from the server to the Front
export interface Response<T> {
    ok: boolean
    data: T | null
}
