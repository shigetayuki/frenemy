import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation = 
trigger('routeAnimations', [
  transition('top => * ,*<=>about,*<=>services,*<=>partners,*<=>company,*<=>privacyPolicy,*<=>disclaimer', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        width:'100%',
      })
    ]),
    query(':enter', [
      style({ opacity: 0 })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('200ms ease-in-out', style({ opacity: 0 }))
      ]),
      query(':enter', [
        animate('500ms ease-in-out', style({ opacity: 1 }))
      ]),
    ]),
  ]),
  transition('*<=>*',[])
]);