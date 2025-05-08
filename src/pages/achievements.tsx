import { Award, CheckCircle, Medal, Star, Trophy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { MainNav } from "../components/main-nav"
import { UserNav } from "../components/user-nav"

export default function AchievementsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Instructor Achievements</h1>
            <p className="text-slate-500">Your academic accomplishments and recognitions</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-amber-50 to-white border-amber-200">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold">Teaching Excellence</CardTitle>
                  <Trophy className="h-5 w-5 text-amber-600" />
                </div>
                <CardDescription>Recognition for outstanding teaching</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-2 space-y-4">
                  <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <Medal className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Excellence in Teaching Award</h3>
                      <p className="text-xs text-slate-500">Awarded April 2023</p>
                    </div>
                    <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <Star className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Outstanding Mentor Award</h3>
                      <p className="text-xs text-slate-500">Awarded December 2022</p>
                    </div>
                    <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <Award className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Best Course Design</h3>
                      <p className="text-xs text-slate-500">Awarded September 2022</p>
                    </div>
                    <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-white border-amber-200">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold">Research & Publications</CardTitle>
                  <FileText className="h-5 w-5 text-amber-600" />
                </div>
                <CardDescription>Academic research contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-2 space-y-4">
                  <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <BookOpen className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Journal Publication</h3>
                      <p className="text-xs text-slate-500">International Journal of BIS, Jan 2023</p>
                    </div>
                    <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <Users className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Conference Presentation</h3>
                      <p className="text-xs text-slate-500">BIS Annual Conference, May 2022</p>
                    </div>
                    <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <GraduationCap className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Research Grant</h3>
                      <p className="text-xs text-slate-500">University Research Fund, Nov 2022</p>
                    </div>
                    <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-white border-amber-200">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold">Professional Development</CardTitle>
                  <TrendingUp className="h-5 w-5 text-amber-600" />
                </div>
                <CardDescription>Skills and certifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-2 space-y-4">
                  <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <Shield className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Advanced Database Certification</h3>
                      <p className="text-xs text-slate-500">Completed March 2023</p>
                    </div>
                    <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <Lightbulb className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Innovation in Teaching Workshop</h3>
                      <p className="text-xs text-slate-500">Completed February 2023</p>
                    </div>
                    <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <Code className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">AI in Education Certification</h3>
                      <p className="text-xs text-slate-500">In Progress - 75% Complete</p>
                    </div>
                    <div className="ml-auto w-16">
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Achievement Progress</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Current Academic Year</CardTitle>
                  <CardDescription>Your progress towards yearly goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Research Publications</span>
                        <span className="text-sm font-medium">2/3</span>
                      </div>
                      <Progress value={66} className="h-2" />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Teaching Evaluations</span>
                        <span className="text-sm font-medium">4.8/5.0</span>
                      </div>
                      <Progress value={96} className="h-2" />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Student Mentorship</span>
                        <span className="text-sm font-medium">12/15</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Professional Development</span>
                        <span className="text-sm font-medium">3/4</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievement Milestones</CardTitle>
                  <CardDescription>Career progression and milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />

                    <div className="relative pl-10 pb-8">
                      <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 border-4 border-white">
                        <Trophy className="h-4 w-4 text-amber-600" />
                      </div>
                      <h3 className="font-bold">Distinguished Professor</h3>
                      <p className="text-sm text-slate-500">Target: 2026</p>
                      <Progress value={25} className="h-2 mt-2" />
                    </div>

                    <div className="relative pl-10 pb-8">
                      <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 border-4 border-white">
                        <Award className="h-4 w-4 text-amber-600" />
                      </div>
                      <h3 className="font-bold">Department Chair</h3>
                      <p className="text-sm text-slate-500">Target: 2025</p>
                      <Progress value={40} className="h-2 mt-2" />
                    </div>

                    <div className="relative pl-10 pb-8">
                      <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 border-4 border-white">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <h3 className="font-bold">Associate Professor</h3>
                      <p className="text-sm text-slate-500">Achieved: 2022</p>
                      <Progress value={100} className="h-2 mt-2" />
                    </div>

                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 border-4 border-white">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <h3 className="font-bold">Assistant Professor</h3>
                      <p className="text-sm text-slate-500">Achieved: 2018</p>
                      <Progress value={100} className="h-2 mt-2" />
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

// Import missing icons
import { BookOpen, Code, FileText, GraduationCap, Lightbulb, Shield, TrendingUp, Users } from "lucide-react"
