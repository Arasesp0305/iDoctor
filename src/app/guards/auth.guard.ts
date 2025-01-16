import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state):Observable<boolean> => {

  let authService = inject(AuthService);
  let routerService = inject(Router);
  let role = route.data['role'];

  return authService.getUserDataAuth().pipe(
    map(({user,person})=>{
      if(user){
        if(person){
          if(person.role && (person.role == role || role =="*")){

            return true;
          }else{
            routerService.navigate(["/home"])
            return false
          }
        }else{
          routerService.navigate(["/login"])
          return false
        }
      }else{
        routerService.navigate(["/login"])
        return false
      }
    }),
    catchError((error,caught)=>{
      routerService.navigate(["/login"])
      return of(false)
    })
  );

};

