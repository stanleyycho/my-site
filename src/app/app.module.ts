import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatDividerModule, MatSidenavModule, 
  MatToolbarModule, MatListModule, MatIconModule, MatCardModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BiographyNavigationComponent } from './biography-navigation/biography-navigation.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyLinksComponent } from './my-links/my-links.component';
import { MyCertificatesComponent } from './my-certificates/my-certificates.component';

const appRoutes: Routes = [
  { path: '', component: MyHomeComponent },
  { path: 'projects', component: MyProjectsComponent },
  { path: 'links', component: MyLinksComponent },
  { path: 'certs', component: MyCertificatesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BiographyNavigationComponent,
    MyHomeComponent,
    MyProjectsComponent,
    MyLinksComponent,
    MyCertificatesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatTabsModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
