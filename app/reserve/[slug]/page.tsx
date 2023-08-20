import Link from "next/link";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";
import Form from "./components/Form";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Reserve at Jollibee | Online Reservation',
}

export default function Reserve() {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <div className="max-w-screen-2xl m-auto bg-white">
                <NavBar />
                <div className="border-t h-screen">
                <div className="py-9 w-3/5 m-auto">
                    <Header />
                    <Form />
                </div>
                </div>
            </div>
        </main>
    );
}