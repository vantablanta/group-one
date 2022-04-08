import { Component, OnInit } from '@angular/core';

import { TasksClass } from 'src/app/tasks-class';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

tasks: TasksClass[] = [
  { name :'Go out with firends ',
    description :'Metting up with  afew friend sfor drinks ',
    date : new Date()
  },
  { name :'Make Supper ',
    description :'Prepare Supper for friends  ',
    date : new Date()
  },
  { name :'Play a game',
    description :'Have game night with rour friends  ',
    date : new Date()
  }
]




  constructor() { }

  ngOnInit(): void {



  }

  
}
