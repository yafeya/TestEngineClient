import { Component, Input, OnInit } from '@angular/core';

import * as Services from '../../services/index';
import { TestSolution, TestSolutionViewModel } from '../../models/index';

@Component({
    selector: 'solution-list',
    templateUrl: './solution.list.component.html',
    styleUrls: ['./solution.list.component.scss']
})
export class SolutionListComponent implements OnInit {

    private mSolutions: TestSolutionViewModel[] = [];
    private mSelectedSolution: TestSolutionViewModel;
    private mIsDetailEnabled: boolean = false;

    constructor(private solutionProvider: Services.SolutionProvider) {

    }

    get IsDetailEnabled(): boolean {
        return this.mIsDetailEnabled;
    }

    get SelectedSolution() {
        return this.mSelectedSolution;
    }

    async ngOnInit() {
        await this.initializeSolutions();
    }

    get Solutions(): TestSolutionViewModel[] {
        return this.mSolutions;
    }

    onSelected(solution: TestSolutionViewModel): void {
        for (let item of this.mSolutions) {
            if (item.IsSelected) {
                item.IsSelected = false;
                this.updateSelected(item);
            }
        }
        this.mSelectedSolution = solution;
        this.mSelectedSolution.IsSelected = true;
        this.updateSelected(this.mSelectedSolution);
        this.mIsDetailEnabled = this.mSelectedSolution != undefined;
    }

    private updateSelected(item: TestSolutionViewModel) {
        if (item.OnSelectedChanged) {
            item.OnSelectedChanged(item.IsSelected);
        }
    }

    private async initializeSolutions() {
        let solutions = await this.solutionProvider.GetTestSolutions();
        for (let solution of solutions) {
            let solutionViewModel = new TestSolutionViewModel(solution);
            this.mSolutions.push(solutionViewModel);
        }
    }
}
