import { customers as CustomerModel} from "@prisma/client";

export class CustomerEntity implements CustomerModel {
    id: string;
    fullName: string;
    identityNumber: string;
    email: string;
    motherMaidenName: string;
    referralCode: string;
    birthPlace: string;
    birthDate: Date;
    status: number;
    lastSyncedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    createdBy: string;
    updatedBy: string;
    deletedBy: string;
    
    // externalId: string;
    // identityType: string;
    // phoneNumber: string;
    // mobileNumber: string;
    // gender: string;
    // address: string;
    // subdistrict: string;
    // district: string;
    // dati2Code: string;
    // identityPhotoUrl: string;
    // selfiePhotoUrl: string;
}