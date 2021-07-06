import AppLayout from '../components/AppLayout';
import getAllPosts from '../lib/data';

const Books = ({ posts }) => {
  return (
    <AppLayout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <div style={{ fontSize: '24px' }}>준비 중입니다!!</div>
      </div>
    </AppLayout>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date,
        content,
        slug,
      })),
    },
  };
}

export default Books;
