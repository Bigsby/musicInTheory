import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { Topic } from "./models";

@Injectable()
export class DataService {
    constructor(private http: Http) { 
    }
  
    getTopics() : Promise<Topic[]>{
        return this.http.get("data/topics.json")
            .toPromise()
            .then(response => response.json() as Topic[]);
    }    
}