import { Component, Input } from '@angular/core';
import { TestSolution } from '../../models/index';

@Component({
    selector: 'solution-cofig',
    templateUrl: './solution.config.component.html',
    styleUrls: ['./solution.config.component.scss']
})
export class SolutionConfigComponent {

    @Input('Solution') set Solution(solution: TestSolution) {
        
    }
}
