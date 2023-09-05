// base-response.dto.ts

import { HttpCode } from '@nestjs/common';

export class BaseResponse<T> {
  constructor(
    public httpCode: number,
    public status: string,
    public message: string,
    public data: T,
    public metadata?: any,
  ) {}
}
