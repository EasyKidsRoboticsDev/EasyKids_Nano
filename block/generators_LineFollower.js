module.exports = function (Blockly) {

  // =============================================================================
  // EasyKids_Nano v.5 by EasyKidsRobotics
  // =============================================================================

  Blockly.JavaScript['easykids_sensornum'] = function (block) {
    var dropdown_sensornum = block.getFieldValue('sensornum');
    // TODO: Assemble JavaScript into code variable.
    var code = `sensorNum(${dropdown_sensornum});\n`;
    return code;
  };

  Blockly.JavaScript['easykids_blackline'] = function (block) {
    var code = `blackLine();\n`;
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };

  Blockly.JavaScript['easykids_whiteline'] = function (block) {
    var code = `whiteLine();\n`;
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };

  Blockly.JavaScript['easykids_readsensor'] = function (block) {
    var code = `readSensor();\n`;
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };
  Blockly.JavaScript['easykids_sensormin'] = function (block) {
    var number_s0 = Blockly.JavaScript.valueToCode(block, 's0', Blockly.JavaScript.ORDER_ATOMIC);
    var number_s1 = Blockly.JavaScript.valueToCode(block, 's1', Blockly.JavaScript.ORDER_ATOMIC);
    var number_s2 = Blockly.JavaScript.valueToCode(block, 's0', Blockly.JavaScript.ORDER_ATOMIC);
    var number_s3 = Blockly.JavaScript.valueToCode(block, 's1', Blockly.JavaScript.ORDER_ATOMIC);
    var number_s4 = Blockly.JavaScript.valueToCode(block, 's0', Blockly.JavaScript.ORDER_ATOMIC);
    var number_s5 = Blockly.JavaScript.valueToCode(block, 's1', Blockly.JavaScript.ORDER_ATOMIC);
    var number_s6 = Blockly.JavaScript.valueToCode(block, 's0', Blockly.JavaScript.ORDER_ATOMIC);
    var number_s7 = Blockly.JavaScript.valueToCode(block, 's1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    setSensorMin(${number_s0}, ${number_s1}, ${number_s2}, ${number_s3}, ${number_s4}, ${number_s5}, ${number_s6}, ${number_s7});\n`;
    return code;
  };
  Blockly.JavaScript['easykids_sensormax'] = function (block) {
    var number_s0 = Blockly.JavaScript.valueToCode(block, 's0', Blockly.JavaScript.ORDER_ATOMIC);
    var number_s1 = Blockly.JavaScript.valueToCode(block, 's1', Blockly.JavaScript.ORDER_ATOMIC);
    var number_s2 = Blockly.JavaScript.valueToCode(block, 's0', Blockly.JavaScript.ORDER_ATOMIC);
    var number_s3 = Blockly.JavaScript.valueToCode(block, 's1', Blockly.JavaScript.ORDER_ATOMIC);
    var number_s4 = Blockly.JavaScript.valueToCode(block, 's0', Blockly.JavaScript.ORDER_ATOMIC);
    var number_s5 = Blockly.JavaScript.valueToCode(block, 's1', Blockly.JavaScript.ORDER_ATOMIC);
    var number_s6 = Blockly.JavaScript.valueToCode(block, 's0', Blockly.JavaScript.ORDER_ATOMIC);
    var number_s7 = Blockly.JavaScript.valueToCode(block, 's1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    setSensorMax(${number_s0}, ${number_s1}, ${number_s2}, ${number_s3}, ${number_s4}, ${number_s5}, ${number_s6}, ${number_s7});\n`;
    return code;
  };
  Blockly.JavaScript['easykids_linefollower'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
    var number_kp = Blockly.JavaScript.valueToCode(block, 'kp', Blockly.JavaScript.ORDER_ATOMIC);
    var number_kd = Blockly.JavaScript.valueToCode(block, 'kd', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    lineFollow(${number_speed}, ${number_kp}, ${number_kd});\n`;
    return code;
  };
  Blockly.JavaScript['easykids_linetime'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
    var number_kp = Blockly.JavaScript.valueToCode(block, 'kp', Blockly.JavaScript.ORDER_ATOMIC);
    var number_kd = Blockly.JavaScript.valueToCode(block, 'kd', Blockly.JavaScript.ORDER_ATOMIC);
    var number_timer = Blockly.JavaScript.valueToCode(block, 'timer', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    lineTimer(${number_speed}, ${number_kp}, ${number_kd}, ${number_timer});\n`;
    return code;
  };
  Blockly.JavaScript['easykids_linecross'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
    var number_kp = Blockly.JavaScript.valueToCode(block, 'kp', Blockly.JavaScript.ORDER_ATOMIC);
    var number_kd = Blockly.JavaScript.valueToCode(block, 'kd', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    lineCross(${number_speed}, ${number_kp}, ${number_kd});\n`;
    return code;
  };
  Blockly.JavaScript['easykids_line90left'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
    var number_kp = Blockly.JavaScript.valueToCode(block, 'kp', Blockly.JavaScript.ORDER_ATOMIC);
    var number_kd = Blockly.JavaScript.valueToCode(block, 'kd', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    line90Left(${number_speed}, ${number_kp}, ${number_kd});\n`;
    return code;
  };
  Blockly.JavaScript['easykids_line90right'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
    var number_kp = Blockly.JavaScript.valueToCode(block, 'kp', Blockly.JavaScript.ORDER_ATOMIC);
    var number_kd = Blockly.JavaScript.valueToCode(block, 'kd', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    line90Right(${number_speed}, ${number_kp}, ${number_kd});\n`;
    return code;
  };
  Blockly.JavaScript['easykids_lineturnleft'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    lineTurnLeft(${number_speed});\n`;
    return code;
  };
  Blockly.JavaScript['easykids_lineturnright'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    lineTurnRight(${number_speed});\n`;
    return code;
  };
}