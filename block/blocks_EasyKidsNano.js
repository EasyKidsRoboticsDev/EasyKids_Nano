module.exports = function(Blockly){
  'use strict';
  // =============================================================================
  // EasyKids_Nano v.5 by EasyKidsRobotics
  // =============================================================================

Blockly.Blocks['easykids_setuppin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKids: Setup Pin")
        .appendField(new Blockly.FieldDropdown([["A0/D14","14"], ["A1/D15","15"], ["A3/D16","16"], ["A4/D17","17"],["A5/D18","18"],["A6/D19","19"],["A7/D20","20"]]), "PINIO")
        .appendField(new Blockly.FieldDropdown([["INPUT","INPUT"], ["OUTPUT","OUTPUT"]]), "MODE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(70);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_writeio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKids: DigitalWrite")
        .appendField(new Blockly.FieldDropdown([["D14","14"], ["D15","15"], ["D16","16"], ["D17","17"],["D18","18"],["D19","19"],["D20","20"]]), "EasyKB WriteIOPIN")
        this.appendDummyInput()
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "Logic");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_readio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKids: DigitalRead")
        .appendField(new Blockly.FieldDropdown([["D14","14"], ["D15","15"], ["D16","16"], ["D17","17"],["D18","18"],["D19","19"],["D20","20"]]), "PINReadIO");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_readadc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKids: AnalogRead")
        .appendField(new Blockly.FieldDropdown([["A0","0"], ["A1","1"], ["A2","2"],["A3","3"],["A4","4"],["A5","5"],["A6","6"],["A7","7"]]), "PINADC");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_readsw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKids: Switch Button")
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(100);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_microstart'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKids: Micro Start")
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(100);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_sw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKids: WaitForStart")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//   // #############################  DC Motor  ##################################

Blockly.Blocks['easykids_motor_forward'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("EasyKids:Motor1 Forward Speed");
    this.appendValueInput("SPEED1")
      .setCheck("Number")
    this.appendDummyInput()
      .appendField("% [ 0-100 ]")
    this.appendDummyInput()
      .appendField(" :Motor2 Forward Speed");
    this.appendValueInput("SPEED2")
      .setCheck("Number")
    this.appendDummyInput()
      .appendField("% [ 0-100 ]")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_motor_backward'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("EasyKids: Motor1 Backward Speed");
    this.appendValueInput("SPEED1")
      .setCheck("Number")
    this.appendDummyInput()
      .appendField("% [ 0-100 ]")
    this.appendDummyInput()
      .appendField(" : Motor2 Backward Speed");
    this.appendValueInput("SPEED2")
      .setCheck("Number")
    this.appendDummyInput()
      .appendField("% [ 0-100 ]")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_dc_forward'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("EasyKids: Motor1 Forward Speed");
    this.appendValueInput("SPEED")
      .setCheck("Number")
    this.appendDummyInput()
      .appendField("% [ 0-100 ]")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_dc_forward2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("EasyKids: Motor2 Forward Speed");
    this.appendValueInput("SPEED")
      .setCheck("Number")
    this.appendDummyInput()
      .appendField("% [ 0-100 ]")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_dc_backward'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("EasyKids: Motor1 Backward Speed");
    this.appendValueInput("SPEED")
      .setCheck("Number")
    this.appendDummyInput()
      .appendField("% [ 0-100 ]")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_dc_backward2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("EasyKids: Motor2 Backward Speed");
    this.appendValueInput("SPEED")
      .setCheck("Number")
    this.appendDummyInput()
      .appendField("% [ 0-100 ]")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_turnleft'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("EasyKids:Motor TurnLeft Speed");
    this.appendValueInput("SPEED")
      .setCheck("Number")
    this.appendDummyInput()
      .appendField("% [ 0-100 ]")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_turnright'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("EasyKids:Motor TurnRight Speed");
    this.appendValueInput("SPEED")
      .setCheck("Number")
    this.appendDummyInput()
      .appendField("% [ 0-100 ]")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_spinleft'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("EasyKids:Motor SpinLeft Speed");
    this.appendValueInput("SPEED")
      .setCheck("Number")
    this.appendDummyInput()
      .appendField("% [ 0-100 ]")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_spinright'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("EasyKids:Motor SpinRight Speed");
    this.appendValueInput("SPEED")
      .setCheck("Number")
    this.appendDummyInput()
      .appendField("% [ 0-100 ]")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['easykids_motor1_stop'] = {
init: function() {
  this.appendDummyInput()
      .appendField("EasyKids: Motor1 Stop")
  this.setColour(270);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
this.setTooltip("");
this.setHelpUrl("");
}
};
Blockly.Blocks['easykids_motor2_stop'] = {
init: function() {
  this.appendDummyInput()
      .appendField("EasyKids: Motor2 Stop")
  this.setColour(270);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
this.setTooltip("");
this.setHelpUrl("");
}
};
Blockly.Blocks['easykidsmotorstopall'] = {
init: function() {
  this.appendDummyInput()
      .appendField("EasyKids: Motor Stop All")
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(350);
this.setTooltip("");
this.setHelpUrl("");
}
};
}