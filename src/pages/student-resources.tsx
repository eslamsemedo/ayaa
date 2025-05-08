"use client"

import { BookOpen, Download, ExternalLink, FileText, Laptop, Library, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { MainNav } from "../components/main-nav"
import { UserNav } from "../components/user-nav"

export default function StudentResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-white px-6">
        <MainNav />
        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input
              type="search"
              placeholder="Search resources..."
              className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]"
            />
          </div>
          <UserNav />
        </div>
      </header>

      <main className="flex-1 bg-slate-50 p-6">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Student Resources</h1>
            <p className="text-slate-500">Access educational materials and support services</p>
          </div>

          <Tabs defaultValue="library">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="library">Library</TabsTrigger>
              <TabsTrigger value="software">Software</TabsTrigger>
              <TabsTrigger value="tutoring">Tutoring</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
            </TabsList>

            <TabsContent value="library" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Digital Library Access</CardTitle>
                    <CardDescription>Access online journals and publications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                        <Library className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">University Digital Library</p>
                        <p className="text-xs text-slate-500">24/7 access to academic resources</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      Access thousands of academic journals, e-books, and research papers through our comprehensive
                      digital library.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Access Library
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Research Databases</CardTitle>
                    <CardDescription>Specialized academic databases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                        <Search className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">Academic Search Tools</p>
                        <p className="text-xs text-slate-500">Find relevant research materials</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      Access specialized databases for business, technology, and information systems research.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Browse Databases
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Citation Tools</CardTitle>
                    <CardDescription>Reference management software</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                        <FileText className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">Citation Management</p>
                        <p className="text-xs text-slate-500">APA, MLA, Chicago, and more</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      Tools to help you manage citations, create bibliographies, and format your research papers.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Access Tools
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="software" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Microsoft Office 365</CardTitle>
                    <CardDescription>Free for all students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                        <Laptop className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">Office 365 Suite</p>
                        <p className="text-xs text-slate-500">Word, Excel, PowerPoint, and more</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      Access the full Microsoft Office suite with your university email account.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                      <Download className="mr-2 h-4 w-4" />
                      Get Office 365
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Database Software</CardTitle>
                    <CardDescription>SQL and database management tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                        <Database className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">SQL Server, MySQL, Oracle</p>
                        <p className="text-xs text-slate-500">Educational licenses available</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      Access database management software for your coursework and projects.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                      <Download className="mr-2 h-4 w-4" />
                      Access Software
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Development Tools</CardTitle>
                    <CardDescription>Programming and development software</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                        <Code className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">IDEs and Code Editors</p>
                        <p className="text-xs text-slate-500">Visual Studio, IntelliJ, and more</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      Access professional development tools with educational licenses.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                      <Download className="mr-2 h-4 w-4" />
                      Get Development Tools
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tutoring" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Academic Support Center</CardTitle>
                    <CardDescription>Free tutoring services for all students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                          <BookOpen className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-medium">Subject-Specific Tutoring</p>
                          <p className="text-xs text-slate-500">One-on-one and group sessions available</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600">
                        Get help with specific courses, assignments, and exam preparation from qualified tutors.
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Available Subjects:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Database Design and Management</li>
                          <li>• Programming and Development</li>
                          <li>• Business Analysis</li>
                          <li>• Information Systems</li>
                          <li>• Statistics and Data Analysis</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">Schedule Tutoring Session</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Writing Center</CardTitle>
                    <CardDescription>Improve your academic writing skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                          <PenTool className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-medium">Writing Support Services</p>
                          <p className="text-xs text-slate-500">In-person and online assistance</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600">
                        Get help with research papers, essays, reports, and other academic writing assignments.
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Services Include:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Paper review and feedback</li>
                          <li>• Citation and formatting help</li>
                          <li>• Grammar and style guidance</li>
                          <li>• Research assistance</li>
                          <li>• ESL/ELL support</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">Book Writing Consultation</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="forms" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Course Registration",
                    description: "Add or drop courses",
                    icon: ClipboardList,
                  },
                  {
                    title: "Transcript Request",
                    description: "Request official transcripts",
                    icon: FileText,
                  },
                  {
                    title: "Graduation Application",
                    description: "Apply for graduation",
                    icon: GraduationCap,
                  },
                  {
                    title: "Financial Aid",
                    description: "Apply for financial assistance",
                    icon: DollarSign,
                  },
                  {
                    title: "Change of Major",
                    description: "Request to change your major",
                    icon: RefreshCw,
                  },
                  {
                    title: "Leave of Absence",
                    description: "Request temporary leave",
                    icon: Calendar,
                  },
                ].map((form, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                          <form.icon className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <CardTitle>{form.title}</CardTitle>
                          <CardDescription>{form.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600">
                        Complete and submit this form online or download a PDF version.
                      </p>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button className="flex-1 bg-slate-900 hover:bg-slate-800">Fill Online</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

// Import missing icons
import { Calendar, ClipboardList, Code, Database, DollarSign, GraduationCap, PenTool, RefreshCw } from "lucide-react"
