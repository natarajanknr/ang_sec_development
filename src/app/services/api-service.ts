import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';
/*
import 'rxjs/add/operator/map';
*/
/*
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
*/

@Injectable()


export class APIService {


	private _url: string = "/assets/data/employeesData.json";

	constructor(private http: HttpClient){}


	getEmployees():Observable<IEmployee[]> {

		/*** Static Return function ***/


		/*return [
				{"id" :1, "name":"Kumar", "band":"TL","location":"chennai"},
				{"id" :2, "name":"Senthil", "band":"SSE","location":"pune"},
				{"id" :2, "name":"Nitin", "band":"SE","location":"mumbai"}
		]
		*/

		return this.http.get<IEmployee[]>(this._url);



		/*
		.subscribe(
				(res:Response) => {
					const details = res.json();
					console.log(details);
				}
			)
		*/

		

		

		/*this._http.get(this._url)
			.subscribe(
				(res:Response) => {
					const details = res.json();
					console.log(details);
				}
			)
			*/
		//return this._http.get(this._url).map((response:Response) => response.json())
		//.subscribe(response => this.records = response);
		//return this._http.get(this._url).map(this.extractData)
		//.catch(this._errorHandler);
			
	}
	/*_errorHandler(error: Response) {
		console.log("response error--->",error);
		console.error(error);
		return Observable.throw(error || "server Error");
	}*/

}