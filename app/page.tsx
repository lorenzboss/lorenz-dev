import Link from "next/link";
import { Header } from "../components/header";

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Welcome to Our Website</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(9)].map((_, index) => (
              <section key={index} className="mb-12">
                <div className="bg-gradient-to-br from-purple-400 to-indigo-600 dark:from-purple-600 dark:to-indigo-800 rounded-lg p-6 shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    Section {index + 1}
                  </h2>
                  <p className="text-gray-100 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button className="bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors duration-300">
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
