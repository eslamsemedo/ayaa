// import Link from "next/link"
import { CircleUser, GraduationCap } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { useState } from "react"

const users = [
  { username: "instructor1", password: "password123", role: "instructor" },
  { username: "student1", password: "password456", role: "student" },
];

export default function LoginPage() {

  const [role, setRole] = useState<string>("instructor");
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = () => {
    const username = formData.username as string;
    const password = formData.password as string;

    console.log('Attempting login with:', { username, password, role });
    console.log('Available users:', users);

    const user = users.find(
      (u) => u.username === username &&
        u.password === password &&
        u.role === role
    );

    console.log('Found user:', user);

    if (user) {
      // Login successful
      console.log('Login successful:', user);
      window.location.href = '/dashboard';
    } else {
      // Login failed
      console.log('Invalid credentials');
      alert('Invalid username or password');
    }
  };



  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
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
              <TabsTrigger
                onClick={() => setRole("instructor")}
                value="instructors">Instructors</TabsTrigger>
              <TabsTrigger
                onClick={() => setRole("student")}
                value="students">Students</TabsTrigger>
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
                    <Input
                      onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                      id="instructor-email" type="email" placeholder="m.instructor@edusync.edu" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="instructor-password">Password</Label>
                      <a href="#" className="text-sm text-amber-600 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                      id="instructor-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button
                    onClick={handleSubmit}
                    className="w-full text-white bg-slate-900 hover:bg-slate-800">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Login as Instructor
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

            <TabsContent value="students">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Student Login</CardTitle>
                  <CardDescription>Enter your credentials to access your student portal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email</Label>
                    <Input
                      onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                      id="student-email" type="email" placeholder="s.student@edusync.edu" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-password">Password</Label>
                      <a href="#" className="text-sm text-amber-600 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                      id="student-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">

                  <Button
                    // onClick={()=>handleSubmit()}
                    onClick={handleSubmit}
                    className="w-full text-white bg-slate-900 hover:bg-slate-800">
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
