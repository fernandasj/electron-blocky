Blockly.JavaScript['if'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_if_action = Blockly.JavaScript.statementToCode(block, 'IF_ACTION');
  var statements_else_action = Blockly.JavaScript.statementToCode(block, 'ELSE_ACTION');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};