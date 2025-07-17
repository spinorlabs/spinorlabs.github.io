import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Devlog',
  description: 'Read my devlog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-3xl font-[650] tracking-wide text-neutral-700 dark:text-white">Devlog</h1>
      <BlogPosts />
    </section>
  )
}
