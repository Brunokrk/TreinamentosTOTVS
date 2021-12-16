import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageComponent } from 'src/app/shared/components/vmessage/vmessage.component';
import { RouterModule } from '@angular/router';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

import { PhotoModule } from '../photo/photo.module';
import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [ CommonModule, ReactiveFormsModule,FormsModule, RouterModule, VMessageModule, PhotoModule, ImmediateClickModule ]
})
export class PhotoFormModule { }
