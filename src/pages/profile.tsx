
import type React from "react"

import { useState, useEffect } from "react"
// import Image from "next/image"
import { BookOpen, Calendar, Edit, Mail, MapPin, Phone, Save, Trash, Upload, User, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { MainNav } from "../components/main-nav"
import { UserNav } from "../components/user-nav"

// Define education and research interest types
type Education = {
  degree: string
  institution: string
  year: string
}

type ResearchInterest = {
  name: string
}

export default function ProfilePage() {
  const [editing, setEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Professor Davis",
    department: "Business Information Systems",
    email: "p.davis@edusync.edu",
    phone: "+1 (555) 123-4567",
    office: "Business School, Room 305",
    bio: "Professor Davis is a distinguished faculty member in the Business Information Systems department with over 10 years of experience in teaching and research. Specializing in database management systems and business intelligence, Professor Davis has contributed significantly to the field through publications in top-tier journals and presentations at international conferences.",
    profileImage: "/placeholder.svg",
  })

  const [education, setEducation] = useState<Education[]>([
    {
      degree: "Ph.D. in Information Systems",
      institution: "Stanford University",
      year: "2013",
    },
    {
      degree: "M.S. in Computer Science",
      institution: "MIT",
      year: "2009",
    },
    {
      degree: "B.S. in Business Administration",
      institution: "University of California, Berkeley",
      year: "2007",
    },
  ])

  const [newEducation, setNewEducation] = useState<Education>({
    degree: "",
    institution: "",
    year: "",
  })

  const [researchInterests, setResearchInterests] = useState<ResearchInterest[]>([
    { name: "Database Systems" },
    { name: "Business Intelligence" },
    { name: "Data Analytics" },
    { name: "Information Security" },
    { name: "Enterprise Systems" },
  ])

  const [newResearchInterest, setNewResearchInterest] = useState<string>("")

  const [editForm, setEditForm] = useState({ ...profileData })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    const updatedProfile = { ...editForm }
    setProfileData(updatedProfile)

    // Save to localStorage
    localStorage.setItem("edusync-profile", JSON.stringify(updatedProfile))

    // Save education and research interests
    localStorage.setItem("edusync-education", JSON.stringify(education))
    localStorage.setItem("edusync-research", JSON.stringify(researchInterests))

    setEditing(false)
  }

  const handleCancel = () => {
    setEditForm({ ...profileData })
    setEditing(false)
  }

  const handleAddEducation = () => {
    if (newEducation.degree && newEducation.institution && newEducation.year) {
      const updatedEducation = [...education, newEducation]
      setEducation(updatedEducation)
      localStorage.setItem("edusync-education", JSON.stringify(updatedEducation))
      setNewEducation({ degree: "", institution: "", year: "" })
    }
  }

  const handleRemoveEducation = (index: number) => {
    const updatedEducation = education.filter((_, i) => i !== index)
    setEducation(updatedEducation)
    localStorage.setItem("edusync-education", JSON.stringify(updatedEducation))
  }

  const handleAddResearchInterest = () => {
    if (newResearchInterest) {
      const updatedInterests = [...researchInterests, { name: newResearchInterest }]
      setResearchInterests(updatedInterests)
      localStorage.setItem("edusync-research", JSON.stringify(updatedInterests))
      setNewResearchInterest("")
    }
  }

  const handleRemoveResearchInterest = (index: number) => {
    const updatedInterests = researchInterests.filter((_, i) => i !== index)
    setResearchInterests(updatedInterests)
    localStorage.setItem("edusync-research", JSON.stringify(updatedInterests))
  }

  useEffect(() => {
    // Load profile data from localStorage on component mount
    const savedProfile = localStorage.getItem("edusync-profile")
    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile)
      setProfileData(parsedProfile)
      setEditForm(parsedProfile)
    }

    const savedEducation = localStorage.getItem("edusync-education")
    if (savedEducation) {
      setEducation(JSON.parse(savedEducation))
    }

    const savedResearch = localStorage.getItem("edusync-research")
    if (savedResearch) {
      setResearchInterests(JSON.parse(savedResearch))
    }
  }, [])

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
          <div className="flex flex-col md:flex-row gap-6">
            <Card className="md:w-1/3">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-32 w-32 mb-4">
                    <img
                      src={editing ? editForm.profileImage : profileData.profileImage || "/placeholder.svg"}
                      alt="Profile picture"
                      className="rounded-full object-cover border-4 border-white shadow-md"
                    />
                    {editing && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
                        <label htmlFor="profile-upload" className="cursor-pointer">
                          <div className="bg-amber-500 hover:bg-amber-600 text-white rounded-md px-2 py-1 flex items-center">
                            <Upload className="h-4 w-4 mr-2" />
                            Upload
                          </div>
                          <input
                            id="profile-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) {
                                // Create a blob URL for the file
                                const imageUrl = URL.createObjectURL(file)
                                setEditForm((prev) => ({ ...prev, profileImage: imageUrl }))
                              }
                            }}
                          />
                        </label>
                      </div>
                    )}
                    {!editing && (
                      <Button
                        size="icon"
                        className="absolute bottom-0 right-0 bg-amber-500 hover:bg-amber-600 h-8 w-8 rounded-full shadow-md"
                        onClick={() => setEditing(true)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  {editing ? (
                    <div className="w-full space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input name="name" value={editForm.name} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Department</label>
                        <Input name="department" value={editForm.department} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input name="email" value={editForm.email} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone</label>
                        <Input name="phone" value={editForm.phone} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Office</label>
                        <Input name="office" value={editForm.office} onChange={handleInputChange} />
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-slate-900 hover:bg-slate-800" onClick={handleSave}>
                          <Save className="mr-2 h-4 w-4" />
                          Save
                        </Button>
                        <Button variant="outline" className="flex-1" onClick={handleCancel}>
                          <X className="mr-2 h-4 w-4" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold">{profileData.name}</h2>
                      <p className="text-slate-500">{profileData.department}</p>
                      <div className="mt-4 flex flex-col gap-2 w-full">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-slate-500" />
                          <span className="text-sm">{profileData.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-slate-500" />
                          <span className="text-sm">{profileData.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-slate-500" />
                          <span className="text-sm">{profileData.office}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="flex-1">
              <Tabs defaultValue="about">
                <TabsList>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                  <TabsTrigger value="publications">Publications</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="mt-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>About</CardTitle>
                        <CardDescription>Professional information</CardDescription>
                      </div>
                      {!editing && (
                        <Button variant="outline" size="sm" onClick={() => setEditing(true)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Profile
                        </Button>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {editing ? (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label className="font-medium">Biography</label>
                            <Textarea name="bio" value={editForm.bio} onChange={handleInputChange} rows={6} />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h3 className="font-medium mb-2">Biography</h3>
                          <p className="text-sm text-slate-600">{profileData.bio}</p>
                        </div>
                      )}

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">Education</h3>
                          {editing && (
                            <Button variant="outline" size="sm" onClick={handleAddEducation}>
                              Add Education
                            </Button>
                          )}
                        </div>

                        {editing ? (
                          <div className="space-y-4">
                            {education.map((edu, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="flex-1 space-y-2">
                                  <Input
                                    value={edu.degree}
                                    onChange={(e) => {
                                      const newEducation = [...education]
                                      newEducation[index].degree = e.target.value
                                      setEducation(newEducation)
                                    }}
                                    placeholder="Degree"
                                  />
                                  <Input
                                    value={edu.institution}
                                    onChange={(e) => {
                                      const newEducation = [...education]
                                      newEducation[index].institution = e.target.value
                                      setEducation(newEducation)
                                    }}
                                    placeholder="Institution"
                                  />
                                  <Input
                                    value={edu.year}
                                    onChange={(e) => {
                                      const newEducation = [...education]
                                      newEducation[index].year = e.target.value
                                      setEducation(newEducation)
                                    }}
                                    placeholder="Year"
                                  />
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => handleRemoveEducation(index)}>
                                  <Trash className="h-4 w-4 text-red-500" />
                                </Button>
                              </div>
                            ))}

                            <div className="space-y-2 border-t pt-4">
                              <h4 className="text-sm font-medium">Add New Education</h4>
                              <Input
                                value={newEducation.degree}
                                onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                                placeholder="Degree"
                                className="mb-2"
                              />
                              <Input
                                value={newEducation.institution}
                                onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                                placeholder="Institution"
                                className="mb-2"
                              />
                              <Input
                                value={newEducation.year}
                                onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })}
                                placeholder="Year"
                                className="mb-2"
                              />
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={handleAddEducation}
                                disabled={!newEducation.degree || !newEducation.institution || !newEducation.year}
                              >
                                Add
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <ul className="space-y-2">
                            {education.map((edu, index) => (
                              <li key={index} className="text-sm">
                                <div className="font-medium">{edu.degree}</div>
                                <div className="text-slate-600">
                                  {edu.institution}, {edu.year}
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">Research Interests</h3>
                          {editing && (
                            <Button variant="outline" size="sm" onClick={handleAddResearchInterest}>
                              Add Interest
                            </Button>
                          )}
                        </div>

                        {editing ? (
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {researchInterests.map((interest, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1"
                                >
                                  <span className="text-xs font-medium">{interest.name}</span>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-4 w-4 p-0"
                                    onClick={() => handleRemoveResearchInterest(index)}
                                  >
                                    <X className="h-3 w-3" />
                                  </Button>
                                </div>
                              ))}
                            </div>

                            <div className="flex gap-2">
                              <Input
                                value={newResearchInterest}
                                onChange={(e) => setNewResearchInterest(e.target.value)}
                                placeholder="New research interest"
                                className="flex-1"
                              />
                              <Button
                                variant="outline"
                                onClick={handleAddResearchInterest}
                                disabled={!newResearchInterest}
                              >
                                Add
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {researchInterests.map((interest, index) => (
                              <span
                                key={index}
                                className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800"
                              >
                                {interest.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="courses" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Courses</CardTitle>
                      <CardDescription>Current and past courses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium mb-2">Current Courses</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                              <BookOpen className="h-4 w-4 mt-0.5 text-amber-500" />
                              <div>
                                <div className="font-medium">BIS201: Database Management Systems</div>
                                <div className="text-sm text-slate-600">Spring 2023 • MWF 10:00-11:30 AM</div>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <BookOpen className="h-4 w-4 mt-0.5 text-amber-500" />
                              <div>
                                <div className="font-medium">BIS305: Systems Analysis and Design</div>
                                <div className="text-sm text-slate-600">Spring 2023 • TTh 1:00-2:30 PM</div>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <BookOpen className="h-4 w-4 mt-0.5 text-amber-500" />
                              <div>
                                <div className="font-medium">BIS303: Information Systems Security</div>
                                <div className="text-sm text-slate-600">Spring 2023 • TTh 3:00-4:30 PM</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Past Courses</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                              <BookOpen className="h-4 w-4 mt-0.5 text-slate-500" />
                              <div>
                                <div className="font-medium">BIS101: Introduction to Business Information Systems</div>
                                <div className="text-sm text-slate-600">Fall 2022</div>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <BookOpen className="h-4 w-4 mt-0.5 text-slate-500" />
                              <div>
                                <div className="font-medium">BIS202: Business Process Modeling</div>
                                <div className="text-sm text-slate-600">Fall 2022</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="publications" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Publications</CardTitle>
                      <CardDescription>Research papers and publications</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-b pb-4">
                          <h3 className="font-medium">Modern Database Systems in Business</h3>
                          <p className="text-sm text-slate-600">
                            International Journal of Business Information Systems, 2023
                          </p>
                          <p className="text-sm mt-2">
                            This paper explores the implementation challenges and benefits of modern database systems in
                            enterprise environments.
                          </p>
                        </div>
                        <div className="border-b pb-4">
                          <h3 className="font-medium">Data Analytics for Decision Support</h3>
                          <p className="text-sm text-slate-600">Journal of Business Intelligence, 2022</p>
                          <p className="text-sm mt-2">
                            A comprehensive analysis of how data analytics tools enhance business decision-making
                            processes.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Security Challenges in Enterprise Information Systems</h3>
                          <p className="text-sm text-slate-600">Conference on Information Systems Security, 2021</p>
                          <p className="text-sm mt-2">
                            This paper addresses emerging security challenges in enterprise information systems and
                            proposes mitigation strategies.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="schedule" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Weekly Schedule</CardTitle>
                      <CardDescription>Office hours and class schedule</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                          <div key={day} className="border-b pb-4 last:border-0 last:pb-0">
                            <h3 className="font-medium mb-2">{day}</h3>
                            <ul className="space-y-2">
                              {day === "Monday" || day === "Wednesday" || day === "Friday" ? (
                                <>
                                  <li className="flex items-start gap-3">
                                    <Calendar className="h-4 w-4 mt-0.5 text-amber-500" />
                                    <div>
                                      <div className="text-sm font-medium">BIS201: Database Management Systems</div>
                                      <div className="text-xs text-slate-500">10:00 AM - 11:30 AM • Room 201</div>
                                    </div>
                                  </li>
                                  <li className="flex items-start gap-3">
                                    <User className="h-4 w-4 mt-0.5 text-amber-500" />
                                    <div>
                                      <div className="text-sm font-medium">Office Hours</div>
                                      <div className="text-xs text-slate-500">2:00 PM - 4:00 PM • Room 305</div>
                                    </div>
                                  </li>
                                </>
                              ) : (
                                <>
                                  <li className="flex items-start gap-3">
                                    <Calendar className="h-4 w-4 mt-0.5 text-amber-500" />
                                    <div>
                                      <div className="text-sm font-medium">BIS305: Systems Analysis and Design</div>
                                      <div className="text-xs text-slate-500">1:00 PM - 2:30 PM • Room 203</div>
                                    </div>
                                  </li>
                                  <li className="flex items-start gap-3">
                                    <Calendar className="h-4 w-4 mt-0.5 text-amber-500" />
                                    <div>
                                      <div className="text-sm font-medium">BIS303: Information Systems Security</div>
                                      <div className="text-xs text-slate-500">3:00 PM - 4:30 PM • Room 205</div>
                                    </div>
                                  </li>
                                </>
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
