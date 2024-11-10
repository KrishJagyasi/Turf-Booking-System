import Layout from '../components/layout'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="text-center space-y-6">
        
        <h1 className="text-4xl font-bold">Welcome to Turf Booking System</h1>
        <p className="text-xl">Find and book the perfect turf for your game!</p>
        <Button asChild>
          <Link href="/booking">Book Now</Link>
        </Button>
      </div>
    </Layout>
  )
}