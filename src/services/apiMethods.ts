import api from './api';

export const createOrUpdateEntity = async <T extends { id?: string }>(
  initialData: T,
  newData: T,
  entity: string,
): Promise<T> => {
  console.log(newData);
  const reponse = initialData.id
    ? await api.put(`/${entity}/${initialData.id}`, newData)
    : await api.post(`/${entity}`, newData);

  return reponse.data;
};
