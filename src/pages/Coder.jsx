import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Coder = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const showData = async () => {
    try {
      setLoading(true)

      const response = await axios.get(
        'https://alfa-leetcode-api.onrender.com/chirag567890/solved'
      )

      console.log(response.data)
      setData(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <h1 className="mb-3 text-center text-4xl font-bold">
          DevPulse
        </h1>

        <p className="mb-8 text-center text-slate-400">
          LeetCode Developer Stats
        </p>

        {/* Show Button */}
        <div className="flex justify-center">
          <button
            onClick={showData}
            disabled={loading}
            className="
              rounded-xl
              bg-indigo-600
              px-6
              py-3
              font-semibold
              transition
              hover:bg-indigo-500
              active:scale-95
              disabled:opacity-50
            "
          >
            {loading ? 'Loading...' : 'Show LeetCode Stats'}
          </button>
        </div>

        {/* Data */}
        {data && (
          <div className="mt-10">

            <h2 className="mb-6 text-2xl font-bold">
              LeetCode Stats
            </h2>

            <div
              className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >

              {/* Total */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                "
              >
                <p className="text-sm text-slate-400">
                  Total Solved
                </p>

                <h3 className="mt-2 text-4xl font-bold text-indigo-400">
                  {data.solvedProblem}
                </h3>
              </div>

              {/* Easy */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                "
              >
                <p className="text-sm text-slate-400">
                  Easy
                </p>

                <h3 className="mt-2 text-4xl font-bold text-green-400">
                  {data.easySolved}
                </h3>
              </div>

              {/* Medium */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                "
              >
                <p className="text-sm text-slate-400">
                  Medium
                </p>

                <h3 className="mt-2 text-4xl font-bold text-yellow-400">
                  {data.mediumSolved}
                </h3>
              </div>

              {/* Hard */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                "
              >
                <p className="text-sm text-slate-400">
                  Hard
                </p>

                <h3 className="mt-2 text-4xl font-bold text-red-400">
                  {data.hardSolved}
                </h3>
              </div>

            </div>

            {/* Raw API Response */}
            <div
              className="
                mt-8
                rounded-2xl
                border
                border-white/10
                bg-black/30
                p-6
              "
            >
              <h3 className="mb-4 font-semibold">
                API Response
              </h3>

              <pre className="overflow-x-auto text-sm text-slate-400">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>

          </div>
        )}

        {/* Back */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="text-indigo-400 hover:underline"
          >
            ← Go back to Home
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Coder
