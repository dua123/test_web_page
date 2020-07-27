import { Component  , ViewChild , AfterViewInit} from '@angular/core';
import { CenterBarComponent } from '../app/center-bar/center-bar.component';
import { ActividadesService } from '../app/actividades.service';
import { DictionaryService } from '../app/dictionary.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit { 

  @ViewChild(CenterBarComponent) childcenter;

  title = 'TrainDeepD-Project';
  public login = 0;
  public headname = 'teste head';
  public centername: any;
  public total: any  ;
  public DicInfo: any;

  constructor(private ActividadesService: ActividadesService , private DictionaryService: DictionaryService) {
      this.total = ActividadesService.getActividades();
      this.DicInfo = DictionaryService.getDictionary();
  }

  ngAfterViewInit(){
      this.centername = this.childcenter.centername;
      this.headname = this.childcenter.centername;
  }

  reciveMessage($event){
    this.headname = $event;
  } 

}

