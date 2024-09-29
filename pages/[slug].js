// pages/[slug].js

import { getPostData } from '../js/getMarkdownData'; // Function to fetch data from markdown files
import fs from 'fs';
import path from 'path';

// Define the path to your Markdown files
const postsDirectory = path.join(process.cwd(), 'content/product');

// Fetch all .md files and extract slugs for static paths
export async function getStaticPaths() {
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, ''); // Remove .md extension to get the slug
    return {
      params: { slug }
    };
  });

  return {
    paths,
    fallback: false // Ensure this matches your requirements (true, false, or 'blocking')
  };
}

// Fetch post data based on the slug
export async function getStaticProps({ params }) {
  try {
    const postData = await getPostData(params.slug);
    return {
      props: {
        postData,
      }
    };
  } catch (error) {
    console.error('Error fetching post data:', error);
    return {
      notFound: true // Return 404 if data fetching fails
    };
  }
}

export default function Post({ postData }) {
  return (
    <article>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
