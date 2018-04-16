import { Component, Input } from '@angular/core';
import { TestSolution } from '../../models/index';
import { Router } from '@angular/router';

@Component({
    selector: 'solution-card',
    templateUrl: './solution.card.component.html',
    styleUrls: ['./solution.card.component.scss']
})
export class SolutionCardComponent {

    @Input('Solution') set Solution(solution: TestSolution) {
        if (solution != undefined) {
            this.mSolution = solution;
            this.mName = this.mSolution.Name;
            this.mDescription = this.mSolution.Description;
            this.mLocation = this.mSolution.Location;
        }
    }

    constructor(private router: Router){

    }

    private mSolution: TestSolution;
    private mName: string = '';
    private mDescription: string = '';
    private mLocation: string = '';

    get Name(): string {
        return this.mName;
    }

    get Description(): string {
        return this.mDescription;
    }

    get Location(): string {
        return this.mLocation;
    }

    NavigateToConfig() {
        this.router.navigate(['configure']);
    }
}
