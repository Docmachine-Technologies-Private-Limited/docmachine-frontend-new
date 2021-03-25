import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { DropzoneModule, DropzoneConfigInterface,
  DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DragDropModule } from '@angular/cdk/drag-drop';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*',
  maxFilesize: 3,
  createImageThumbnails: true
};
// import {LocalStorageService} from '../../shared/services/localstorage.service';
// import {SharedProjectsModule} from '../../shared/shared.projects.module';
// import {ProposalsService} from '../../shared/services/proposals.service';
// import {CommentsService} from '../../shared/services/comments.service';
// import {SharedProfileModule} from '../freelancerprofile/shared.profile.module';

@NgModule({
  declarations: [SidenavComponent, DashboardComponent, UploadComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropzoneModule,
    DragDropModule,
    MatProgressBarModule,
    MatTabsModule,
    // BrowserModule,
   
    // SharedProjectsModule,
    // SharedProfileModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: SidenavComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
          { path:'upload', component: UploadComponent, pathMatch: 'full'}
        ]
      },
    ])
  ],
  providers: [
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
//   exports: [SharedProjectsModule]
  exports: [
    MatProgressBarModule,
    MatTabsModule
  ]
})
export class HomeModule {

}
