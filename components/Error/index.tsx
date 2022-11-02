/*
    Explanation:
    Simple component to display error in case and enable for user to reload.
*/
import { useRouter } from 'next/router'
import React from 'react'

const Error: React.FC = () => {
    const router = useRouter()
    return (
        <div className="absolute left-[50%] top-[50%] -ml-[150px] -mt-[62px] max-w-[300px] text-center">
            <p className="text-red-400 text-3xl mb-6">
                Sorry, but something went wrong.
            </p>
            <a
                href=""
                onClick={e => {
                    e.preventDefault()
                    router.reload()
                }}
                className="text-blue-400 text-lg font-bold border-blue-400 border-2 p-2 anim-button"
            >
                Try again?
            </a>
        </div>
    )
}

export { Error }
