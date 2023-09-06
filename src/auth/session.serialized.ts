// import { PassportSerializer } from '@nestjs/passport';
// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service'; 
// import { AuthService } from './auth.service';

// @Injectable()
// export class SessionSerialized extends PassportSerializer {
//   constructor(
//     private readonly authService: AuthService) {
//     super();
//   }

//   serializeUser(user: any, done: (err: Error, user: any) => void) {
//     done(null, user);
//   }

//   deserializeUser(payload: any, done: (err: Error, user: any) => void): any {
//     const userId = payload.id;
//     this.authService.validateUser(userId)
//       .then((user) => {
//         done(null, user);
//       })
//       .catch((err) => {
//         done(err, null);
//       });
//   }
  
// }
