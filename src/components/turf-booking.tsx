'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MenuIcon, XIcon, CalendarIcon, ClockIcon, DollarSignIcon } from 'lucide-react'

export default function Component() {
  const [step, setStep] = useState(1)
  const [user, setUser] = useState({ email: '', password: '' })
  const [booking, setBooking] = useState({ turf: '', date: '', time: '', amount: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate credentials here
    setStep(2)
  }

  const handleTurfSelect = (value: string) => {
    setBooking({ ...booking, turf: value, amount: value === 'turf1' ? 100 : 150 })
    setStep(3)
  }

  const handleDateTimeSelect = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    setBooking({
      ...booking,
      date: formData.get('date') as string,
      time: formData.get('time') as string
    })
    setStep(4)
  }

  const handlePayment = () => {
    // In a real app, you would integrate with a payment gateway here
    setStep(5)
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>
        )
      case 2:
        return (
          <RadioGroup onValueChange={handleTurfSelect} className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="turf1" id="turf1" />
              <Label htmlFor="turf1">Turf 1 - $100</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="turf2" id="turf2" />
              <Label htmlFor="turf2">Turf 2 - $150</Label>
            </div>
          </RadioGroup>
        )
      case 3:
        return (
          <form onSubmit={handleDateTimeSelect} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" name="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Select name="time" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">09:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="13:00">01:00 PM</SelectItem>
                  <SelectItem value="15:00">03:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Confirm Date & Time</Button>
          </form>
        )
      case 4:
        return (
          <div className="space-y-4">
            <p className="text-lg font-semibold">Total Amount: ${booking.amount}</p>
            <Button onClick={handlePayment} className="w-full">Pay Now</Button>
          </div>
        )
      case 5:
        return (
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">Booking Confirmed!</h3>
            <p><span className="font-semibold">Turf:</span> {booking.turf}</p>
            <p><span className="font-semibold">Date:</span> {booking.date}</p>
            <p><span className="font-semibold">Time:</span> {booking.time}</p>
            <p><span className="font-semibold">Amount Paid:</span> ${booking.amount}</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Turf Booking System</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Turfs</a>
            <a href="#" className="hover:underline">My Bookings</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
        {isMobileMenuOpen && (
          <nav className="mt-2 flex flex-col space-y-2 md:hidden">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Turfs</a>
            <a href="#" className="hover:underline">My Bookings</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>{step === 1 ? 'Login' : `Step ${step} of 5`}</CardTitle>
            <CardDescription>
              {step === 1 && 'Sign in to book your turf'}
              {step === 2 && 'Select your preferred turf'}
              {step === 3 && 'Choose date and time'}
              {step === 4 && 'Complete your payment'}
              {step === 5 && 'Booking confirmation'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderStepContent()}
          </CardContent>
          <CardFooter>
            {step > 1 && step < 5 && (
              <Button variant="outline" onClick={() => setStep(step - 1)} className="w-full">
                Back
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Turf Booking System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}