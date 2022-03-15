import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from '../../PeopleService.service';

// Import models:
import { Person } from '../../person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
  @Input() indexChild: number;

  constructor(
    private _peopleService: PeopleService
  ) { }

  ngOnInit(): void {
  }

  emitGreeting(){
    this._peopleService.greet.emit( this.indexChild );
  }

  passPersonData(){
    this._peopleService.passedPersonData.emit( this.person );
  }
}
