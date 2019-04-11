# Custom Maxlength
A Simple custom maxlength directive for input fields in Ionic that allows user to enter maximum number of characters as given. In Ionic, maxlength property of ion-input does not work properly on Android devices, it allows user to enter characters than the number of charachers are allowed.

It uses this custom directive only for Android platform and uses the native maxlength property for iOS.

# Install
```
npm install custom-maxlength --save
```
# Usage
- Import CustomMaxlengthModule in your app.module.ts.
```
import {CustomMaxlengthModule} from 'custom-maxlength';
```

```
@NgModule({
  imports: [
      ...,
      AngularFileDragDropModule,
      ...
  ]
})
```

**Example-1 (ion-input type="text")**
```
<ion-input type="text"
            value=""
            formControlName="title"
            custom-maxlength
            [charMaxLength]="50"
            required
            [(ngModel)]="title">
</ion-input>
```

**Example-2 (ion-textarea)**
```
<ion-textarea formControlName="description"
              custom-maxlength
              [charMaxLength]="500"
              required
              [(ngModel)]="description">
</ion-textarea>
```
- **custom-maxlength** is the name of directive.
- Specify maximum number of characters allowed using **charMaxLength** property

**Note :-** Do not forget to add **ngModel** on the ion-input and ion-textarea otherwise directive won't work.