Blockly.JavaScript['for'] = function(block) {
  var variable_inicio_range = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('inicio_range'), Blockly.Variables.NAME_TYPE);
  var variable_fim_range = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fim_range'), Blockly.Variables.NAME_TYPE);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};