import { Customers as CustomerModel } from "@prisma/client";

export class CustomerEntity implements CustomerModel {
    id: number;
    external_id: string;
    full_name: string;
    identity_number: string;
    identity_type: string;
    email: string;
    phone_number: string;
    mobile_number: string;
    gender: string;
    address: string;
    district: string;
    subdistrict: string;
    mother_maiden_name: string;
    dati2_code: string;
    identity_photo_url: string;
    selfie_photo_url: string;
    birth_place: string;
    birth_date: Date;
    status: number;
    last_synced_at: Date;

    created_by: number;
    updated_by: number;
    deleted_by: number;

    created_at: Date;
    updated_at: Date;
    delete_at: Date;
}
