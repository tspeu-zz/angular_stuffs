import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SearchInputComponent } from './search-input/search-input.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbar', { static: true }) navbar: HeaderComponent;
  @Output() onSearch: EventEmitter<null> = new EventEmitter<null>();

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  goToRoute(route: string) {
    console.log(' ---> vamos pata la ruta', route);
    this.router.navigate([`/${route}`]);
  }
  search() {
    this.onSearch.emit();
  }
}
