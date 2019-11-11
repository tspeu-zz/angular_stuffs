import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

//
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
//
import { SearchPedidoService } from 'src/app/services/search-pedido.service';
import { SearchResult } from 'src/app/Models/SearchResult';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();



  constructor(private searchService: SearchPedidoService,
    private el: ElementRef) { }

  ngOnInit() {
    this.search();
  }

  searchInputComponent(query: string) {
    this.searchService.searchPedido(query);
  }

  search() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((ev: any) => ev.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do(() => this.loading.emit(true))
      .map((query: string) => this.searchInputComponent(query))
      .switch()
      .subscribe(
        (res: SearchResult[]) => {
          this.loading.emit(false);
          this.results.emit(res);
        },
        (err: any) => {
          console.log(err);
          this.loading.emit(false);
        },
        () => {
          this.loading.emit(false);
        }
      );
  }
}
