import GetAllPosts from '../components/getAllPosts'
import getPosts from '../scripts/fileSystem';

export default function index({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <GetAllPosts key={post.slug} post={post} />
      ))}
    </div>
    
  )
}

export const getStaticProps = () => {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
};

