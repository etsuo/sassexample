# Notes

If you're not me and you're using this and you have a better way of doing things, open an issue with your suggestion. I'm always looking to learn something new ;).

## Dependencies:

- Angular Material (see: https://material.angular.io/guide/getting-started)
    - Angular Material (`npm i  @angular/material @angular/cdk`)
    - Angular Material Animations (`npm i @angular/animations`)
- Hammerjs (`npm i hammerjs`): used by Angular Material 
- Normalize.css (`npm i normalize.css`): resets / normalizes css across browsers

## .angular-cli.json

- root styles.scss is moved to `src/sass`
- update `.angular-cli.json: apps.styles`
```
"styles": [
  "../node_modules/normalize.css/normalize.css",
  "sass/styles.scss"
],
``` 

## setting up scss per component
- `%app-defaults` is defined in `styles.scss`. See [SASS docs](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_foo) for an explanation of how placeholder selectors work.
- Each of your components should define its scss file like this:
- use flex boxes for your layout. Good reference: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

```
@import "~sass/styles";

:host {
  @extend %app-defaults;
  // your s/css goes here
}

```

To understand `:host`, see: https://angular.io/guide/component-styles#host

## Debugging
- In `src/sass/variables.scss` set `$debug` to true and outlines will appear to make it easier to debug your sass.
