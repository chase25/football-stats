import { DataSet } from '../../dataset';
import { ApiService } from '../../api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  
  @Input() league: string;
	public leagues: DataSet[];

	public apiContent: string = 'teams/league/2';

	public title: string = 'All teams';

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
			.subscribe(leagues => this.leagues = leagues.api.teams)
			.add(() => this.loader = false)
	}

}
