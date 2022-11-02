/*
    Explanation:
    1 - Simple Card with Props
    2 - I built up this component with styled-components css, just another way that I'd like to show I also like
    3 - Honestly, I tried to get 'shortDesc' from the request, but I didn't find. Then, I built up my own shortDesc
        from 'jobDescription'
*/

import React, { FC } from 'react'
import { Li } from './styles'

interface props {
    jobTitle: string
    companyName: string
    jobDescription: string
    postedDate: string
}

const Card: FC<props> = ({
    jobTitle,
    companyName,
    jobDescription,
    postedDate
}) => {
    const removeHTML = jobDescription.replace(/<[^>]*>?/gm, '')
    const shortDesc = removeHTML.substring(0, 228)

    return (
        <Li>
            <header>
                <h3>{jobTitle}</h3>
                <span>{postedDate}</span>
            </header>
            <h4>{companyName}</h4>
            <p>{shortDesc}...</p>
        </Li>
    )
}

export default Card
