/*
 * This file is part of the PostcssRemoveSelectors npm package. Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at http://www.opensource.org/licenses/mit-license.php.
 */

module.exports = require("postcss").plugin("postcss-remove-selectors", selectors => {
  if(!Array.isArray(selectors))
    throw new TypeError("selectors should be a list of selectors to remove");

  const toRemove = selectors.map(t => {
    t = t.source || t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
    return new RegExp(`^(?:${t})`, "i");
  });

  return function(css){
    css.walkRules(rule => {
      const allowedSelectors = rule.selectors.filter(s => !toRemove.some(b => b.test(s)));

      if(allowedSelectors.length)
        rule.selectors = allowedSelectors;
      else
        rule.remove();
    });
  };
});
