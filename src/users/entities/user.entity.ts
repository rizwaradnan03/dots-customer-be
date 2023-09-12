import { users as UserModel } from "@prisma/client";

export class UserEntity implements UserModel {
    id: string
    isActive: boolean
    email: string
    emailConfirmedAt: Date
    password: string
    firstName: string
    lastName: string
    username: string
    createdAt: Date
    deleteAt: Date           
    accountOfficerId: string 
    clientType: string
    customerId: string
    tenantId: number         
    branchId: string         
    tenantsId: number
    customersId: string
}