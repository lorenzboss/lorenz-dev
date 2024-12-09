import Link from "next/link";
import { Header } from "../components/header";

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      <main className="pb-16 pt-24">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-4xl font-bold">Welcome to Our Website</h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(9)].map((_, index) => (
              <section key={index} className="mb-12">
                <div className="rounded-lg bg-gradient-to-br from-purple-400 to-indigo-600 p-6 shadow-lg dark:from-purple-600 dark:to-indigo-800">
                  <h2 className="mb-4 text-2xl font-semibold text-white">
                    Section {index + 1}
                  </h2>
                  <p className="mb-4 text-gray-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button className="rounded-full bg-white px-4 py-2 text-indigo-600 transition-colors duration-300 hover:bg-indigo-100 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700">
                    Learn More
                  </button>
                  <p className="mt-3">
                    <Link href="#info" className="hover-underline-animation">
                      Read More
                    </Link>
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
