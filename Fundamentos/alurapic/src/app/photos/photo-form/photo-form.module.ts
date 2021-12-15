import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageComponent } from 'src/app/shared/components/vmessage/vmessage.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PhotoFormComponent, VMessageComponent],
    imports: [ CommonModule, ReactiveFormsModule,FormsModule, RouterModule ]
})
export class PhotoFormModule { }
