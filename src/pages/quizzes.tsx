import { FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { MainNav } from "../components/main-nav"
import { UserNav } from "../components/user-nav"

export default function QuizzesPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Quizzes</h1>
            <p className="text-slate-500">Create and manage your course quizzes</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Database Design Fundamentals",
                course: "BIS201",
                questions: 15,
                timeLimit: "45 minutes",
                dueDate: "May 10, 2023",
              },
              {
                title: "Business Process Modeling",
                course: "BIS202",
                questions: 20,
                timeLimit: "60 minutes",
                dueDate: "May 15, 2023",
              },
              {
                title: "Information Systems Security",
                course: "BIS303",
                questions: 25,
                timeLimit: "75 minutes",
                dueDate: "May 20, 2023",
              },
            ].map((quiz, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{quiz.title}</CardTitle>
                    <FileText className="h-5 w-5 text-slate-500" />
                  </div>
                  <CardDescription>{quiz.course}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-slate-500">Questions</p>
                      <p className="font-medium">{quiz.questions}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Time Limit</p>
                      <p className="font-medium">{quiz.timeLimit}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-slate-500">Due Date</p>
                      <p className="font-medium">{quiz.dueDate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
