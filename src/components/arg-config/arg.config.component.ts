import { Component, Input } from '@angular/core';
import { RawArg, RawArgViewModel } from '../../models';
import { tryParse } from 'selenium-webdriver/http';

const StringType = 'string';
const NumberType = 'number';
const BufferType = 'buffer';
const WaveType = 'wave';
const Empty = '';
const Space = ' ';

@Component({
    selector: 'arg-cofig',
    templateUrl: './arg.config.component.html',
    styleUrls: ['./arg.config.component.scss']
})
export class RawArgConfigurationComponent {
    private mTemplate: RawArg;
    private mName: string;
    private mType: string;
    private mValue: string;

    private mIsValid: boolean = true;
    private mInvalidMessage: string = Empty;

    @Input('Template') set Template(value: RawArgViewModel) {
        if (value != undefined) {
            this.mTemplate = value.RawModel;
            this.mName = this.mTemplate.Name;
            this.mType = this.mTemplate.Type;
            value.Validate = () => {
                this.Validate();
                return this.mIsValid;
            }
            value.GenerateArg = () => { return this.GenerateRawArg(); };

            switch (this.mType) {
                case StringType: this.Value = Empty; break;
                case NumberType: this.Value = '0'; break;
                case BufferType: this.Value = '0x00'; break;
            }
        }
    }

    get Name(): string {
        return this.mName;
    }
    set Name(value: string) {
        this.mName = value;
    }
    get Value(): string {
        return this.mValue;
    }
    set Value(value: string) {
        this.mValue = value;
    }

    get UseSimpleEditor(): boolean {
        return this.mType == NumberType;
    }

    get IsValid(): boolean {
        return this.mIsValid;
    }

    get HasError(): boolean {
        return !this.mIsValid;
    }

    get InvalidMessage(): string {
        return this.mInvalidMessage;
    }

    Validate(): void {
        let valid: boolean;
        if (this.mType == StringType) {
            valid = true;
        }
        else {
            if (this.mValue == undefined || this.mValue == Empty) {
                valid = false;
            }
            else {
                if (this.mType == NumberType) {
                    valid = this.validateNumber(this.Value);
                }
                else {
                    valid = this.validateByteArray(this.Value);
                }
            }
        }
        this.mIsValid = valid;
    }


    private validateNumber(value: string): boolean {
        let valid: boolean;
        if (value == undefined || value == Space) {
            valid = false;
        }
        else {
            let ret = Number(value);
            valid = ret != NaN;
            if (!valid) {
                this.mInvalidMessage = `${value} cannot convert to a number.`;
            }
        }
        return valid;
    }

    private validateByteArray(value: string): boolean {
        if (value == undefined || value == Space) return false;

        let valid = true;
        let ret = value.split(Space);
        for (let item of ret) {
            let itemNum = parseInt(item);
            if (itemNum == NaN) {
                valid = false;
                this.mInvalidMessage = `${itemNum} cannot convert to a byte.`;
                break;
            }
        }
        return valid;
    }

    GenerateRawArg(): RawArg {
        let rawArg: RawArg;
        if (this.mName != undefined && this.mName != ''
            && this.mType != undefined && this.mType != ''
            && this.mValue != undefined && this.mValue != '') {
            rawArg = new RawArg();
            rawArg.Name = this.mName;
            rawArg.Type = this.mType;
            rawArg.Value = this.mValue;
        }
        return rawArg;
    }
}
