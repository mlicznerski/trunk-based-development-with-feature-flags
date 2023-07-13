import { Component, OnInit } from '@angular/core';

/**
 * Component initially hidden in production due to development in progress
 */
@Component({
  selector: 'app-feature1-initially-hidden',
  template: `Should be hidden when "dev-ticket-2-feature2" feature is disabled`,
  styles: [``],
})
export class Feature2InitiallyHiddenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
