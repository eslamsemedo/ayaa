import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { MainNav } from "../components/main-nav"
import { UserNav } from "../components/user-nav"
import { useState } from "react"
// import { Button } from "@/components/ui/button"
import { Button } from "../components/ui/button";

// Sample academic calendar events
const academicEvents = [
  { date: "2023-05-01", title: "Summer Registration Begins", type: "registration" },
  { date: "2023-05-10", title: "Spring Semester Final Exams Begin", type: "exam" },
  { date: "2023-05-15", title: "Spring Semester Ends", type: "semester" },
  { date: "2023-05-20", title: "Spring Commencement", type: "event" },
  { date: "2023-06-01", title: "Summer Session Begins", type: "semester" },
  { date: "2023-06-15", title: "Last Day to Add/Drop Summer Courses", type: "deadline" },
  { date: "2023-07-04", title: "Independence Day (University Closed)", type: "holiday" },
  { date: "2023-07-15", title: "Summer Midterm Exams", type: "exam" },
  { date: "2023-08-10", title: "Summer Session Final Exams", type: "exam" },
  { date: "2023-08-15", title: "Summer Session Ends", type: "semester" },
  { date: "2023-08-25", title: "Fall Faculty Orientation", type: "event" },
  { date: "2023-09-01", title: "Fall Semester Begins", type: "semester" },
  { date: "2023-09-15", title: "Last Day to Add/Drop Fall Courses", type: "deadline" },
  { date: "2023-10-10", title: "Fall Break Begins", type: "holiday" },
  { date: "2023-10-15", title: "Classes Resume", type: "semester" },
  { date: "2023-10-20", title: "Midterm Grades Due", type: "deadline" },
  { date: "2023-11-01", title: "Spring Registration Begins", type: "registration" },
  { date: "2023-11-22", title: "Thanksgiving Break Begins", type: "holiday" },
  { date: "2023-11-27", title: "Classes Resume", type: "semester" },
  { date: "2023-12-10", title: "Fall Semester Final Exams Begin", type: "exam" },
  { date: "2023-12-15", title: "Fall Semester Ends", type: "semester" },
  { date: "2023-12-20", title: "Final Grades Due", type: "deadline" },
  { date: "2023-12-25", title: "Winter Break Begins (University Closed)", type: "holiday" },
]

// Helper function to get days in month
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

// Helper function to get first day of month (0 = Sunday, 1 = Monday, etc.)
const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}

export default function AcademicCalendarPage() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth)

  // Create calendar grid
  const calendarDays = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  // Filter events for current month
  const currentMonthEvents = academicEvents.filter((event) => {
    const eventDate = new Date(event.date)
    return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear
  })

  // Get event for a specific day
  const getEventForDay = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return currentMonthEvents.find((event) => event.date === dateStr)
  }

  // Get event type color
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "semester":
        return "bg-green-100 text-green-800 border-green-200"
      case "exam":
        return "bg-red-100 text-red-800 border-red-200"
      case "holiday":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "deadline":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "registration":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-slate-100 text-slate-800 border-slate-200"
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-white px-6">
        <MainNav />
        <div className="ml-auto flex items-center gap-4">
          <UserNav />
        </div>
      </header>

      <main className="flex-1 bg-slate-50 p-6">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Academic Calendar</h1>
            <p className="text-slate-500">View important academic dates and events</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle>
                    {monthNames[currentMonth]} {currentYear}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="default" onClick={prevMonth}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="default" onClick={nextMonth}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="text-center font-medium text-sm py-2">
                        {day}
                      </div>
                    ))}

                    {calendarDays.map((day, index) => {
                      const event = day ? getEventForDay(day) : null
                      const isToday =
                        day === today.getDate() &&
                        currentMonth === today.getMonth() &&
                        currentYear === today.getFullYear()

                      return (
                        <div
                          key={index}
                          className={`
                            min-h-[80px] p-1 border rounded-md
                            ${!day ? "bg-slate-50 border-slate-100" : "border-slate-200"}
                            ${isToday ? "border-amber-500 border-2" : ""}
                          `}
                        >
                          {day && (
                            <>
                              <div className="text-right text-sm font-medium">{day}</div>
                              {event && (
                                <div className={`mt-1 p-1 text-xs rounded border ${getEventTypeColor(event.type)}`}>
                                  {event.title}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Important dates and deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {academicEvents
                      .filter((event) => new Date(event.date) >= today)
                      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                      .slice(0, 5)
                      .map((event, index) => {
                        const eventDate = new Date(event.date)
                        return (
                          <div key={index} className="flex items-start gap-3">
                            <CalendarIcon className="h-4 w-4 mt-0.5 text-amber-500" />
                            <div>
                              <div className="font-medium">{event.title}</div>
                              <div className="text-xs text-slate-500">
                                {eventDate.toLocaleDateString("en-US", {
                                  weekday: "long",
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Event Legend</CardTitle>
                  <CardDescription>Calendar event types</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                      <span className="text-sm">Semester Dates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-500"></div>
                      <span className="text-sm">Exams</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Holidays</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                      <span className="text-sm">Deadlines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                      <span className="text-sm">Registration Periods</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Import missing Button component
