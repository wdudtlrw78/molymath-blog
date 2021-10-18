import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import sortByDate from '../util/sortByDate';

// 현재 프로세스가 실행되는 위치 (절대경로: 최초의 시작점)
const contentDirectory = path.join(process.cwd(), '_content');

export function getAllPosts() {
  // 동기적으로 디렉토리를 읽고 문자열로 반환
  const allPosts = fs.readdirSync(contentDirectory);
  return allPosts
    .map((fileName) => {
      const slug = fileName.replace('.md', '');

      // path.join -> 해당 경로들을 문자열로 받아 단일 경로로 구성한다.
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
