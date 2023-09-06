<<<<<<< HEAD
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";

@Injectable()
export class AuthenticatedGuard implements CanActivate { 
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();

        return request.isAuthenticated();
    } 
}
=======
// import React from 'react'

// const authenticated.guard = () => {
//   return (
//     <div>authenticated.guard</div>
//   )
// }

// export default authenticated.guard
>>>>>>> f83e8ed1a6ad628691f11c9d817f74321a38bb41
