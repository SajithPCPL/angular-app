import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

  constructor(private jsonp: Jsonp) { }  
  private animalUrl = 'http://api.petfinder.com/';  
  
// Returns list of animals based input parameters.  
  getAnimals(animal : string,  location: string) {  
    const endPoint = 'pet.find'  
    let params = new URLSearchParams();  
    params.set('key', '555f8155d42d5c9be4705beaf4cce089');  
    params.set('location', location);  
    params.set('animal', animal);  
    params.set('format', 'json');  
    params.set('callback', 'JSONP_CALLBACK');  
    // Returns response  
    return this.jsonp  
              .get(this.animalUrl + endPoint, { search: params }).map(response => response.json().petfinder.pets.pet);  
  }  

}
