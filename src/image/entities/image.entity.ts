import { Image as ImageModel } from "@prisma/client";

export class ImageEntity implements ImageModel {
    id: string;
    filename: string;
    path: string;
    isOnCarousel: string;
}
