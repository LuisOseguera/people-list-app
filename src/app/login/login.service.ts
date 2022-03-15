import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from 'firebase/auth';

@Injectable()
export class LoginService {

    token: string = "";

    constructor( 

        private router: Router
     ) { }

    login( email: string, password: string ){

        const auth = firebase.getAuth()

        firebase.signInWithEmailAndPassword(auth, email, password)
        .then(

            response => {

                auth.currentUser?.getIdToken()
                .then(

                    token => {

                        // console.log( token );
                        this.token = token;

                        this.router.navigate([ '/' ]);
                    }
                )
            }
        );
    }

    getIdToken(){

        return this.token;
    }

    isAuthenticated(){

        return this.token != "";
    }

    logout(){

        const auth = firebase.getAuth()

        firebase.signOut( auth ).then( () => {

            this.token = "";
            this.router.navigate([ 'login' ]);
        })
        .catch( error => console.log( "Error de logout: " + error ) );
    }
}