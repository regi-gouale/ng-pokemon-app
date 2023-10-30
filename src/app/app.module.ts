import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { PokemonService } from './pokemon/pokemon.service';

const routes: Routes = [
    
    { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
    {
        path: '', 
        loadChildren: () => import('./pokemon/pokemon.routes')
            .then(m => m.default),
    },
    {
      path: 'login',
      loadComponent: () => import('./login/login.component')
        .then(m => m.LoginComponent)
    },
    {
      path: '**',
      loadComponent: () => import('./page-not-found/page-not-found.component')
        .then(m => m.PageNotFoundComponent)
    }
  ];
  

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        RouterModule.forRoot(routes),
        PageNotFoundComponent,
        LoginComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
