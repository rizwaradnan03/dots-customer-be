import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageService {
    constructor(private readonly prisma: PrismaService) { }

    async getImage(fileName: string) {
        return await this.prisma.images.findFirst({
            where: { fileName }
        })
    }

    async getUrlImage() {
        return await this.prisma.images.findMany()
    }
}
