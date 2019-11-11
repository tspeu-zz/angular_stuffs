import { TestBed } from '@angular/core/testing';

import { SearchPedidoService } from './search-pedido.service';

describe('SearchPedidoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchPedidoService = TestBed.get(SearchPedidoService);
    expect(service).toBeTruthy();
  });
});
