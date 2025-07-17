import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-5xl font-[650] tracking-wider px-5 pt-3 pb-5 shadow-md">
        SpinorLabs
      </h1>
      <p className="mb-4 text-base font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
        {`Exploring ML workflows and automation tooling in development.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}