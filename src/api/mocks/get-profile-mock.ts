import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'any_id',
      name: 'Bertoldo Klinger',
      email: 'bertoldokbrj@gmail.com',
      phone: '129381923819',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
