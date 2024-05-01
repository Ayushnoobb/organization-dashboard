import React, { useState, useEffect } from "react"

interface DateCountdownProps {
  startDate: string
  endDate: string
}

const DateCountdown: React.FC<DateCountdownProps> = ({
  startDate,
  endDate,
}) => {
  const [daysToStart, setDaysToStart] = useState<number | null>(null)
  const [daysToEnd, setDaysToEnd] = useState<number | null>(null)
  const [daysAfterEnd, setDaysAfterEnd] = useState<number | null>(null)

  useEffect(() => {
    const today = new Date()
    const start = new Date(startDate)
    const end = new Date(endDate)

    const diffStart = Math.ceil(
      (start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    )
    const diffEnd = Math.ceil(
      (end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    )
    const diffAfterEnd = Math.ceil(
      (today.getTime() - end.getTime()) / (1000 * 60 * 60 * 24),
    )

    if (diffStart > 0) {
      setDaysToStart(diffStart)
      setDaysToEnd(null)
      setDaysAfterEnd(null)
    } else if (diffEnd > 0) {
      setDaysToStart(null)
      setDaysToEnd(diffEnd)
      setDaysAfterEnd(null)
    } else {
      setDaysToStart(null)
      setDaysToEnd(null)
      setDaysAfterEnd(diffAfterEnd)
    }
  }, [startDate, endDate])

  return (
    <div>
      {daysToStart !== null && <p>Starts on: {daysToStart} days</p>}
      {daysToEnd !== null && (
        <p style={{ color: "green" }}>Ends on: {daysToEnd} days</p>
      )}
      {daysAfterEnd !== null && (
        <p style={{ color: "red" }}>Ended: {daysAfterEnd} days ago</p>
      )}
    </div>
  )
}

export default DateCountdown
