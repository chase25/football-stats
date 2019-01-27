import { DataSet } from '../../dataset';
import { ApiService } from '../../api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class DefaultLeagueTableComponent implements OnInit {

  table = [
    {
			"rank": "1",
			"teamName": "Liverpool",
			"matchsPlayed": "23",
			"win": "19",
			"draw": "3",
			"lose": "1",
			"goalsFor": "54",
			"goalsAgainst": "13",
			"goalsDiff": "41",
			"points": "60",
			"lastUpdate": "2019-01-20"
		},
		{
				"rank": "2",
				"teamName": "Manchester City",
				"matchsPlayed": "23",
				"win": "18",
				"draw": "2",
				"lose": "3",
				"goalsFor": "62",
				"goalsAgainst": "17",
				"goalsDiff": "45",
				"points": "56",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "3",
				"teamName": "Tottenham",
				"matchsPlayed": "23",
				"win": "17",
				"draw": "0",
				"lose": "6",
				"goalsFor": "48",
				"goalsAgainst": "23",
				"goalsDiff": "25",
				"points": "51",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "4",
				"teamName": "Chelsea",
				"matchsPlayed": "23",
				"win": "14",
				"draw": "5",
				"lose": "4",
				"goalsFor": "40",
				"goalsAgainst": "19",
				"goalsDiff": "21",
				"points": "47",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "5",
				"teamName": "Arsenal",
				"matchsPlayed": "23",
				"win": "13",
				"draw": "5",
				"lose": "5",
				"goalsFor": "48",
				"goalsAgainst": "32",
				"goalsDiff": "16",
				"points": "44",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "6",
				"teamName": "Manchester United",
				"matchsPlayed": "23",
				"win": "13",
				"draw": "5",
				"lose": "5",
				"goalsFor": "46",
				"goalsAgainst": "33",
				"goalsDiff": "13",
				"points": "44",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "7",
				"teamName": "Watford",
				"matchsPlayed": "23",
				"win": "9",
				"draw": "6",
				"lose": "8",
				"goalsFor": "32",
				"goalsAgainst": "32",
				"goalsDiff": "0",
				"points": "33",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "8",
				"teamName": "Wolves",
				"matchsPlayed": "23",
				"win": "9",
				"draw": "5",
				"lose": "9",
				"goalsFor": "27",
				"goalsAgainst": "31",
				"goalsDiff": "-4",
				"points": "32",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "9",
				"teamName": "Leicester",
				"matchsPlayed": "23",
				"win": "9",
				"draw": "4",
				"lose": "10",
				"goalsFor": "29",
				"goalsAgainst": "29",
				"goalsDiff": "0",
				"points": "31",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "10",
				"teamName": "West Ham",
				"matchsPlayed": "23",
				"win": "9",
				"draw": "4",
				"lose": "10",
				"goalsFor": "30",
				"goalsAgainst": "34",
				"goalsDiff": "-4",
				"points": "31",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "11",
				"teamName": "Everton",
				"matchsPlayed": "23",
				"win": "8",
				"draw": "6",
				"lose": "9",
				"goalsFor": "34",
				"goalsAgainst": "33",
				"goalsDiff": "1",
				"points": "30",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "12",
				"teamName": "Bournemouth",
				"matchsPlayed": "23",
				"win": "9",
				"draw": "3",
				"lose": "11",
				"goalsFor": "33",
				"goalsAgainst": "42",
				"goalsDiff": "-9",
				"points": "30",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "13",
				"teamName": "Brighton",
				"matchsPlayed": "23",
				"win": "7",
				"draw": "5",
				"lose": "11",
				"goalsFor": "25",
				"goalsAgainst": "32",
				"goalsDiff": "-7",
				"points": "26",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "14",
				"teamName": "Crystal Palace",
				"matchsPlayed": "23",
				"win": "6",
				"draw": "4",
				"lose": "13",
				"goalsFor": "23",
				"goalsAgainst": "32",
				"goalsDiff": "-9",
				"points": "22",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "15",
				"teamName": "Southampton",
				"matchsPlayed": "23",
				"win": "5",
				"draw": "7",
				"lose": "11",
				"goalsFor": "25",
				"goalsAgainst": "40",
				"goalsDiff": "-15",
				"points": "22",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "16",
				"teamName": "Burnley",
				"matchsPlayed": "23",
				"win": "6",
				"draw": "4",
				"lose": "13",
				"goalsFor": "23",
				"goalsAgainst": "43",
				"goalsDiff": "-20",
				"points": "22",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "17",
				"teamName": "Newcastle",
				"matchsPlayed": "23",
				"win": "5",
				"draw": "6",
				"lose": "12",
				"goalsFor": "19",
				"goalsAgainst": "31",
				"goalsDiff": "-12",
				"points": "21",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "18",
				"teamName": "Cardiff",
				"matchsPlayed": "23",
				"win": "5",
				"draw": "4",
				"lose": "14",
				"goalsFor": "19",
				"goalsAgainst": "44",
				"goalsDiff": "-25",
				"points": "19",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "19",
				"teamName": "Fulham",
				"matchsPlayed": "23",
				"win": "3",
				"draw": "5",
				"lose": "15",
				"goalsFor": "21",
				"goalsAgainst": "51",
				"goalsDiff": "-30",
				"points": "14",
				"lastUpdate": "2019-01-20"
		},
		{
				"rank": "20",
				"teamName": "Huddersfield",
				"matchsPlayed": "23",
				"win": "2",
				"draw": "5",
				"lose": "16",
				"goalsFor": "13",
				"goalsAgainst": "40",
				"goalsDiff": "-27",
				"points": "11",
				"lastUpdate": "2019-01-20"
		}
	]
	
	@Input() league: string;
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
			.subscribe(leagues => this.leagues = leagues).add(() => this.loader = false)
	}

}
