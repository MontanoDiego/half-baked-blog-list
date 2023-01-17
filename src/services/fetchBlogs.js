import { checkError, client } from './client.js';

export async function fetchBlogs() {
  const response = await client.from('farm_animals').select('*');
  return checkError(response);
}