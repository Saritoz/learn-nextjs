import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'

export interface PostDetailProps {
  post: any
}

export default function PostDetailPage({ post }: PostDetailProps) {
  const router = useRouter()

  if (!post) return null

  return (
    <>
      <div>Post Detail Page</div>
      <p>Query: {JSON.stringify(router.query)}</p>
      <p>{post.title}</p>
      <p>{post.author}</p>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('\nGET STATIC PATHS')
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostDetailProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('\nGET STATIC PROPS', context.params?.postId)
  const postId = context.params?.postId
  if (!postId) return { notFound: true }

  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await response.json()

  return {
    props: {
      post: data,
    },
    revalidate: 5
  }
}
