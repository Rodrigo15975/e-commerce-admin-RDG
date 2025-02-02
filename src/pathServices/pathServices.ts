/* eslint-disable no-unused-vars */
export const PathServices = {
  URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
  URL_FILES: process.env.NEXT_PUBLIC_API_FILES || 'http://localhost:8080',
  ROLE: '/role',
  USER: '/user',
  PROFILE: '/profile/token',
  AUTH: '/auth/login',
  VERIFY_TOKEN: '/auth/verify-token',
  LOGOUT: '/auth/logout',
  CATEGORIES: '/category',
  CATEGORIESDISCOUNT: '/category/discount',
  PRODUCTS: '/products',
  FILES: '/files',
  COUPON: '/coupon',
  CLIENTS: '/clients',
} as const
