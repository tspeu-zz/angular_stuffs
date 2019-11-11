import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchResult } from '../Models/SearchResult';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbar', { static: true }) navbar: HeaderComponent;
  @Output() onSearch: EventEmitter<null> = new EventEmitter<null>();

  results: SearchResult[];
  loading: boolean;


  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
    console.log("<----HeaderComponent results:--->", this.results); // uncomment to take a look
  }
  goToRoute(route: string) {
    console.log(' --->HeaderComponent  vamos pata la ruta', route);
    this.router.navigate([`/${route}`]);
  }
  search() {
    this.onSearch.emit();
  }
}
