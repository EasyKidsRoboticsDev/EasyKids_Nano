module.exports = function (Blockly) {
  'use strict';
  // =============================================================================
  // EasyKids_Nano v.5 by EasyKidsRobotics
  // =============================================================================

  Blockly.Blocks['easykids_sensornum'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("LineFollower: NumSensor")
        .appendField(new Blockly.FieldDropdown([["2", "2"], ["7", "7"], ["8", "8"]]), "sensornum");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(50);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['easykids_blackline'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("LineFollower: Black Line")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['easykids_whiteline'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("LineFollower: White Line")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['easykids_readsensor'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("LineFollower: ReadSensor")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['easykids_sensormin'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("LineFollower: SenserMin <<< S0 :");
      this.appendValueInput("s0")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" S1 :");
      this.appendValueInput("s1")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" S2 :");
      this.appendValueInput("s2")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" S3 :");
      this.appendValueInput("s3")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" S4 :");
      this.appendValueInput("s4")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" S5 :");
      this.appendValueInput("s5")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" S6 :");
      this.appendValueInput("s6")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" S7 :");
      this.appendValueInput("s7")
        .setCheck("Number")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(130);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['easykids_sensormax'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("LineFollower: SenserMax >>> S0 :");
      this.appendValueInput("s0")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" S1 :");
      this.appendValueInput("s1")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" S2 :");
      this.appendValueInput("s2")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" S3 :");
      this.appendValueInput("s3")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" S4 :");
      this.appendValueInput("s4")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" S5 :");
      this.appendValueInput("s5")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" S6 :");
      this.appendValueInput("s6")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" S7 :");
      this.appendValueInput("s7")
        .setCheck("Number")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['easykids_linefollower'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("LineFollower: Speed :");
      this.appendValueInput("speed")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" KP :");
      this.appendValueInput("kp")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" KD :");
      this.appendValueInput("kd")
        .setCheck("Number")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(170);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['easykids_linetime'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("LineFollowerTimer: Speed :");
      this.appendValueInput("speed")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" KP :");
      this.appendValueInput("kp")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" KD :");
      this.appendValueInput("kd")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" Timer :");
      this.appendValueInput("timer")
        .setCheck("Number")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['easykids_linecross'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("LineFollowerCross: Speed :");
      this.appendValueInput("speed")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" KP :");
      this.appendValueInput("kp")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" KD :");
      this.appendValueInput("kd")
        .setCheck("Number")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['easykids_line90left'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("LineFollower 90 Left: Speed :");
      this.appendValueInput("speed")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" KP :");
      this.appendValueInput("kp")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" KD :");
      this.appendValueInput("kd")
        .setCheck("Number")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['easykids_line90right'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("LineFollower 90 Right: Speed :");
      this.appendValueInput("speed")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" KP :");
      this.appendValueInput("kp")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(" KD :");
      this.appendValueInput("kd")
        .setCheck("Number")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(250);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['easykids_lineturnleft'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("LineTurnLeft: Speed :");
      this.appendValueInput("speed")
        .setCheck("Number")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['easykids_lineturnright'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("LineTurnRight: Speed :");
      this.appendValueInput("speed")
        .setCheck("Number")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
}