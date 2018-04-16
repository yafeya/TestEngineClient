export const StringType = 'string';
export const NumberType = 'number';
export const BufferType = 'buffer';
export const WaveType = 'wave';

export class RawArg {
    Name: string = '';
    Type: string = StringType;
    Value: string = '';
}

export class RawArgViewModel {
    constructor(raw: RawArg) {
        this.RawModel = raw;
    }
    RawModel: RawArg;
    Validate: () => boolean;
    GenerateArg: () => RawArg;
}
