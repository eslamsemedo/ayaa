// import Link from "next/link"
import { CircleUser, GraduationCap } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-6 rounded-xl overflow-hidden shadow-2xl">
        {/* Left Square - Branding */}
        <div className="bg-slate-900 text-white p-8 flex flex-col justify-center relative">
          <div className="absolute top-8 left-8 flex items-center gap-3">
            <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-full p-3">
              <span className="text-2xl font-bold text-slate-900">E</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">EduSync</h1>
          </div>

          <div className="mt-24 mb-8">
            <h2 className="text-4xl font-bold mb-6 leading-tight">Welcome to your ultimate educational platform</h2>
            <p className="text-slate-300 text-lg">
              Empowering educators and students with seamless learning experiences and powerful tools for academic
              excellence.
            </p>
          </div>

          <div className="mt-auto">
            <div className="flex gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
                  style={{ width: `${[30, 20, 15, 10][i]}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Square - Login Form */}
        <div className="bg-white p-8 flex flex-col justify-center">
          <Tabs defaultValue="instructors" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="instructors">Instructors</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
            </TabsList>

            <TabsContent value="instructors">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Instructor Login</CardTitle>
                  <CardDescription>Enter your credentials to access your instructor dashboard</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="instructor-email">Email</Label>
                    <Input id="instructor-email" type="email" placeholder="m.instructor@edusync.edu" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="instructor-password">Password</Label>
                      <a href="#" className="text-sm text-amber-600 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input id="instructor-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <a href="/dashboard" className="w-full">
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      Login as Instructor
                    </Button>
                  </a>
                  <div className="text-sm text-center text-slate-500">
                    Don&apos;t have an account?{" "}
                    <a href="#" className="text-amber-600 hover:underline">
                      Contact administration
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="students">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Student Login</CardTitle>
                  <CardDescription>Enter your credentials to access your student portal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email</Label>
                    <Input id="student-email" type="email" placeholder="s.student@edusync.edu" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-password">Password</Label>
                      <a href="#" className="text-sm text-amber-600 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input id="student-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button className="w-full bg-slate-900 hover:bg-slate-800">
                    <CircleUser className="mr-2 h-4 w-4" />
                    Login as Student
                  </Button>
                  <div className="text-sm text-center text-slate-500">
                    Don&apos;t have an account?{" "}
                    <a href="#" className="text-amber-600 hover:underline">
                      Contact administration
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
