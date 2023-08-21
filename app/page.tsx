import NavBar from './components/NavBar'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import { PrismaClient } from '@prisma/client';
import getQueryClient from '../util/getQueryClient'
import { dehydrate } from "@tanstack/query-core"
import Hydrate from '../util/hydateClient'
const prisma = new PrismaClient();

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Online Reservation',
}

const getRestaurants = async () => {
  const restaurants: any[] = await prisma?.restaurant.findMany()
  return restaurants
}

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['restaurants'], getRestaurants)
  const dehydratedState = dehydrate(queryClient)

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <Hydrate state={dehydratedState}>
              <RestaurantCard />
            </Hydrate>
          </div>
        </main>
      </main>
    </main>
  )
}
