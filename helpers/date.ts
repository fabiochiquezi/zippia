/*
    Explanation:
    As I needed to build the filter with Data, I also built these helper functions to make the math easier
*/

const dayMath = (day: number): number => day * 24 * 60 * 60 * 1000
const getDateAgoByDay = (day: number): Date =>
    new Date(Date.now() - dayMath(day))
const sevenDaysAgo: Date = getDateAgoByDay(7)

function isPostedLast7Days(dayPosted: string): boolean {
    const numberDay = dayPosted.split('d')[0]
    const parseDayNumber = parseInt(numberDay)
    const datePosted = getDateAgoByDay(parseDayNumber)
    return datePosted >= sevenDaysAgo
}

export { isPostedLast7Days }
