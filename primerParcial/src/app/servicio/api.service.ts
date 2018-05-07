import { Injectable } from '@angular/core';
import { Http, Headers,Response,RequestOptions } from '@angular/http';
import { Persona } from '../persona';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

    //urlC = 'https://localhost/api';
    urlC = 'http://localhost:8080';

    constructor( public http: Http ) { }

    public traerPersonas()
    {
        return this.http.get( this.urlC  + "/persona/")
        .toPromise()
        .then( this.extractData )
        .catch( this.handleError );
    }

    public CargarPersona( persona: Persona )
    {
        console.log(persona);
        return this.http
        .post(this.urlC  + '/persona/agregar/', persona )
        .map((res: Response) => res.json());
    }

    public BorrarPersona( url: string, persona: Persona )
    {
        return this.http
        .post(this.urlC  + '/persona' + url, persona )
        .map((res: Response) => res.json());
    }

    /*
    public modificarPersona( url: string, objeto: any )
    {
        return this.http
        .post( url )
        .subscribe( data => {
          console.log( data );
          return data;
        });
    }


    */
    public httpGetO ( url: string): Observable<Response>
    {
        return this.http.get( url )
          .map( ( res: Response ) => res.json())
          .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
    }


    private extractData ( res: Response )
    {
        return res.json() || {};
    }

    private handleError ( error: Response | any )
    {
        return error;
    }


}