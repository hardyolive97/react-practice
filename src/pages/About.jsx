import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-[#070b14] text-white">

      {/* Navbar */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center
                        justify-between px-6 py-4">

          <Link to="/" className="text-2xl font-bold">
            Pic<span className="text-indigo-400">Flow</span>
          </Link>

          <Link
            to="/"
            className="rounded-lg bg-white/10 px-4 py-2 text-sm
                       transition hover:bg-white/20"
          >
            ← Gallery
          </Link>

        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto flex max-w-3xl flex-col
                       items-center px-6 py-28 text-center">

        <div className="mb-6 rounded-2xl border border-indigo-400/20
                        bg-indigo-400/10 p-4 text-3xl">
          📸
        </div>

        <h1 className="text-5xl font-bold tracking-tight">
          About <span className="text-indigo-400">PicFlow</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          PicFlow is a simple image discovery application built
          to practice modern React development, API integration,
          routing and responsive UI design.
        </p>

        <div className="mt-10 grid w-full grid-cols-3 gap-4">

          <div className="rounded-2xl border border-white/10
                          bg-white p-5">
            <p className="text-2xl font-bold">React</p>
            <p className="mt-1 text-sm text-slate-500">Frontend</p>
          </div>

          <div className="rounded-2xl border border-white/10
                          bg-white p-5">
            <p className="text-2xl font-bold">Axios</p>
            <p className="mt-1 text-sm text-slate-500">API</p>
          </div>

          <div className="rounded-2xl border border-white/10
                          bg-white p-5">
            <p className="text-2xl font-bold">Tailwind</p>
            <p className="mt-1 text-sm text-slate-500">UI</p>
          </div>

        </div>

      </main>

    </div>
  )
}

export default About