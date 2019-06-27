import { Component, OnInit } from '@angular/core';
import {userDataService} from './user.service'
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name : "sort"
})

export class ArraySortPipe implements PipeTransform{
  transform(array :any[], field :string) :any[]{
    array.sort((a:any, b:any) => {
      if(a[field]<b[field]){
        return -1;
        
      }
      else if(a[field]>b[field]){
        return 1;
        }
      else {
        return 0;
        }
    });
    return array;
  }

}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  users : Array<any> = [];
  repo : Array<any> =[];
  usersc : Array<any> =[];
  language : Array<any> =[];
  count=0;
  isDesc :boolean =false;
  column : string ='login';
  p: number =1;
  order="login";
  collapse=true;
  showLoading :boolean=false;
  ascending = true;
  dropdown=1;
  sortarr=[{'id':1,name: 'Sort by Name(A-Z)'}, {'id':2,name: 'Sort by Name(Z-A)'}] 

  constructor(private userService : userDataService){}
  ngOnInit(){
    this.userService.getUsers().subscribe((res:any)=>
    {
      this.showLoading=true;
      this.users=res;
      this.showLoading=false;
      this.repo=this.users;
      console.log(typeof (this.users))
    });
    this.userService.getUsers().subscribe((res:any)=>
    {
      this.usersc=res;
      this.count=this.usersc.length;
    });
  }
  
  sort(){
    console.log("sha"+this.dropdown)
    if (this.dropdown==1)
      this.ascending =true;
      else
      this.ascending =false;
    
  }
}
