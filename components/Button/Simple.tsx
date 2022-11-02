/*
    Explanation:
    Simple button w/ props and css by Tailwind
*/
import React, { FC } from 'react'

interface props {
    title: string
    state: boolean
    onClick: () => void
}

const Button: FC<props> = ({ title, state, onClick }) => {
    return (
        <button
            className={`p-2 bg-indigo-400 text-white rounded-md anim-button ${
                state
                    ? 'bg-indigo-400 border-2 border-indigo-400'
                    : 'bg-white text-gray-600 border-2 border-gray-200'
            }`}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export { Button }
