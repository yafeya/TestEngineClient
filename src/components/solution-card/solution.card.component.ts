import { Component, Input } from '@angular/core';
import { TestSolution, TestSolutionViewModel } from '../../models/index';
import { Router } from '@angular/router';

@Component({
    selector: 'solution-card',
    templateUrl: './solution.card.component.html',
    styleUrls: ['./solution.card.component.scss']
})
export class SolutionCardComponent {

    @Input('Solution') set Solution(solution: TestSolutionViewModel) {
        if (solution != undefined) {
            this.mSolution = solution.RawModel;
            this.mName = this.mSolution.Name;
            this.mDescription = this.mSolution.Description;
            this.mLocation = this.mSolution.Location;
            solution.OnSelectedChanged = (selected: boolean) => {
                this.mIsSelected = selected;
            }
        }
    }

    constructor(private router: Router) {

    }

    private mSolution: TestSolution;
    private mName: string = '';
    private mDescription: string = '';
    private mLocation: string = '';
    private mIsSelected: boolean;

    get Name(): string {
        return this.mName;
    }

    get Description(): string {
        return this.mDescription;
    }

    get Location(): string {
        return this.mLocation;
    }

    get IsSelected(): boolean {
        return this.mIsSelected;
    }

    // NavigateToConfig() {
    //     this.router.navigate(['configure'], { queryParams: this.mSolution });
    // }
}
