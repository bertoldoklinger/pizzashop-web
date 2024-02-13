import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'any_id',
    name: 'Pizza Shop',
    description: 'Managed Restaurant Description',
    phone: '129381923819',
    managerId: 'custom_manager_id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
