"use client"

import type React from "react"

import { useState, useEffect } from "react"
// import Image from "next/image"
import { BookOpen, Filter, Plus, Search, X } from "lucide-react"
// import Link from "next/link"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { MainNav } from "../components/main-nav"
import { UserNav } from "../components/user-nav"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

// Define course type
type Course = {
  id: number
  title: string
  code: string
  year: number
  students: number
  progress: number
  description: string
  image: string
}

// Sample course data with thumbnails
const initialCourses: Course[] = [
  {
    id: 1,
    title: "Introduction to Business Information Systems",
    code: "BIS101",
    year: 1,
    students: 42,
    progress: 100,
    description: "Fundamentals of information systems in business contexts.",
    image: "/placeholder.svg?height=200&width=400&text=BIS101",
  },
  {
    id: 2,
    title: "Database Management Systems",
    code: "BIS201",
    year: 2,
    students: 38,
    progress: 75,
    description: "Design and implementation of database systems for business applications.",
    image: "/placeholder.svg?height=200&width=400&text=BIS201",
  },
  {
    id: 3,
    title: "Business Process Modeling",
    code: "BIS202",
    year: 2,
    students: 35,
    progress: 80,
    description: "Techniques for modeling and analyzing business processes.",
    image: "/placeholder.svg?height=200&width=400&text=BIS202",
  },
  {
    id: 4,
    title: "Enterprise Resource Planning",
    code: "BIS301",
    year: 3,
    students: 30,
    progress: 60,
    description: "Implementation and management of ERP systems in organizations.",
    image: "/placeholder.svg?height=200&width=400&text=BIS301",
  },
  {
    id: 5,
    title: "Business Intelligence",
    code: "BIS302",
    year: 3,
    students: 32,
    progress: 65,
    description: "Data warehousing, mining, and analytics for business decision-making.",
    image: "/placeholder.svg?height=200&width=400&text=BIS302",
  },
  {
    id: 6,
    title: "Information Systems Security",
    code: "BIS303",
    year: 3,
    students: 28,
    progress: 70,
    description: "Security principles and practices for business information systems.",
    image: "/placeholder.svg?height=200&width=400&text=BIS303",
  },
  {
    id: 7,
    title: "E-Commerce Systems",
    code: "BIS304",
    year: 3,
    students: 34,
    progress: 55,
    description: "Design and implementation of electronic commerce systems.",
    image: "/placeholder.svg?height=200&width=400&text=BIS304",
  },
  {
    id: 8,
    title: "Systems Analysis and Design",
    code: "BIS305",
    year: 3,
    students: 36,
    progress: 85,
    description: "Methods and techniques for analyzing and designing information systems.",
    image: "/placeholder.svg?height=200&width=400&text=BIS305",
  },
  {
    id: 9,
    title: "IT Project Management",
    code: "BIS401",
    year: 4,
    students: 25,
    progress: 40,
    description: "Planning, executing, and controlling IT projects in business environments.",
    image: "/placeholder.svg?height=200&width=400&text=BIS401",
  },
  {
    id: 10,
    title: "Business Analytics",
    code: "BIS402",
    year: 4,
    students: 27,
    progress: 45,
    description: "Advanced analytics techniques for business decision support.",
    image: "/placeholder.svg?height=200&width=400&text=BIS402",
  },
  {
    id: 11,
    title: "Enterprise Architecture",
    code: "BIS403",
    year: 4,
    students: 22,
    progress: 50,
    description: "Frameworks and methodologies for enterprise architecture.",
    image: "/placeholder.svg?height=200&width=400&text=BIS403",
  },
  {
    id: 12,
    title: "Digital Transformation",
    code: "BIS404",
    year: 4,
    students: 24,
    progress: 35,
    description: "Strategies and technologies for digital business transformation.",
    image: "/placeholder.svg?height=200&width=400&text=BIS404",
  },
  {
    id: 13,
    title: "Cloud Computing for Business",
    code: "BIS405",
    year: 4,
    students: 26,
    progress: 30,
    description: "Cloud services and deployment models for business applications.",
    image: "/placeholder.svg?height=200&width=400&text=BIS405",
  },
  {
    id: 14,
    title: "Mobile Business Applications",
    code: "BIS406",
    year: 4,
    students: 28,
    progress: 25,
    description: "Development and management of mobile applications for business.",
    image: "/placeholder.svg?height=200&width=400&text=BIS406",
  },
  {
    id: 15,
    title: "Information Systems Ethics",
    code: "BIS407",
    year: 4,
    students: 30,
    progress: 20,
    description: "Ethical issues in the development and use of information systems.",
    image: "/placeholder.svg?height=200&width=400&text=BIS407",
  },
  {
    id: 16,
    title: "Big Data Technologies",
    code: "BIS408",
    year: 4,
    students: 32,
    progress: 15,
    description: "Technologies and frameworks for managing and analyzing big data.",
    image: "/placeholder.svg?height=200&width=400&text=BIS408",
  },
  {
    id: 17,
    title: "Business Process Automation",
    code: "BIS409",
    year: 4,
    students: 29,
    progress: 10,
    description: "Tools and techniques for automating business processes.",
    image: "/placeholder.svg?height=200&width=400&text=BIS409",
  },
  {
    id: 18,
    title: "IT Governance",
    code: "BIS410",
    year: 4,
    students: 27,
    progress: 5,
    description: "Frameworks and practices for governing IT in organizations.",
    image: "/placeholder.svg?height=200&width=400&text=BIS410",
  },
  {
    id: 19,
    title: "Blockchain for Business",
    code: "BIS411",
    year: 4,
    students: 25,
    progress: 3,
    description: "Blockchain technology and its applications in business.",
    image: "/placeholder.svg?height=200&width=400&text=BIS411",
  },
  {
    id: 20,
    title: "Artificial Intelligence in Business",
    code: "BIS412",
    year: 4,
    students: 30,
    progress: 2,
    description: "AI technologies and their applications in business contexts.",
    image: "/placeholder.svg?height=200&width=400&text=BIS412",
  },
]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [yearFilter, setYearFilter] = useState("all")
  const [courses, setCourses] = useState<Course[]>([])
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false)

  // New course form state
  const [newCourse, setNewCourse] = useState<Omit<Course, "id" | "progress" | "image">>({
    title: "",
    code: "",
    year: 1,
    students: 0,
    description: "",
  })

  useEffect(() => {
    // Load courses from localStorage on component mount
    const savedCourses = localStorage.getItem("edusync-courses")
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses))
    } else {
      setCourses(initialCourses)
    }
  }, [])

  // Filter courses based on search term and year filter
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = yearFilter === "all" || course.year === Number.parseInt(yearFilter)
    return matchesSearch && matchesYear
  })

  // Handle input change for new course form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewCourse((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle select change for year
  const handleYearChange = (value: string) => {
    setNewCourse((prev) => ({
      ...prev,
      year: Number.parseInt(value),
    }))
  }

  // Handle form submission
  const handleAddCourse = () => {
    // Create new course with generated ID and default values
    const newCourseWithId: Course = {
      ...newCourse,
      id: courses.length + 1,
      progress: 0, // New courses start at 0% progress
      image: `/placeholder.svg?height=200&width=400&text=${newCourse.code}`,
    }

    // Add new course to the list
    const updatedCourses = [...courses, newCourseWithId]
    setCourses(updatedCourses)

    // Save to localStorage
    localStorage.setItem("edusync-courses", JSON.stringify(updatedCourses))

    // Reset form and close dialog
    setNewCourse({
      title: "",
      code: "",
      year: 1,
      students: 0,
      description: "",
    })
    setIsAddCourseOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-white px-6">
        <MainNav />
        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input type="search" placeholder="Search..." className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]" />
          </div>
          <UserNav />
        </div>
      </header>

      <main className="flex-1 bg-slate-50 p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
              <p className="text-slate-500">Manage and view your courses</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="pl-8 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-slate-500" />
                <select
                  className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                >
                  <option value="all">All Years</option>
                  <option value="1">Year 1</option>
                  <option value="2">Year 2</option>
                  <option value="3">Year 3</option>
                  <option value="4">Year 4</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={() => setIsAddCourseOpen(true)} className="bg-slate-900 hover:bg-slate-800">
              <Plus className="mr-2 h-4 w-4" />
              Add New Course
            </Button>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}

                        className="object-cover"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.currentTarget.src = `/placeholder.svg?height=200&width=400&text=${course.code}`
                        }}
                      />
                      <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                        {course.code}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>
                        Year {course.year} • {course.students} Students
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-slate-600 line-clamp-2">{course.description}</p>
                      <div className="mt-4 h-1 w-full rounded-full bg-slate-100">
                        <div
                          className="h-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-slate-500">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <a href={`/courses/${course.id}`}>
                          <BookOpen className="mr-2 h-4 w-4" />
                          View Course
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="active" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredCourses
                  .filter((course) => course.progress > 0 && course.progress < 100)
                  .map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="relative h-48 w-full">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          // fill
                          className="object-cover"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            e.currentTarget.src = `/placeholder.svg?height=200&width=400&text=${course.code}`
                          }}
                        />
                        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                          {course.code}
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>
                          Year {course.year} • {course.students} Students
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-slate-600 line-clamp-2">{course.description}</p>
                        <div className="mt-4 h-1 w-full rounded-full bg-slate-100">
                          <div
                            className="h-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <div className="mt-1 flex justify-between text-xs text-slate-500">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <a href={`/courses/${course.id}`}>
                            <BookOpen className="mr-2 h-4 w-4" />
                            View Course
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredCourses
                  .filter((course) => course.progress === 0)
                  .map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="relative h-48 w-full">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          // fill
                          className="object-cover"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            e.currentTarget.src = `/placeholder.svg?height=200&width=400&text=${course.code}`
                          }}
                        />
                        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                          {course.code}
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>
                          Year {course.year} • {course.students} Students
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-slate-600 line-clamp-2">{course.description}</p>
                        <div className="mt-4 h-1 w-full rounded-full bg-slate-100">
                          <div
                            className="h-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <div className="mt-1 flex justify-between text-xs text-slate-500">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <a href={`/courses/${course.id}`}>
                            <BookOpen className="mr-2 h-4 w-4" />
                            View Course
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="archived" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredCourses
                  .filter((course) => course.progress === 100)
                  .map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="relative h-48 w-full">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          // fill
                          className="object-cover"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            e.currentTarget.src = `/placeholder.svg?height=200&width=400&text=${course.code}`
                          }}
                        />
                        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                          {course.code}
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>
                          Year {course.year} • {course.students} Students
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-slate-600 line-clamp-2">{course.description}</p>
                        <div className="mt-4 h-1 w-full rounded-full bg-slate-100">
                          <div
                            className="h-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <div className="mt-1 flex justify-between text-xs text-slate-500">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <a href={`/courses/${course.id}`}>
                            <BookOpen className="mr-2 h-4 w-4" />
                            View Course
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Add Course Dialog */}
      <Dialog open={isAddCourseOpen} onOpenChange={setIsAddCourseOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Add New Course</DialogTitle>
            <DialogDescription>Create a new course for your students.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Course Title
              </Label>
              <Input
                id="title"
                name="title"
                value={newCourse.title}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="e.g. Introduction to Business Information Systems"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="code" className="text-right">
                Course Code
              </Label>
              <Input
                id="code"
                name="code"
                value={newCourse.code}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="e.g. BIS101"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="year" className="text-right">
                Year
              </Label>
              <Select onValueChange={handleYearChange} defaultValue="1">
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Year 1</SelectItem>
                  <SelectItem value="2">Year 2</SelectItem>
                  <SelectItem value="3">Year 3</SelectItem>
                  <SelectItem value="4">Year 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="students" className="text-right">
                Students
              </Label>
              <Input
                id="students"
                name="students"
                type="number"
                value={newCourse.students.toString()}
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
                value={newCourse.description}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Brief description of the course"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddCourseOpen(false)}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button onClick={handleAddCourse} className="bg-slate-900 hover:bg-slate-800">
              <Plus className="mr-2 h-4 w-4" />
              Add Course
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
