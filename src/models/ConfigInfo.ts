import { RawArg } from './RawArg';

export class ConfigInfo {
    NeedArgs: boolean = true;
    LengthLimit: boolean = true;
    TemplateArgs: RawArg[] = [];
}
