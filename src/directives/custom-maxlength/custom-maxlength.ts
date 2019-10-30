import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {
    Platform
} from '@ionic/angular';
@Directive({
    selector: '[custom-maxlength]'
})
export class CustomMaxlengthDirective {

    //Ref Link: http://jagadeeshmanne.blogspot.com/2017/08/ionic-2-angular-maxlength-issue-in.html

    @Input() charMaxLength: number;
    @Output() ngModelChange: EventEmitter<any> = new EventEmitter();


    constructor(private platform: Platform) {
    }

    @HostListener('keyup', ['$event'])
    onKeyUp(event) {
        if (this.charMaxLength)
            this.setValue(event);
    }

    @HostListener('paste', ['$event'])
    onPaste(event) {
        if (this.charMaxLength)
            setTimeout(() => {
                this.setValue(event);
            }, 1);
    }

    @HostListener('focus', ['$event']) onFocus(event) {
        if(this.charMaxLength){
            const element = event.target as HTMLInputElement;
            if (!this.platform.is('android')) {
                element.setAttribute('maxlength', this.charMaxLength.toString())
            }
        }
    }

    setValue(event) {
        if (this.platform.is('android')) {
            const element = event.target as HTMLInputElement
            if (element.value.length > this.charMaxLength) {
                element.value = element.value.substring(0, this.charMaxLength);
            }
            this.ngModelChange.emit(event.target.value);
        }
    }
}
