import { customers as CustomerModel} from "@prisma/client";

export class CustomerEntity implements CustomerModel {
    id: string;
    externalId: string;
    fullName: string;
    identityNumber: string;
    identityType: string;
    email: string;
    phoneNumber: string;
    mobileNumber: string;
    gender: string;
    address: string;
    subdistrict: string;
    district: string;
    motherMaidenName: string;
    referralCode: string;
    dati2Code: string;
    identityPhotoUrl: string;
    selfiePhotoUrl: string;
    birthPlace: string;
    birthDate: Date;
    status: number;
    lastSyncedAt: Date;

    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;

    createdById: string;
    updatedById: string;
    deletedById: string;

}