import React, { useState, useEffect } from "react"

const DaysLeftCalculator = ({
  date,
  title,
  finishTitle,
  classname,
}: {
  date: any
  title: any
  finishTitle: any
  classname: any
}) => {
  const [daysLeft, setDaysLeft] = useState<number | null>(null)

  useEffect(() => {
    // Function to calculate the number of days between two dates
    const calculateDaysLeft = (startDate: any, endDate: any) => {
      const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
      const diffDays = Math.round((startDate - endDate + oneDay) / oneDay)
      return diffDays
    }

    // Start date
    const startDate = new Date(date)

    // Current date
    const currentDate = new Date()

    // Calculate days left
    const daysLeft = calculateDaysLeft(startDate, currentDate)

    // Set the state
    setDaysLeft(daysLeft)
  }, [date])

  return (
    <span className={`daysleft ${classname}`}>
      {daysLeft !== null ? (
        daysLeft > 0 ? (
          <p className="left">
            {title} : {daysLeft} days
          </p>
        ) : daysLeft === 0 ? (
          <p className="today">{finishTitle} Today</p>
        ) : (
          <p className="finish">
            {finishTitle} {Math.abs(daysLeft)} days ago
          </p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </span>
  )
}

export default DaysLeftCalculator
