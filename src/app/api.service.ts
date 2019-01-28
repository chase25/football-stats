import { Injectable } from '@angular/core';
// import { DataSet } from './dataset';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({ 'X-Mashape-Key': 'GMLlN1s0zXmshKxCkCevzTFOUpk3p1229zZjsnHz11QbXPP3GT' })
};


export class DataSet {
	draw: number
	goalsAgainst: number
	goalsDiff: number
	goalsFor: number
	lose: number
	matchsPlayed: number
	points: number
	teamNameteam: string
	win: number
}

@Injectable({
	providedIn: 'root'
})

export class ApiService {

	constructor(
		private http: HttpClient) { }


	private apiURL = 'https://api-football-v1.p.mashape.com';

	/**
	 * Handle Http get
	 * @method getAllContent - Gets the list of Fixtures from the server
	 */
	getAllContent(content): Observable<any> {
		return this.http.get<any>(`${this.apiURL}/${content}`, httpOptions);

	}

	/**
	 * Handle Http patch
	 * @method getContent - creates a new League and passes the the server
	 * @param id  - passes the values from the entry form to the http request
	 */
	getContent(id: number, content): Observable<DataSet> {
		const url = `${this.apiURL}/${content}/${id}`;
		return this.http.get<DataSet>(url).pipe(
			catchError(this.handleError<DataSet>(`getContent id=${id}`))
		);
	}
	/**
	 * Handle Http patch
	 * @method updateContent - creates a new League and passes the the server
	 * @param ContentDetail - passes the values from the entry form to the http request
	 */
	updateContent(ContentDetail, content: string) {
		console.log(ContentDetail.id);
		return this.http.patch(`${this.apiURL}/${content}/${ContentDetail.id}`, ContentDetail).pipe(
			tap(() => this.getAllContent(content))
		)

	}
	/**
	 * Handle Http post
	 * @method newContent - creates a new League and passes the the server
	 * @param ContentDetail - passes the values from the entry form to the http request
	 */
	newContent(ContentDetail, content) {
		console.log(ContentDetail);
		return this.http.post(this.apiURL, ContentDetail).pipe(
			tap(() => this.getAllContent(content)),
			catchError(this.handleError('getAllContent', []))
		)

	}

	/**
	 * Handle Http delete
	 * @param targetRow - passes the id of the slected row and deletes from the server
	 */
	doDelete(targetRow: number) {
		console.log(targetRow);
		let apiRoot: string = `${this.apiURL}${targetRow}`;
		//Deletes' the row with the given ID then call the getdata method
		return this.http.delete(apiRoot).subscribe();

	}

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

}
