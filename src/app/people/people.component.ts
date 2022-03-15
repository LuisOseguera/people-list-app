import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../PeopleService.service';

// Imported models:
import { Person } from '../person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  title = 'Listado de Personas';
  people: Person[] = [];

  constructor(
    private _peopleService: PeopleService,
    private router: Router
  ){}

  ngOnInit(): void {
      
    // this.people = this._peopleService.people;
    this._peopleService.getPeople().subscribe(
      
      ( people: Person[] ) => {
        
        this.people = people;
        this._peopleService.setPeople( people );
      }
    );
  }

  add(){

    this.router.navigate([ 'people/add' ]);
  }
}