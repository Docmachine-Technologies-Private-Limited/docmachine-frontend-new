import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PageNotFoundComponent } from './components/';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule,RouterModule, TranslateModule,FormsModule],
  exports: [TranslateModule, FormsModule]
})
export class SharedModule {}
