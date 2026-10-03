
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const submitHandler = async () => {
    try {
      setLoading(true)

      const response = await axios.get(
        'https://picsum.photos/v2/list?page=2&limit=12'
      )

      setData(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10
                      bg-slate-950/70 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center
                        justify-between px-6 py-4">

          <Link
            to="/"
            className="group text-2xl font-black tracking-tight"
          >
            Pic
            <span className="bg-gradient-to-r from-indigo-400
                             to-purple-400 bg-clip-text text-transparent">
              Flow
            </span>

            <span className="ml-1 inline-block h-2 w-2 rounded-full
                             bg-indigo-400 transition-all
                             group-hover:scale-150" />
          </Link>

          <div className="flex items-center gap-2">

            <Link
              to="/"
              className="rounded-lg px-4 py-2 text-sm font-medium
                         text-slate-300 transition-all duration-200
                         hover:bg-white/10 hover:text-white
                         active:scale-95"
            >
              Gallery
            </Link>
            <Link
              to="/coder"
              className="rounded-lg px-4 py-2 text-sm font-medium
                         text-slate-300 transition-all duration-200
                         hover:bg-white/10 hover:text-white
                         active:scale-95"
            >
              CODOLIO
            </Link>
            <Link
              to="/about"
              className="rounded-lg px-4 py-2 text-sm font-medium
                         text-slate-300 transition-all duration-200
                         hover:bg-white/10 hover:text-white
                         active:scale-95"
            >
              About
            </Link>

          </div>
        </div>
      </nav>


      {/* HERO */}
      <section className="relative isolate overflow-hidden">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0
                        -z-10 h-[500px] w-[500px]
                        -translate-x-1/2 rounded-full
                        bg-indigo-600/20 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-28
                        text-center sm:pt-36">

          {/* Badge */}
          <div className="mx-auto mb-6 inline-flex items-center gap-2
                          rounded-full border border-indigo-400/20
                          bg-indigo-400/10 px-4 py-2
                          text-sm text-indigo-300
                          shadow-lg shadow-indigo-500/10">

            <span className="h-2 w-2 animate-pulse rounded-full
                             bg-indigo-400" />

            React Image Explorer
          </div>


          {/* Heading */}
          <h1 className="mx-auto max-w-5xl text-5xl font-black
                         tracking-tight sm:text-6xl md:text-7xl">

            Discover

            <span className="block bg-gradient-to-r
                             from-indigo-400 via-purple-400
                             to-pink-400 bg-clip-text
                             text-transparent">
              beautiful photography.
            </span>

          </h1>


          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base
                        leading-8 text-slate-400 sm:text-lg">
            Explore beautiful random photography through a clean,
            modern interface built with React, Axios and Tailwind CSS.
          </p>


          {/* Button */}
          <button
            onClick={submitHandler}
            disabled={loading}
            className="group relative mt-9 overflow-hidden
                       rounded-xl bg-indigo-500 px-8 py-4
                       font-semibold shadow-2xl
                       shadow-indigo-500/30
                       transition-all duration-300
                       hover:-translate-y-1
                       hover:bg-indigo-400
                       hover:shadow-indigo-500/50
                       active:translate-y-0 active:scale-95
                       disabled:cursor-not-allowed
                       disabled:opacity-60"
          >

            {/* Button shine */}
            <span className="absolute inset-0 -translate-x-full
                             bg-gradient-to-r from-transparent
                             via-white/20 to-transparent
                             transition-transform duration-700
                             group-hover:translate-x-full" />

            <span className="relative">
              {loading ? 'Loading...' : 'Explore Gallery →'}
            </span>

          </button>

        </div>
      </section>


      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        {data.length > 0 && (
          <div className="mb-8 flex flex-col justify-between
                          gap-4 sm:flex-row sm:items-end">

            <div>
              <p className="mb-2 text-sm font-medium uppercase
                            tracking-widest text-indigo-400">
                Collection
              </p>

              <h2 className="text-3xl font-bold">
                Latest Discoveries
              </h2>

              <p className="mt-2 text-slate-500">
                {data.length} photographs found
              </p>
            </div>

            <div className="rounded-full border border-white/10
                            bg-white/5 px-4 py-2 text-sm
                            text-slate-400">
              Updated just now
            </div>

          </div>
        )}


        {/* GRID */}
        <div className="grid grid-cols-1 gap-6
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4">

          {data.map((item) => (

            <article
              key={item.id}
              className="group relative overflow-hidden
                         rounded-2xl border border-white/10
                         bg-white/[0.03]
                         shadow-xl shadow-black/20
                         transition-all duration-500
                         hover:-translate-y-2
                         hover:border-indigo-400/30
                         hover:bg-white/[0.06]
                         hover:shadow-2xl
                         hover:shadow-indigo-500/10"
            >

              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden">

                <img
                  src={item.download_url}
                  alt={item.author}
                  loading="lazy"
                  className="h-full w-full object-cover
                             transition-transform duration-700
                             ease-out
                             group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0
                                bg-gradient-to-t
                                from-black/80 via-black/10
                                to-transparent
                                opacity-70
                                transition-opacity
                                duration-300
                                group-hover:opacity-100" />

                {/* ID badge */}
                <span className="absolute left-4 top-4
                                 rounded-full border
                                 border-white/10
                                 bg-black/40 px-3 py-1
                                 text-xs font-medium
                                 backdrop-blur-md">
                  #{item.id}
                </span>

                {/* Hover icon */}
                <div className="absolute bottom-4 right-4
                                flex h-10 w-10 translate-y-4
                                items-center justify-center
                                rounded-full bg-white/10
                                opacity-0 backdrop-blur-md
                                transition-all duration-300
                                group-hover:translate-y-0
                                group-hover:opacity-100">
                  ↗
                </div>

              </div>


              {/* CARD CONTENT */}
              <div className="p-5">

                <h3 className="truncate font-semibold text-white">
                  {item.author}
                </h3>

                <div className="mt-3 flex items-center
                                justify-between">

                  <span className="text-sm text-slate-500">
                    Photography
                  </span>

                  <span className="text-indigo-400
                                   transition-transform
                                   duration-300
                                   group-hover:translate-x-1">
                    →
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* EMPTY STATE */}
        {data.length === 0 && !loading && (

          <div className="group relative overflow-hidden
                          rounded-3xl border border-dashed
                          border-white/10 bg-white/[0.02]
                          px-6 py-28 text-center
                          transition hover:border-indigo-400/30">

            {/* Background glow */}
            <div className="absolute left-1/2 top-1/2
                            -z-10 h-40 w-40
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full bg-indigo-500/10
                            blur-3xl" />

            <div className="mb-5 text-6xl transition-transform
                            duration-500
                            group-hover:scale-110">
              📷
            </div>

            <h3 className="text-2xl font-bold">
              Your gallery is empty
            </h3>

            <p className="mx-auto mt-3 max-w-md
                          text-slate-500">
              Click the button above to discover a fresh
              collection of photography.
            </p>

          </div>

        )}

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/20">

        <div className="mx-auto flex max-w-7xl flex-col
                        items-center justify-between gap-4
                        px-6 py-8 sm:flex-row">

          <p className="text-sm text-slate-500">
            © 2026 PicFlow
          </p>

          <p className="text-sm text-slate-600">
            React • Axios • Tailwind CSS
          </p>

        </div>

      </footer>

    </div>
  )
}

export default Home
