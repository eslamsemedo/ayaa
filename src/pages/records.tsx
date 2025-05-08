import { FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { MainNav } from "../components/main-nav"
import { UserNav } from "../components/user-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function AcademicRecordsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Academic Records</h1>
            <p className="text-slate-500">View and manage academic records</p>
          </div>

          <Tabs defaultValue="courses">
            <TabsList>
              <TabsTrigger value="courses">Course Records</TabsTrigger>
              <TabsTrigger value="students">Student Records</TabsTrigger>
              <TabsTrigger value="grades">Grade Distribution</TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Current Semester</CardTitle>
                    <CardDescription>Spring 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { course: "BIS201", title: "Database Management Systems", students: 38, avgGrade: "B+" },
                        { course: "BIS305", title: "Systems Analysis and Design", students: 36, avgGrade: "A-" },
                        { course: "BIS303", title: "Information Systems Security", students: 28, avgGrade: "B" },
                      ].map((record, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <FileText className="h-4 w-4 mt-0.5 text-amber-500" />
                          <div>
                            <h4 className="text-sm font-medium">
                              {record.course}: {record.title}
                            </h4>
                            <div className="flex gap-4 text-xs text-slate-500">
                              <span>{record.students} Students</span>
                              <span>Avg. Grade: {record.avgGrade}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Previous Semester</CardTitle>
                    <CardDescription>Fall 2022</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          course: "BIS101",
                          title: "Introduction to Business Information Systems",
                          students: 42,
                          avgGrade: "B",
                        },
                        { course: "BIS202", title: "Business Process Modeling", students: 35, avgGrade: "B+" },
                        { course: "BIS304", title: "E-Commerce Systems", students: 34, avgGrade: "A-" },
                      ].map((record, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <FileText className="h-4 w-4 mt-0.5 text-amber-500" />
                          <div>
                            <h4 className="text-sm font-medium">
                              {record.course}: {record.title}
                            </h4>
                            <div className="flex gap-4 text-xs text-slate-500">
                              <span>{record.students} Students</span>
                              <span>Avg. Grade: {record.avgGrade}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="students" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Student Performance Records</CardTitle>
                  <CardDescription>Overview of student academic performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">Select a course to view detailed student records.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="grades" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Grade Distribution</CardTitle>
                  <CardDescription>Statistical analysis of grades across courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">Select a semester to view grade distribution charts.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
