import { Injectable } from '@angular/core';
import { DataSet } from './dataset';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
	getAllContent(content): Observable<DataSet[]> {
		const httpOptions = {
			headers: new HttpHeaders({ 'X-Mashape-Key': 'GMLlN1s0zXmshKxCkCevzTFOUpk3p1229zZjsnHz11QbXPP3GT' })
		};

		return this.http.get<DataSet[]>(`${this.apiURL}/${content}`, httpOptions);
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

	updateContent(ContentDetail, content: string) {
		console.log(ContentDetail.id);
		return this.http.patch(`${this.apiURL}/${content}/${ContentDetail.id}`, ContentDetail).pipe(
			tap(() => this.getAllContent(content))
		)

	}
	
	newContent(ContentDetail, content) {
		console.log(ContentDetail);
		return this.http.post(this.apiURL, ContentDetail).pipe(
			tap(() => this.getAllContent(content)),
			catchError(this.handleError('getAllContent', []))
		)

	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

}
