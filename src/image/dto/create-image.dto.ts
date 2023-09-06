import { OmitType } from "@nestjs/mapped-types";
import { ImageEntity } from "../entities/image.entity";

export class CreateImageDto extends OmitType(ImageEntity, [
    'id'
]) {
    filename: string;
    path: string;
    isOnCarousel: string;
}
