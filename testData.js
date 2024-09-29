// testData.js
import { getPostData } from './js/getMarkdownData.js'; // Ensure you include the .js extension

(async () => {
  try {
    // Replace 'asd2' with the correct slug of your Markdown file
    const data = await getPostData('asd');
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
})();
