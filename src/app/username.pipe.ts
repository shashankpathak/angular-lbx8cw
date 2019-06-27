import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UserPipe implements PipeTransform {

  transform(users: any, searchText: any): any {
    if (searchText == null) return users;
    
    return users.filter( user => user.login.toLowerCase().indexOf(searchText.toLowerCase()) > -1    
      
    )
  }

}