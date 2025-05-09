"use client"

import type React from "react"
import { useState, useEffect } from "react"

import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface UserNameDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UserNameDialog({ open, onOpenChange }: UserNameDialogProps) {
  const [username, setUsername] = useState("")
  const [hasCheckedStorage, setHasCheckedStorage] = useState(false)

  // Check localStorage on component mount
  useEffect(() => {
    const savedUsername = localStorage.getItem("edusync-username")

    if (savedUsername) {
      setUsername(savedUsername)
      // Close dialog if username exists
      onOpenChange(false)
    }

    setHasCheckedStorage(true)
  }, [onOpenChange])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      // Save username to localStorage
      localStorage.setItem("edusync-username", username.trim())
      // Close the dialog
      onOpenChange(false)
    }
  }

  // Only render the dialog if we've checked localStorage
  if (!hasCheckedStorage) {
    return null
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Welcome to EduSync</DialogTitle>
          <DialogDescription>Please enter your preferred username to personalize your experience.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4 ">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                value={username}
                onChange={(e: any) => setUsername(e.target.value)}
                className="col-span-3"
                autoFocus
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-slate-900 text-white hover:bg-slate-800">
              Continue
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
