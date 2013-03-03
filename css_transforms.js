function doubleMargin(rule) {
  if ('margin-top' in rule) {
    rule["margin-top"] = unitless(rule["margin-top"]) * 2 + "px";
  }

  return rule;  
}

/** Assumes units are 2 characters */
function unitless(val) {
  return val.substring(0, val.length - 2);
}

/** 
 * Will be invoked by the css gnomes with a simple javascript object.
 *  
 * When given a style definition of:
 *   div#main {
 *     border: 1px solid #b0bec7;
 *     margin: 4px;
 *   }
 *
 * Selector will be: 'div#main'
 * Rule will be: { 'border' : '1px solid #b0bec7', 'margin' : '4px' }
 *
 * @param selector the full selector text.
 * @param rule a javascript object representing the CSS rule.
 * @return the updated rule.
 */
function main(selector, rule) {
  return doubleMargin(rule);
}

