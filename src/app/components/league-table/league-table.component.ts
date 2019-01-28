import { DataSet } from '../../dataset';
import { ApiService } from '../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class DefaultLeagueTableComponent implements OnInit {

	
	// @Input() league: string;

	public leagues: DataSet[];

	public apiContent: string = 'leagueTable/2';  //Sets query string for the api call

	public title: string = 'League Table';

	public rowNumber: string;
	public loader: boolean = false;

	constructor(
		private apiService: ApiService
	) { }

  ngOnInit() {
		this.getAllContent();
	}

	getAllContent(): void {
		this.loader = true;
		this.apiService.getAllContent(this.apiContent)
			.subscribe(leagues => this.leagues = leagues.api.standings[0]) 
			/**
		 * The zero index is there as it's and array in an array ie if you look at the returned http request the tree is like so - api > standings > 0 > Array of results.
		 * this is the bit I'm not happy with. Also the compiler is throwing an error saying that api does not exist on on type DataSet[].
		 */
			.add(() => this.loader = false)
	}
}
