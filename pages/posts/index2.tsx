import { MainLayout } from '@/components/layouts'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'

export interface PostListPageProps {
  posts: any[]
}

export default function PostListPage({ posts }: PostListPageProps) {
  return (
    <MainLayout>
      <div>Post List Page</div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              Title:{post.title}
              <br />
              <Link href={`/posts/${post.id}`}>
                <a>More Info</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()
  return {
    props: {
      posts: data.data.map((item: any) => {
        return { title: item.title, id: item.id, author: item.author }
      }),
    },
  }
}
