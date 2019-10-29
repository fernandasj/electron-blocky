Blockly.Python['while'] = function(block) {
    var value_nomeblock = Blockly.Python.valueToCode(block, 'nomeBlock', Blockly.Python.ORDER_ATOMIC);
    var statements_valblock = Blockly.Python.statementToCode(block, 'valBlock');
    // TODO: Assemble Python into code variable.
    //alert(value_nomeblock); Pega o valor do encaixe
    //alert(statements_valblock); Pega o valor interno
    value_nomeblock = (value_nomeblock == '') ? 'True' : value_nomeblock;
    var code = 'while ' + value_nomeblock + ':\n\t' + statements_valblock + '\n\t';
    return code;
};

Blockly.Python['for'] = function(block) {
    var variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
    var text_rangeval = block.getFieldValue('rangeVal');
    var statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
    var code = 'for ' + variable_variable + ' in range(' + text_rangeval + '):\n\t' + statements_name + '\n\t';
    return code;
};

Blockly.Python['foreach'] = function(block) {
    var text_varx = block.getFieldValue('varX');
    var value_entradax = Blockly.Python.valueToCode(block, 'entradaX', Blockly.Python.ORDER_ATOMIC);
    var statements_excucao = Blockly.Python.statementToCode(block, 'excucao');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};

Blockly.Python['run'] = function(block) {
    var statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};

Blockly.Python['step'] = function(block) {
    var statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
    var code = 'def step(self, left, sleepMs=5, stepCount=1):\n\t' + statements_name + '\n\t';
    return code;
};


Blockly.Python['def'] = function(block) {
    var statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};

Blockly.Python['return'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};

Blockly.Python['if'] = function(block) {
    var value_condicao = Blockly.Python.valueToCode(block, 'condicao', Blockly.Python.ORDER_ATOMIC);
    var statements_cod = Blockly.Python.statementToCode(block, 'cod');
    // TODO: Assemble Python into code variable.
    value_condicao = (value_condicao == '') ? 'True' : value_condicao;
    var code = 'if ' + value_condicao + ':\n\t' + statements_cod + '\n\t';
    return code;
};

Blockly.Python['elif'] = function(block) {
    var value_codicao = Blockly.Python.valueToCode(block, 'codicao', Blockly.Python.ORDER_ATOMIC);
    var statements_cod = Blockly.Python.statementToCode(block, 'cod');
    // TODO: Assemble Python into code variable.
    value_codicao = (value_codicao == '') ? 'True' : value_codicao;
    var code = 'elif ' + value_codicao + ':' + '\n' + statements_cod + '\n\t';
    return code;
};

Blockly.Python['else'] = function(block) {
    var statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
    var code = 'else:\n' + statements_namre + '\n\t';
    return code;
};

Blockly.Python['booleanos'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    dropdown_name = (dropdown_name == '') ? 'True' : 'False';
    var code = dropdown_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};