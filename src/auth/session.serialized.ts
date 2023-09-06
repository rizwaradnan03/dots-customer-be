import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionSerialized extends PassportSerializer {
    serializeUser(user: any, done: (err : Error, user: any) => void) {
        done(null, user);
    }
    deserializeUser(payload: any, done:  (err : Error, user: any) => void): any {
        done(null, payload);
    }
}