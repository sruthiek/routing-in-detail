import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'routing-project';

  constructor(private route:Router){}

  ngOnInit(): void {
   
  }

  navigateToContact(){
this.route.navigate(['Contact']);
  }

  studentclick(studentname :string){
this.route.navigate(['/Student',studentname])
  }
  
}
