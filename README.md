# postcss-remove-selectors

[![Package Version](https://badge.fury.io/js/postcss-remove-selectors.png)](http://badge.fury.io/js/postcss-remove-selectors)
[![Dependency Status](https://gemnasium.com/ShogunPanda/postcss-remove-selectors.png?travis)](https://gemnasium.com/ShogunPanda/postcss-remove-selectors)

[PostCSS](http://postcss.org/) plugin that removes selectors from your CSS.

https://sw.cowtech.it/postcss-remove-selectors

## Usage

To use it, simply create a new instance of the plugin passing a list of selectors you want to be removed from your CSS.

Entries of the list can be either strings or regular expression. In both cases, search will match all selectors **starting** with the selector.

If a rule matches only that selector, the rule will be removed entirely, otherwise only the matching selector will be removed.

### Example

Given this plugin configuration:

```javascript
const fs = require("fs");
const postcss = require("postcss");
const removeSelectors = require("postcss-remove-selectors");

const css = fs.readFileSync("input.css", "utf8");
const output = postcss().use(removeSelectors(["a"])).process(css).css;
```

the following CSS

```css
strong, a{
  font-weight: bold;
}

a{
  color: red;
}
```

will be transformed to this CSS

```css
strong{
  font-weight: bold;
}
```

## Supported implementations.

postcss-remove-selectors supports and has been tested on [NodeJS](http://nodejs.org) 6.0+.

## Contributing to postcss-remove-selectors

* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
* Fork the project.
* Start a feature/bugfix branch.
* Commit and push until you are happy with your contribution.
* Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.

## Copyright

Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.

Licensed under the MIT license, which can be found at http://opensource.org/licenses/MIT.
