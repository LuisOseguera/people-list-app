import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";

// Services:
import { DataServices } from "./data.service";
import { LogginService } from "./LoggingService.service";

// Models:
import { Person } from "./person.model";

@Injectable()
export class PeopleService {

    people: Person[] = [];

    greet = new EventEmitter<number>();
    passedPersonData = new EventEmitter<Person>();

    constructor(
        private _loggingService: LogginService,
        private _dataService: DataServices,
        private router: Router
    ){}

    setPeople( people: Person[] ){

        this.people = people;
    }

    getPeople(){

        return this._dataService.loadPeople();
    }

    addPerson( person: Person ){

        this._loggingService.sendMessageConsole( "Agregamos persona: " + person.firstname + " " + person.lastname );
        this.people.push( person );

        // ???
        if( this.people == null ){

            this.people = []
        }

        this._dataService.savePeople( this.people );
    }

    findPerson( index: number ){

        if( this.people.length == 0 ){

            this.router.navigate([ 'people' ])
        }

        let person: Person = this.people[index];
        return person;
    }

    editPerson( index: number, person: Person ){

        /*
        Normal way to do it:
        this.people[index].firstname = person.firstname;
        this.people[index].lastname = person.lastname;
        */

        // Other way to do it with "JavaScript References":
        let personReference = this.people[index];
        personReference.firstname = person.firstname;
        personReference.lastname = person.lastname;

        this._dataService.modifyPerson( index, person );
    }

    deletePerson( index: number ){

        // Splice method it's for delete:
        this.people.splice( index, 1 );
        this._dataService.deletePerson( index );

        // Save array again to regenerate indexes:
        this.modifyPeople();
    }

    modifyPeople(){

        if( this.people != null ){
            
            this._dataService.savePeople( this.people );
        }
    }
}