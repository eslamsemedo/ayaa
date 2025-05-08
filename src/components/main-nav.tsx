
import { useState } from "react"
// import Link from "next/link"
import {
  Award,
  BookOpen,
  Calendar,
  FileText,
  GraduationCap,
  Home,
  Library,
  Menu,
  Settings,
  User,
  X,
} from "lucide-react"

import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { cn } from "../lib/utils"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Courses",
    href: "/courses",
    icon: BookOpen,
  },
  {
    title: "Achievements",
    href: "/achievements",
    icon: Award,
  },
  {
    title: "Quizzes",
    href: "/quizzes",
    icon: FileText,
  },
  {
    title: "Assignments",
    href: "/assignments",
    icon: GraduationCap,
  },
  {
    title: "Academic Records",
    href: "/records",
    icon: FileText,
  },
  {
    title: "Academic Calendar",
    href: "/academic-calendar",
    icon: Calendar,
  },
  {
    title: "Student Resources",
    href: "/student-resources",
    icon: Library,
  },
  {
    title: "Payments",
    href: "/payments",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function MainNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <div className="flex items-center gap-2 border-b pb-4 pt-2">
            <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-full p-2">
              <span className="text-lg font-bold text-slate-900">E</span>
            </div>
            <span className="text-xl font-bold">EduSync</span>
            <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-2 py-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100",
                  item.href === "/dashboard" && "bg-slate-100 font-medium",
                )}
              >
                <item.icon className="h-5 w-5 text-amber-600" />
                {item.title}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="hidden md:flex items-center gap-2">
        <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-full p-1.5 mr-1">
          <span className="text-sm font-bold text-slate-900">E</span>
        </div>
        <span className="text-lg font-bold mr-6">EduSync</span>

        <nav className="flex items-center gap-5">
          {navItems.slice(0, 5).map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900",
                item.href === "/dashboard" && "text-amber-600",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </a>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1">
                <Menu className="h-4 w-4" />
                <span>More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navItems.slice(5).map((item, index) => (
                <DropdownMenuItem key={index} asChild>
                  <a href={item.href} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-amber-600" />
                    {item.title}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </>
  )
}
