import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogginService } from '../../LoggingService.service';
import { PeopleService } from '../../PeopleService.service';

// Import models:
import { Person } from '../../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  // providers: [LogginService]
})
export class FormComponent implements OnInit{

  firstnameInput: string;
  lastnameInput: string;
  index: number;
  editionMode: number;

  constructor(
    private _loggingService: LogginService,
    private _peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this._peopleService.greet.subscribe(

      ( indexChild: number ) => alert( "El índice es: " + indexChild + "." )
    ),
    this._peopleService.passedPersonData.subscribe(

      ( person ) => {

        this.firstnameInput = person.firstname;
        this.lastnameInput = person.lastname;
      }
    )
  }

  ngOnInit(): void {

    // Get back parameter (id) from route link:
    this.index = this.route.snapshot.params['id'];
    this.editionMode = +this.route.snapshot.queryParams['editionMode']; // Ading "+" in the beginning change the variable to integer.

    // If this variable is type "undefined", will be false, otherwise it will be true:
    if( this.index ){

      // Call function to find a person by ID and asign it to a variable type "Person":
      let person: Person = this._peopleService.findPerson( this.index );
      
      // Asign function return to inputs variables:
      this.firstnameInput = person.firstname;
      this.lastnameInput = person.lastname;
    }
  }

  addPerson(){
    
    let person = new Person( this.firstnameInput, this.lastnameInput );

    if( this.editionMode != null && this.editionMode === 1 ){

      this.index = this.route.snapshot.params['id'];

      this._peopleService.editPerson( this.index, person );

    } else {
      
      // Call function to add person:
      this._peopleService.addPerson( person );

      // Clear inputs:
      this.firstnameInput = "";
      this.lastnameInput = "";
    }

    this.router.navigate([ 'people' ]);
  }

  deletePerson(){

    if( this.index != null ){

      this._peopleService.deletePerson( this.index );
    }

    this.router.navigate([ 'people' ]);
  }
}
