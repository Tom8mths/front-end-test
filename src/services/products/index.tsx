import {AxiosInstance} from 'axios';

type HttpGetProductsResponse = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export async function httpGetProducts(api: AxiosInstance) {
  const {data} = await api.get<HttpGetProductsResponse[]>(`/products`);

  return data;
}
