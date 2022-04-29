import {setupAPIClient} from '../../services/api';

type HttpGetProductDetailResponse = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stockQty: number;
};
export const api = setupAPIClient();

export async function httpGetProductDetails(id) {
  const {data} = await api.get<HttpGetProductDetailResponse[]>(
    `/products/${id}`,
  );

  return data;
}
