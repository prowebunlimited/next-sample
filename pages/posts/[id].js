export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    props: { post: data },
  };
};

const Details = ({ post }) => {
  return (
    <div className=''>
      <h1>{post.name}</h1>
      <p>{post.email}</p>
      <p>{post.website}</p>
      <p>{post.address.city}</p>
    </div>
  );
};

export default Details;
