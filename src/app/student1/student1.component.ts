import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student1',
  templateUrl: './student1.component.html',
  styleUrls: ['./student1.component.scss']
})
export class Student1Component implements OnChanges {
public studentname:string='';

public studaddr:string='';



constructor(public activateroute:ActivatedRoute){
activateroute.params.subscribe((param:any)=>{
  this.studentname=param.studentname;
  this.studaddr=param.studaddr;
 
})
}

ngOnChanges(changes:SimpleChanges){
  console.log("changes",changes);
  
}

}
