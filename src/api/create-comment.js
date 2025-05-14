import { api } from './../lib/axios';

export async function createComment(comment) {

  console.log(api.defaults.withCredentials);
  
  const response = await api.post('/', comment);

  console.log(response)
}