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

## Use
- See `app.component.scss`. Any scss needing common functionality must `@import '~sass/libs';`. (this will prevent the build process from reporting it can't find definitions for stuff in your sass folder).
- scope your components wrapper with [`:host`](https://angular.io/guide/component-styles#host). This will allow you to apply padding, borders, etc. to the containing element for your component.
- use flex boxes for your layout. Good reference: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## defaults
- `%app-defaults` is defined in `styles.scss`. See [SASS docs](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_foo) for an explanation of how placeholder selectors work.
- `.app-component` extends `%app-defaults`. For this to work: add the following to your component classes:
    ```
    @HostBinding('class.app-component') isAppComponent = true;
    ```

This complies better with: https://angular.io/guide/styleguide#style-06-03

## Debugging
- In `src/sass/variables.scss` set `$debug` to true and outlines will appear to make it easier to debug your sass.
