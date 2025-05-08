
import type React from "react"

import { useState, useEffect } from "react"
import { Calendar, FileText, Plus, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { MainNav } from "../components/main-nav"
import { UserNav } from "../components/user-nav"
import { Button } from "../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

// Define assignment types
type Assignment = {
  id: number
  title: string
  course: string
  dueDate: string
  submissions: number
  totalStudents: number
  description?: string
}

type GradingAssignment = {
  id: number
  title: string
  course: string
  submissions: number
  graded: number
}

export default function AssignmentsPage() {
  // State for assignments
  const [upcomingAssignments, setUpcomingAssignments] = useState<Assignment[]>([])

  const [gradingAssignments, setGradingAssignments] = useState<GradingAssignment[]>([])

  // State for add assignment dialog
  const [isAddAssignmentOpen, setIsAddAssignmentOpen] = useState(false)

  // New assignment form state
  const [newAssignment, setNewAssignment] = useState<Omit<Assignment, "id" | "submissions">>({
    title: "",
    course: "",
    dueDate: "",
    totalStudents: 0,
    description: "",
  })

  // Available courses for dropdown
  const availableCourses = [
    { code: "BIS101", title: "Introduction to Business Information Systems" },
    { code: "BIS201", title: "Database Management Systems" },
    { code: "BIS202", title: "Business Process Modeling" },
    { code: "BIS303", title: "Information Systems Security" },
    { code: "BIS305", title: "Systems Analysis and Design" },
  ]

  useEffect(() => {
    // Load assignments from localStorage on component mount
    const savedUpcomingAssignments = localStorage.getItem("edusync-upcoming-assignments")
    if (savedUpcomingAssignments) {
      setUpcomingAssignments(JSON.parse(savedUpcomingAssignments))
    } else {
      setUpcomingAssignments([
        {
          id: 1,
          title: "Final Project Submission",
          course: "BIS305",
          dueDate: "May 5, 2023",
          submissions: 18,
          totalStudents: 36,
          description: "Submit your final project including all documentation and source code.",
        },
        {
          id: 2,
          title: "Database Design Case Study",
          course: "BIS201",
          dueDate: "May 12, 2023",
          submissions: 10,
          totalStudents: 38,
          description: "Complete the case study on database design for the retail company scenario.",
        },
        {
          id: 3,
          title: "Business Process Analysis",
          course: "BIS202",
          dueDate: "May 18, 2023",
          submissions: 5,
          totalStudents: 35,
          description: "Analyze the business processes of the provided company and suggest improvements.",
        },
      ])
    }

    const savedGradingAssignments = localStorage.getItem("edusync-grading-assignments")
    if (savedGradingAssignments) {
      setGradingAssignments(JSON.parse(savedGradingAssignments))
    } else {
      setGradingAssignments([
        {
          id: 1,
          title: "Midterm Project",
          course: "BIS305",
          submissions: 36,
          graded: 28,
        },
        {
          id: 2,
          title: "Case Study Analysis",
          course: "BIS201",
          submissions: 38,
          graded: 25,
        },
        {
          id: 3,
          title: "System Design Exercise",
          course: "BIS303",
          submissions: 28,
          graded: 15,
        },
      ])
    }
  }, [])

  // Handle input change for new assignment form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewAssignment((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle course selection
  const handleCourseChange = (value: string) => {
    setNewAssignment((prev) => ({
      ...prev,
      course: value,
    }))
  }

  // Handle form submission
  const handleAddAssignment = () => {
    // Create new assignment with generated ID
    const newAssignmentWithId: Assignment = {
      ...newAssignment,
      id: upcomingAssignments.length + 1,
      submissions: 0, // New assignments start with 0 submissions
    }

    // Add new assignment to the list
    const updatedAssignments = [...upcomingAssignments, newAssignmentWithId]
    setUpcomingAssignments(updatedAssignments)

    // Save to localStorage
    localStorage.setItem("edusync-upcoming-assignments", JSON.stringify(updatedAssignments))

    // Reset form and close dialog
    setNewAssignment({
      title: "",
      course: "",
      dueDate: "",
      totalStudents: 0,
      description: "",
    })
    setIsAddAssignmentOpen(false)
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
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
              <p className="text-slate-500">Create and manage course assignments</p>
            </div>
            <Button onClick={() => setIsAddAssignmentOpen(true)} className="bg-slate-900 hover:bg-slate-800">
              <Plus className="mr-2 h-4 w-4" />
              Add Assignment
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Assignments</CardTitle>
                <CardDescription>Assignments due in the next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAssignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-start gap-3">
                      <Calendar className="h-4 w-4 mt-0.5 text-amber-500" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium">{assignment.title}</h4>
                          <span className="text-xs text-slate-500">{assignment.dueDate}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span>{assignment.course}</span>
                          <span>
                            {assignment.submissions}/{assignment.totalStudents} Submissions
                          </span>
                        </div>
                        {assignment.description && (
                          <p className="text-xs text-slate-600 mt-1">{assignment.description}</p>
                        )}
                        <Progress
                          value={(assignment.submissions / assignment.totalStudents) * 100}
                          className="h-1 mt-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grading Status</CardTitle>
                <CardDescription>Assignments that need grading</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {gradingAssignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-start gap-3">
                      <FileText className="h-4 w-4 mt-0.5 text-amber-500" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium">{assignment.title}</h4>
                          <span className="text-xs text-slate-500">
                            {assignment.graded}/{assignment.submissions} Graded
                          </span>
                        </div>
                        <div className="text-xs text-slate-500">{assignment.course}</div>
                        <Progress value={(assignment.graded / assignment.submissions) * 100} className="h-1 mt-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Add Assignment Dialog */}
      <Dialog open={isAddAssignmentOpen} onOpenChange={setIsAddAssignmentOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Add New Assignment</DialogTitle>
            <DialogDescription>Create a new assignment for your students.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Assignment Title
              </Label>
              <Input
                id="title"
                name="title"
                value={newAssignment.title}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="e.g. Final Project Submission"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="course" className="text-right">
                Course
              </Label>
              <Select onValueChange={handleCourseChange}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  {availableCourses.map((course) => (
                    <SelectItem key={course.code} value={course.code}>
                      {course.code}: {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dueDate" className="text-right">
                Due Date
              </Label>
              <Input
                id="dueDate"
                name="dueDate"
                type="date"
                value={newAssignment.dueDate}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="totalStudents" className="text-right">
                Total Students
              </Label>
              <Input
                id="totalStudents"
                name="totalStudents"
                type="number"
                value={newAssignment.totalStudents.toString()}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="e.g. 30"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={newAssignment.description}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Brief description of the assignment"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddAssignmentOpen(false)}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button onClick={handleAddAssignment} className="bg-slate-900 hover:bg-slate-800">
              <Plus className="mr-2 h-4 w-4" />
              Add Assignment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
