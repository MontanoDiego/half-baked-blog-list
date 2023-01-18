import { checkError, client } from './client.js';

export async function fetchBlogs() {
  const response = await client.from('blogs').select('*');
  return checkError(response);
}