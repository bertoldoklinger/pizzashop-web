import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsProps,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetaisMock = http.get<
  GetOrderDetailsProps,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '98139289382193',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: { name: 'Pizza Frango' },
        quantity: 2,
      },
      {
        id: 'order-item-1',
        priceInCents: 3000,
        product: { name: 'Pizza Pepperoni' },
        quantity: 1,
      },
    ],
  })
})
