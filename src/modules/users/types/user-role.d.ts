/* eslint-disable no-unused-vars */
export const enum CURRENTROLE {
  DEV = 'DEV',
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE',
}
type Role = keyof typeof CURRENTROLE
