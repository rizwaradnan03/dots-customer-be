import { Users as UserModel} from "@prisma/client";

export class UserEntity implements UserModel {
    id: string;
    isActive: boolean;
    email: string;
    emailConfirmedAt: Date;
    username: string;
    password: string;
    lastName: string;
    firstName: string;
    createdAt: Date;
    deleteAt: Date;
    accountOfficerId: string;
    clientType: string;
    customerId: string;
    tenantId: number;
    branchId: string;
    tenantsId: number | null;
    customersId: string | null; 
}