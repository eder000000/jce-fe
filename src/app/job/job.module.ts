import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJobslistComponent } from './card-jobslist/card-jobslist.component';
import { UiImportsModule } from '../ui-imports/ui-imports.module';


@NgModule({
  declarations: [CardJobslistComponent],
  imports: [
    CommonModule,
    UiImportsModule
  ],
  exports: [
    CardJobslistComponent
  ]
})
export class JobModule { }
