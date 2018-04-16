import { Component, Input, OnInit } from '@angular/core';

import * as Services from '../../services/index';
import * as Models from '../../models/index';

@Component({
    selector: 'solution-list',
    templateUrl: './solution.list.component.html',
    styleUrls: ['./solution.list.component.scss']
})
export class SolutionListComponent implements OnInit {

    private mSolutions: Models.TestSolution[] = [];

    constructor(private solutionProvider: Services.SolutionProvider) {

    }

    async ngOnInit() {
        await this.initializeSolutions();
    }

    get Solutions(): Models.TestSolution[] {

        return this.mSolutions;
    }

    private async initializeSolutions() {
        let solutions = await this.solutionProvider.GetTestSolutions();
        console.info(solutions);
        for (let solution of solutions) {
            this.mSolutions.push(solution);
        }
    }
}
