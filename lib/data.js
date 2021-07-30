import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import sortByDate from '../util/sortByDate';

const contentDirectory = path.join(process.cwd(), '_content');

function getAllPosts() {
  const allPosts = fs.readdirSync(contentDirectory);
  return allPosts
    .map((fileName) => {
      const slug = fileName.replace('.md', '');
      const fileContents = fs.readFileSync(path.join(contentDirectory, fileName), 'utf-8');
      const { data, content } = matter(fileContents);

      return {
        data,
        content,
        slug,
      };
    })
    .sort(sortByDate);
}

export default getAllPosts;
