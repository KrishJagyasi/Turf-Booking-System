'use client'

import { useState } from 'react'
import Layout from '../../components/layout'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Booking() {
  const [step, setStep] = useState(1)
  const [user, setUser] = useState({ email: '', Number: '' })
  const [booking, setBooking] = useState({ turf: '', date: '', time: '', amount: 0 })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate credentials here
    setStep(2)
  }

  const handleTurfSelect = (value: string) => {
    setBooking({ ...booking, turf: value, amount: value === 'Football Turf' ? 1500 : 1000 })
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
              <Label htmlFor="Number">Number</Label>
              <Input
                id="Number"
                type="Number"
                required
                value={user.Number}
                onChange={(e) => setUser({ ...user, Number: e.target.value })}
              />
            </div>
            <Button type="submit" className="w-full">Enter</Button>
          </form>
        )
      case 2:
        return (
          <RadioGroup onValueChange={handleTurfSelect} className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Football Turf" id="Football Turf" />
              <Label htmlFor="Football Turf">Football Turf - Rs.1500</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Cricket Turf" id="Cricket Turf" />
              <Label htmlFor="Cricket Turf">Cricket Turf - Rs.1000</Label>
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
                  <SelectItem value="17:00">05:00 PM</SelectItem>
                  <SelectItem value="19:00">07:00 PM</SelectItem>
                  <SelectItem value="21:00">09:00 PM</SelectItem>
                  <SelectItem value="23:00">11:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Confirm Date & Time</Button>
          </form>
        )
      case 4:
        return (
          <div className="space-y-4">
            <p className="text-lg font-semibold">Total Amount: Rs.{booking.amount}</p>
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
            <p><span className="font-semibold">Amount Paid:</span> Rs.{booking.amount}</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Layout>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>{step === 1 ? 'Enter Details' : `Enter Turf`}</CardTitle>
          <CardDescription>
            {step === 1 && 'Enter details to book your turf'}
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
    </Layout>
  )
}