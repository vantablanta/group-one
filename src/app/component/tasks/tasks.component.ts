import { Component, OnInit } from '@angular/core';

import { TasksClass } from 'src/app/tasks-class';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

tasks: TasksClass[] = [
  { name :'Go out with friends ',
    description :'Meeting up with  afew friend for drinks ',
    date : new Date(),
    completed: false 
  },
  { name :'Make Supper ',
    description :'Prepare Supper for friends',
    date : new Date(),
    completed: false 
  },
  { name :'Play a game',
    description :'Have game night with rour friends  ',
    date : new Date(),
    completed: false 
  }
]
 checked(){
    
 }



  constructor() { }

  ngOnInit(): void {



  }

  
}
