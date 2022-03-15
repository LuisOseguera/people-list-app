import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

// Models:
import { Person } from './person.model';

@Injectable()
export class DataServices {

    constructor(
        private _httpClient: HttpClient,
        private _loginService: LoginService
    ){}

    // Load people:
    loadPeople(){

        // Get token from _loginService:
        const token = this._loginService.getIdToken();

        return this._httpClient.get<any>('https://people-list-15e69-default-rtdb.firebaseio.com/data.json?auth=' + token);
        // Get parameter result need to be specificated to call it from an other component.
        // It can be the model of the object saved, or the type "any" for unknow data type.
    }

    // Save people:
    savePeople( people: Person[] ){
        
        const token = this._loginService.getIdToken();

        this._httpClient.put('https://people-list-15e69-default-rtdb.firebaseio.com/data.json?auth=' + token, people)
        .subscribe(

            response => console.log( "Resultado de guardar a las personas: " + response ),

            error => console.log( "Error al guardar personas: " + error )
        );
    }

    modifyPerson( index: number, person: Person ){

        const token = this._loginService.getIdToken();

        let url: string;
        url = 'https://people-list-15e69-default-rtdb.firebaseio.com/data/' + index + '.json?auth=' + token; // It's important that each metod finish with ".json".
        
        this._httpClient.put(url, person).subscribe(
            
            response => console.log( "Resultado de modificar persona: " + response ),

            error => console.log( "Error en modificar persona: " + error )
        );
    }

    deletePerson( index: number ){

        const token = this._loginService.getIdToken();

        let url: string;
        url = 'https://people-list-15e69-default-rtdb.firebaseio.com/data/' + index + '.json?auth=' + token; // It's important that each metod finish with ".json".
        
        this._httpClient.delete(url).subscribe(
            
            response => console.log( "Resultado de eliminar persona: " + response ),

            error => console.log( "Error en eliminar persona: " + error )
        );
    }
}