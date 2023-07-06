import Link from "next/link"

export default function Home() {
  return (
  <>
  <head>
    <link rel="stylesheet" href="styles.css"></link>
  </head>
  <header className="flex justify-between items-center mb-4">
    <h1 className="text-4xl">Welcome to this website!</h1>
    <Link 
      href="/new"
      // all this makes the button look fancy and all that
      className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
    >
      Click here to be taken to a new page
    </Link>
  </header>
  <div className="container"></div>
  </>
  )
}