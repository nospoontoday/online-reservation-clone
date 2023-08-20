import NavBar from './components/NavBar'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Online Reservation',
}

export default function Home() {

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <RestaurantCard />
          </div>
        </main>
      </main>
    </main>
  )
}
