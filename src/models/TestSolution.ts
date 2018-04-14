import { ConfigInfo } from './ConfigInfo';
import { TestSolutionUrl } from './TestSolutionUrl';

export class TestSolution {
    Name: string;
    Description: string;
    Location: string;
    Configuration: ConfigInfo = new ConfigInfo();

    Url: TestSolutionUrl;
}