import { TestBed } from '@angular/core/testing';

import { EmailForwarderService } from './email-forwarder.service';

describe('EmailForwarderService', () => {
  let service: EmailForwarderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailForwarderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
