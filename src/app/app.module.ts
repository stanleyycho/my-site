import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BiographyNavigationComponent } from './biography-navigation/biography-navigation.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyLinksComponent } from './my-links/my-links.component';
import { MyCertificatesComponent } from './my-certificates/my-certificates.component';
import { MyResourcesComponent } from './my-resources/my-resources.component';

const appRoutes: Routes = [
  { path: '', component: MyHomeComponent },
  { path: 'experience', component: MyProjectsComponent },
  { path: 'links', component: MyLinksComponent },
  { path: 'certs', component: MyCertificatesComponent },
  { path: 'resources', component: MyResourcesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BiographyNavigationComponent,
    MyHomeComponent,
    MyProjectsComponent,
    MyLinksComponent,
    MyCertificatesComponent,
    MyResourcesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatTabsModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
