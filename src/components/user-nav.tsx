// "use client"
// import { LogOut, MessageSquare, User, Settings, Bell } from "lucide-react"
// import { useState } from "react"
// // import Link from "next/link"

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@radix-ui/themes";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { LogOut, MessageSquare, User, Settings, Bell } from "lucide-react";
import { Button } from "@radix-ui/themes";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function UserNav() {
  const [messagesOpen, setMessagesOpen] = useState(false)
  // const [notificationsOpen, setNotificationsOpen] = useState(false)

  return (
    <div className="flex items-center gap-4 bg-white">

      <Sheet open={messagesOpen} onOpenChange={setMessagesOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="2" className="relative">
            <MessageSquare className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[10px] font-medium text-white">
              5
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Messages</SheetTitle>
            <SheetDescription>View and manage your messages</SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="read">Read</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4 space-y-4 h-[400px] overflow-y-auto pr-2">
                {[
                  {
                    name: "Dean Williams",
                    message: "Please submit the course outline for next semester by Friday.",
                    time: "2 hours ago",
                    read: false,
                  },
                  {
                    name: "Sarah Johnson",
                    message: "I have a question about the final project requirements.",
                    time: "Yesterday",
                    read: false,
                  },
                  {
                    name: "Academic Affairs",
                    message: "Reminder: Faculty meeting on Thursday at 2 PM.",
                    time: "2 days ago",
                    read: true,
                  },
                  {
                    name: "Michael Chen",
                    message: "Thank you for the feedback on my assignment.",
                    time: "3 days ago",
                    read: true,
                  },
                  {
                    name: "IT Department",
                    message: "Your request for additional software has been approved.",
                    time: "1 week ago",
                    read: true,
                  },
                ].map((message, i) => (
                  <div
                    key={i}
                    className={cn("rounded-lg border p-3", message.read ? "bg-white" : "bg-amber-50 border-amber-200")}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-sm">{message.name}</h4>
                      <span className="text-xs text-slate-500">{message.time}</span>
                    </div>
                    <p className="text-sm text-slate-600">{message.message}</p>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="unread" className="mt-4 space-y-4 h-[400px] overflow-y-auto pr-2">
                {[
                  {
                    name: "Dean Williams",
                    message: "Please submit the course outline for next semester by Friday.",
                    time: "2 hours ago",
                  },
                  {
                    name: "Sarah Johnson",
                    message: "I have a question about the final project requirements.",
                    time: "Yesterday",
                  },
                ].map((message, i) => (
                  <div key={i} className="rounded-lg border p-3 bg-amber-50 border-amber-200">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-sm">{message.name}</h4>
                      <span className="text-xs text-slate-500">{message.time}</span>
                    </div>
                    <p className="text-sm text-slate-600">{message.message}</p>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="read" className="mt-4 space-y-4 h-[400px] overflow-y-auto pr-2">
                {[
                  {
                    name: "Academic Affairs",
                    message: "Reminder: Faculty meeting on Thursday at 2 PM.",
                    time: "2 days ago",
                  },
                  {
                    name: "Michael Chen",
                    message: "Thank you for the feedback on my assignment.",
                    time: "3 days ago",
                  },
                  {
                    name: "IT Department",
                    message: "Your request for additional software has been approved.",
                    time: "1 week ago",
                  },
                ].map((message, i) => (
                  <div key={i} className="rounded-lg border p-3">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-sm">{message.name}</h4>
                      <span className="text-xs text-slate-500">{message.time}</span>
                    </div>
                    <p className="text-sm text-slate-600">{message.message}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="2" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[10px] font-medium text-white">
              3
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Notifications</SheetTitle>
            <SheetDescription>Your recent notifications</SheetDescription>
          </SheetHeader>
          <div className="py-4 h-[400px] overflow-y-auto pr-2 ">
            {[
              {
                title: "Course Update",
                message: "New materials added to BIS201: Database Management Systems",
                time: "10 minutes ago",
              },
              {
                title: "Assignment Due Soon",
                message: "Final Project Submission is due in 2 days",
                time: "1 hour ago",
              },
              {
                title: "Student Message",
                message: "Sarah Johnson has sent you a new message",
                time: "3 hours ago",
              },
              {
                title: "Faculty Meeting",
                message: "Reminder: Faculty meeting tomorrow at 2 PM",
                time: "Yesterday",
              },
              {
                title: "System Update",
                message: "EduSync will undergo maintenance this weekend",
                time: "2 days ago",
              },
            ].map((notification, i) => (
              <div key={i} className="rounded-lg border p-3 mb-3">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-sm">{notification.title}</h4>
                  <span className="text-xs text-slate-500">{notification.time}</span>
                </div>
                <p className="text-sm text-slate-600">{notification.message}</p>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback className="bg-amber-100 text-amber-800">PD</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Prof. Davis</p>
              <p className="text-xs leading-none text-muted-foreground">p.davis@edusync.edu</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <a href="/profile">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/settings">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a href="/">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}

// Import missing icon
