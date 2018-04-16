import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Services from '../services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private solutionProvider: Services.SolutionProvider
  ) {

  }

  async ngOnInit() {
    await this.initializeSolutionProvider();
    this.navigateToSolutionList();
  }

  private navigateToSolutionList() {
    this.router.navigate(['list']);
  }

  private async initializeSolutionProvider() {
    await this.solutionProvider.Initialize();
  }
}
