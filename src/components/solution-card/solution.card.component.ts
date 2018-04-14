import { Component, Input } from '@angular/core';
import { TestSolution } from '../../models/index';

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

    private mSolution: TestSolution;
    private mName: string = '';
    private mDescription: string = '';
    private mLocation: string = '';
}
