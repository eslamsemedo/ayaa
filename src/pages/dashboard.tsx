import { useEffect, useState } from "react"
import { Bell, Calendar, CheckCircle, Clock, FileText, Search, TrendingUp, Users } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Progress } from "../components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs"
import { UserNameDialog } from "../components/user-name-dialog"
import { MainNav } from "../components/main-nav"
import { UserNav } from "../components/user-nav"

export default function DashboardPage() {
  const [showDialog, setShowDialog] = useState(false)
  const [username, setUsername] = useState("")

  useEffect(() => {
    // Check if username is already set in localStorage
    const savedUsername = localStorage.getItem("edusync-username")
    if (savedUsername) {
      setUsername(savedUsername)
    } else {
      // Only show dialog if username is not set
      setShowDialog(true)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-white px-6">
        <MainNav />
        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input type="search" placeholder="Search..." className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]" />
          </div>
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[10px] font-medium text-white">
              3
            </span>
          </Button>
          <UserNav />
        </div>
      </header>

      <UserNameDialog open={showDialog} onOpenChange={setShowDialog} />

      <main className="flex-1 bg-slate-50 p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Instructor Dashboard</h1>
              <p className="text-slate-500 mt-1">
                Welcome back{username ? `, ${username}` : ""}! Here's an overview of your courses and activities.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All Time</TabsTrigger>
                  <TabsTrigger value="semester">This Semester</TabsTrigger>
                  <TabsTrigger value="month">This Month</TabsTrigger>
                  <TabsTrigger value="week">This Week</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                <FileText className="h-4 w-4 text-slate-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-slate-500">+2 from last semester</p>
                <div className="mt-4 h-1 w-full rounded-full bg-slate-100">
                  <div className="h-1 w-[75%] rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-slate-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">248</div>
                <p className="text-xs text-slate-500">+18 from last semester</p>
                <div className="mt-4 h-1 w-full rounded-full bg-slate-100">
                  <div className="h-1 w-[65%] rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
                <Clock className="h-4 w-4 text-slate-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-slate-500">Next: Final Project (2 days)</p>
                <div className="mt-4 h-1 w-full rounded-full bg-slate-100">
                  <div className="h-1 w-[45%] rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Student Engagement</CardTitle>
                <TrendingUp className="h-4 w-4 text-slate-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-slate-500">+5% from last semester</p>
                <div className="mt-4 h-1 w-full rounded-full bg-slate-100">
                  <div className="h-1 w-[87%] rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Course Performance</CardTitle>
                <CardDescription>Average student performance across your courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-end gap-2">
                  {[78, 63, 82, 91, 74, 85, 69].map((value, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-sm"
                        style={{ height: `${value * 2.5}px` }}
                      />
                      <span className="text-xs font-medium">{`BIS${i + 101}`}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Your schedule for the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Database Design Lecture", date: "Today, 10:00 AM", course: "BIS201" },
                    { title: "Office Hours", date: "Today, 2:00 PM", course: "All Courses" },
                    { title: "Project Presentations", date: "Tomorrow, 9:00 AM", course: "BIS305" },
                    { title: "Faculty Meeting", date: "May 4, 1:00 PM", course: "Department" },
                    { title: "Final Exam", date: "May 6, 11:00 AM", course: "BIS101" },
                  ].map((event, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Calendar className="h-4 w-4 mt-0.5 text-amber-500" />
                      <div>
                        <h4 className="text-sm font-medium">{event.title}</h4>
                        <div className="flex gap-2 text-xs text-slate-500">
                          <span>{event.date}</span>
                          <span>•</span>
                          <span>{event.course}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Instructor Achievements</CardTitle>
              <CardDescription>Your academic accomplishments and recognitions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Excellence in Teaching",
                    description: "Awarded for outstanding teaching methodology and student outcomes",
                    progress: 100,
                    date: "April 2023",
                  },
                  {
                    title: "Research Publication",
                    description: "Published 'Modern Database Systems in Business' in International Journal",
                    progress: 100,
                    date: "January 2023",
                  },
                  {
                    title: "Student Mentor of the Year",
                    description: "Recognized for exceptional student mentorship and guidance",
                    progress: 100,
                    date: "December 2022",
                  },
                ].map((achievement, i) => (
                  <Card key={i} className="border-amber-200 bg-amber-50">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">{achievement.title}</CardTitle>
                        <CheckCircle className="h-4 w-4 text-amber-600" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-slate-600 mb-2">{achievement.description}</p>
                      <Progress value={achievement.progress} className="h-1" />
                      <p className="mt-2 text-xs text-slate-500">{achievement.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
