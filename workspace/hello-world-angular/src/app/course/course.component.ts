import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'courses',
  template: `<h2>{{"Title:" + title}} </h2>
             {{ course.title1 | uppercase }} <br/>
             <button class="btn btn-primary" [class.active]="isActive">Save</button>
             <button [style.backgroundColor]="isActive ? 'blue' : 'red' ">Save1</button> 
             <button (click)="onSave()">Save3</button> 
             <input (keyup.enter)="onKeyUp($event)"/>    
            <ul>
                 <li *ngFor="let author of authors">
                 {{ author }} 
                 </li>
            </ul>
  `
})
export class CourseComponent implements OnInit {
  
  isActive=false;

  course = {
    title1:"test",
    rating:123
  }

  onKeyUp($event){
    if($event.keyCode === 13 ) console.log('enter was pressed')
  }

  onSave(){
    console.log('Button clicked')
  }

  title="3 Authors"
  authors
  constructor(service : AuthorService) { 
     this.authors = service.getAuthor()
  }

  ngOnInit() {
  }

}
