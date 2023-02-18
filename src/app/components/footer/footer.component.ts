import { HtmlTagDefinition } from '@angular/compiler';
import { Component } from '@angular/core';

interface NavItem {
  label: string;
  icon:any ;
  to: string;
}

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})

export class FooterComponent {
	navItems:NavItem[] = [
		{ label: 'Trending',
    icon: 'public',
    to: 'trending' },
		{
			label: 'Movies',
			icon: 'movie',
			to: 'movies',
		},
		{ label: 'TV Series', icon: 'tv', to: 'tvseries' },
		{ label: 'Search', icon: 'search', to: 'search' },
	];
   constructor(){}
  ngOnInit():void{}


}
