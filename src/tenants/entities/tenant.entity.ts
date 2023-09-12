import { tenants as TenantModel } from "@prisma/client";

export class TenantEntity implements TenantModel{
    id: number;
    public_id: string;
    name: string;
    database_schema_name: string;
    core_type: string;
    core_database_type: string;
    core_database_dsn: string;
    logo_url_base64: string;
}
