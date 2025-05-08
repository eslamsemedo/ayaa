
import { CreditCard, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { MainNav } from "../components/main-nav"
import { UserNav } from "../components/user-nav"
import { Calendar } from "lucide-react"


export default function PaymentsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
            <p className="text-slate-500">View and manage payment information</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
                  <DollarSign className="h-4 w-4 text-slate-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$0.00</div>
                <p className="text-xs text-slate-500">Last updated: May 1, 2023</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">Last Payment</CardTitle>
                  <CreditCard className="h-4 w-4 text-slate-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,250.00</div>
                <p className="text-xs text-slate-500">April 15, 2023</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
                  <Calendar className="h-4 w-4 text-slate-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,250.00</div>
                <p className="text-xs text-slate-500">Due: June 15, 2023</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View your recent payment transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "April 15, 2023",
                    description: "Spring Semester Tuition",
                    amount: "$4,250.00",
                    status: "Completed",
                  },
                  {
                    date: "January 15, 2023",
                    description: "Winter Semester Tuition",
                    amount: "$4,250.00",
                    status: "Completed",
                  },
                  {
                    date: "September 15, 2022",
                    description: "Fall Semester Tuition",
                    amount: "$4,250.00",
                    status: "Completed",
                  },
                ].map((payment, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-medium">{payment.description}</h4>
                      <p className="text-sm text-slate-500">{payment.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{payment.amount}</div>
                      <span className="text-xs text-green-600">{payment.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

// Import missing icon
