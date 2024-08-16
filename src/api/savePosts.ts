import fs from 'fs';
import path from 'path';

export default async function handler(req: { method: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  try {
    // Fetch the posts from the API
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();


    // Format the posts to match the en.json structure
    const formattedPosts = data.posts.slice(0, 10).map((post: { title: any; body: any; }) => ({
      title: post.title,
      body: post.body
    }));

    // Path to the en.json file
    const filePath = path.join(process.cwd(), 'messages', 'en.json');

    // Read the existing JSON file
    const jsonFile = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(jsonFile);

    // Update the HomePage key with the new posts
    jsonData.HomePage = formattedPosts;

    // Write the updated JSON back to the file
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf8');

    // Respond with success
    res.status(200).json({ message: 'Posts saved successfully!' });
  } catch (error) {
    console.error('Error saving posts:', error);
    res.status(500).json({ message: 'Error saving posts' });
  }
}
