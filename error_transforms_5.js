/** Condition: Variable does no exist. */
function main(selector, rule) {
  nonexistent_map["key_does_not_exist"] = 1;
  return rule;
}
