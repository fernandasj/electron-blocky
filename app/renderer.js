// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.



var workspaceBlockly = Blockly.inject('blocklyDiv', { toolbox: document.getElementById('toolbox'), scrollbars: false });
var code;

$("#btLimpar").click(function() {
    workspaceBlockly.clear();
})

workspaceBlockly.addChangeListener(myUpdateFunction);

function myUpdateFunction(event) {
    code = Blockly.Python.workspaceToCode(workspaceBlockly);
    document.getElementById('codPython').value = code;
}

$("#btExportar").click(function() {
    var blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "codigo" + ".txt");
})