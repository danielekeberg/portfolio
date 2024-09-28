// pages/[slug].js (for Next.js dynamic routing)
import { getPostData } from '../js/getMarkdownData'; // Update the path as needed

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  // Return an array of paths with slugs of your .md files
  // Implement logic to get these slugs dynamically from your folder
  const paths = [
    { params: { slug: 'your-first-post' } },
    { params: { slug: 'another-post' } },
  ];

  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <article>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
