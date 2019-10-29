Blockly.Blocks['while'] = {
    init: function() {
        this.appendValueInput("nomeBlock")
            .setCheck(null)
            .appendField("while");
        this.appendStatementInput("valBlock")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['for'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("for")
            .appendField(new Blockly.FieldVariable("x"), "variable")
            .appendField("in range")
            .appendField(new Blockly.FieldTextInput("10"), "rangeVal");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['foreach'] = {
    init: function() {
        this.appendValueInput("entradaX")
            .setCheck(null)
            .appendField("for")
            .appendField(new Blockly.FieldTextInput("x"), "varX")
            .appendField("in");
        this.appendStatementInput("excucao")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['run'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("run");
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['step'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("step");
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['if'] = {
    init: function() {
        this.appendValueInput("condicao")
            .setCheck(null)
            .appendField("if");
        this.appendStatementInput("cod")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['elif'] = {
    init: function() {
        this.appendValueInput("codicao")
            .setCheck(null)
            .appendField("elif");
        this.appendStatementInput("cod")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['else'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("else");
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['booleanos'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldDropdown([
                ["True", ""],
                ["False", "OPTIONNAME"]
            ]), "NAME");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['def'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("def")
            .appendField(new Blockly.FieldTextInput("fool"), "NAME");
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['return'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField(new Blockly.FieldLabelSerializable("return"), "NAME");
        this.setPreviousStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};