import { Users as UserModel} from "@prisma/client";

export class UserEntity implements UserModel {
    id: number;
    is_active: boolean;
    email: string;
    email_confirmed_at: Date;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
    created_at: Date;
    delete_at: Date;
    account_officer_id: string;
    client_type: string;
    customer_id: number;
    tenant_id: number;
    branch_id: string;
}
