import Layout from '../../components/layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function Turfs() {
  const turfs = [
    { 
      id: 1, 
      name: 'Football Turf', 
      description: 'A spacious turf perfect for football matches.', 
      price: 1500,
      image: '/football.jpg?height=300&width=400'
    },
    { 
      id: 2, 
      name: 'Cricket Turf', 
      description: 'A well-maintained turf ideal for cricket practice.', 
      price: 1000,
      image: '/cricket.jpeg?height=300&width=400'
    },
  ]

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Our Turfs</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {turfs.map((turf) => (
          <Card key={turf.id} className="overflow-hidden">
            <Image
              src={turf.image}
              alt={turf.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{turf.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{turf.description}</p>
              <p className="mt-2 font-semibold">Price: Rs.{turf.price}/hour</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  )
}