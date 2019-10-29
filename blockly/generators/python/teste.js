Blockly.Python['if'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '';
    var branchCode;
    var conditionCode;
    do {
        conditionCode = Blockly.Python.valueToCode(block, 'IF' + n,
            Blockly.Python.ORDER_NONE) || 'False';
        branchCode = Blockly.Python.statementToCode(block, 'DO' + n) ||
            Blockly.Python.PASS;
        code += (n == 0 ? 'if ' : 'elif ') + conditionCode + ':\n' + branchCode;

        ++n;
    } while (block.getInput('IF' + n));

    if (block.getInput('ELSE')) {
        branchCode = Blockly.Python.statementToCode(block, 'ELSE') ||
            Blockly.Python.PASS;
        code += 'else:\n' + branchCode;
    }
    return code;
};