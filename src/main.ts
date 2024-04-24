import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { HeroListComponent } from './app/hero-list/hero-list.component';
// import { AppGuessGameComponent } from './app/app-guess-game/app-guess-game.component';
// import { AppComponent } from './app/app.component';
// import { PostListComponent } from './app/post-list/post-list.component';
import { ListEmpComponent} from './app/list-emp/list-emp.component';

bootstrapApplication(ListEmpComponent, appConfig)
// bootstrapApplication(PostListComponent, appConfig)
// bootstrapApplication(HeroListComponent, appConfig)
// bootstrapApplication(AppGuessGameComponent, appConfig)
// bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
