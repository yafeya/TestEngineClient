import { Component, Input } from '@angular/core';
import { TestSolution } from '../../models/index';

@Component({
    selector: 'solution-detail',
    templateUrl: './solution.detail.component.html',
    styleUrls: ['./solution.detail.component.scss']
})
export class SolutionDetailComponent {

    @Input('Solution') set Solution(solution: TestSolution) {
        
    }
}
