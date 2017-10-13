import { HttpHeaders } from '@angular/common/http';

export const contentHeaders = new HttpHeaders();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
