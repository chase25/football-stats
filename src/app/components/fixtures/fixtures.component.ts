import { DataSet } from '../../dataset';
import { ApiService } from '../../api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {

  @Input() league: string;
  public fixtures: DataSet[];

  public apiContent: string = 'fixtures/league/2';

  public title: string = 'Fixtures';

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
      .subscribe(fixtures => this.fixtures = fixtures.api.fixtures[0])
      .add(() => this.loader = false)
  }

}
