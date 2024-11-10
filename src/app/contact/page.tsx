import Layout from '../../components/layout'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4 max-w-md mx-auto">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Input id="message" required />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </Layout>
  )
}