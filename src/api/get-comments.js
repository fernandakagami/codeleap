import { api } from './../lib/axios';

export async function getComments() {
  const response = await api.get('/careers');

  console.log('response', response);

  return response.data;
}