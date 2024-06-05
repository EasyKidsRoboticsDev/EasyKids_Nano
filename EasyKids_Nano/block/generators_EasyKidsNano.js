module.exports = function (Blockly) {

  // =============================================================================
  // EasyKids_Nano v.5 by EasyKidsRobotics
  // =============================================================================

  Blockly.JavaScript['easykids_setuppin'] = function (block) {
    var dropdown_pinio = block.getFieldValue('PINIO');
    var dropdown_mode = block.getFieldValue('MODE');
    // TODO: Assemble JavaScript into code variable.
    var code = `pinMode(${dropdown_pinio},${dropdown_mode});\n`;
    return code;
  };

  Blockly.JavaScript['easykids_writeio'] = function (block) {
    var dropdown_easykb_writeiopin = block.getFieldValue('EasyKB WriteIOPIN');
    var dropdown_logic = block.getFieldValue('Logic');
    // TODO: Assemble JavaScript into code variable.
    var code = `digitalWrite(${dropdown_easykb_writeiopin},${dropdown_logic});\n`;
    return code;
  };

  Blockly.JavaScript['easykids_readio'] = function (block) {
    var dropdown_pinreadio = block.getFieldValue('PINReadIO');
    // TODO: Assemble JavaScript into code variable.
    var code = `digitalRead(${dropdown_pinreadio})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['easykids_readadc'] = function (block) {
    var dropdown_pinadc = block.getFieldValue('PINADC');
    // TODO: Assemble JavaScript into code variable.
    var code = `analogRead(${dropdown_pinadc})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['easykids_readsw'] = function (block) {
    //var dropdown_pinreadio = block.getFieldValue('PINReadIO');
    // TODO: Assemble JavaScript into code variable.

    var code = `digitalRead(9)`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['easykids_microstart'] = function (block) {
    //var dropdown_pinreadio = block.getFieldValue('PINReadIO');
    // TODO: Assemble JavaScript into code variable.
    
    var code = `#SETUP pinMode(13,INPUT);#END 
    digitalRead(13)`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['easykids_sw'] = function (block) {
    //var dropdown_sw = block.getFieldValue('swpin');
    // TODO: Assemble JavaScript into code variable.
    var code = `while(digitalRead(9) == 1){}`;
    // TODO: Change ORDER_NONE to the correct strength.
    //return [code, Blockly.JavaScript.ORDER_NONE];
    return code;
  };

  // #############################  DC Motor  ##################################
  Blockly.JavaScript['easykids_motor_forward'] = function (block) {
    var number_speed1 = Blockly.JavaScript.valueToCode(block, 'SPEED1', Blockly.JavaScript.ORDER_ATOMIC);
    var number_speed2 = Blockly.JavaScript.valueToCode(block, 'SPEED2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
      m1 = ${number_speed1};
      m1 = map(m1, 0, 100, 0, 255);
      analogWrite(pwm1, m1);
      digitalWrite(dir1A, LOW);
      digitalWrite(dir1B, HIGH);
      m2 = ${number_speed2};
      m2 = map(m2, 0, 100, 0, 255);
      analogWrite(pwm2, m2);
      digitalWrite(dir2A, LOW);
      digitalWrite(dir2B, HIGH);\n`;
    return code;
  };

  Blockly.JavaScript['easykids_motor_backward'] = function (block) {
    var number_speed1 = Blockly.JavaScript.valueToCode(block, 'SPEED1', Blockly.JavaScript.ORDER_ATOMIC);
    var number_speed2 = Blockly.JavaScript.valueToCode(block, 'SPEED2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    m1 = ${number_speed1};
    m1 = map(m1, 0, 100, 0, 255);
    analogWrite(pwm1, m1);
    digitalWrite(dir1A, HIGH);
    digitalWrite(dir1B, LOW);
    m2 = ${number_speed2};
    m2 = map(m2, 0, 100, 0, 255);
    analogWrite(pwm2, m2);
    digitalWrite(dir2A, HIGH);
    digitalWrite(dir2B, LOW);\n`;
    return code;
  };

  Blockly.JavaScript['easykids_dc_forward'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    m1 = ${number_speed};
    m1 = map(m1, 0, 100, 0, 255);
    analogWrite(pwm1, m1);
    digitalWrite(dir1A, HIGH);
    digitalWrite(dir1B, LOW);\n`;
    return code;
  };

  Blockly.JavaScript['easykids_dc_forward2'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    m2 = ${number_speed2};
    m2 = map(m2, 0, 100, 0, 255);
    analogWrite(pwm2, m2);
    digitalWrite(dir2A, HIGH);
    digitalWrite(dir2B, LOW);\n`;
    return code;
  };

  Blockly.JavaScript['easykids_dc_backward'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    m1 = ${number_speed};
    m1 = map(m1, 0, 100, 0, 255);
    analogWrite(pwm1, m1);
    digitalWrite(dir1A, LOW);
    digitalWrite(dir1B, HIGH);\n`;
    return code;
  };

  Blockly.JavaScript['easykids_dc_backward2'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    m2 = ${number_speed2};
    m2 = map(m2, 0, 100, 0, 255);
    analogWrite(pwm2, m2);
    digitalWrite(dir2A, LOW);
    digitalWrite(dir2B, HIGH);\n`;
    return code;
  };
  Blockly.JavaScript['easykids_turnleft'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `
    analogWrite(pwm1, 255);
    digitalWrite(dir1A, HIGH);
    digitalWrite(dir1B, HIGH);
    m2 = ${number_speed2};
    m2 = map(m2, 0, 100, 0, 255);
    analogWrite(pwm2, m2);
    digitalWrite(dir2A, HIGH);
    digitalWrite(dir2B, LOW);\n`;
    return code;
  };

  Blockly.JavaScript['easykids_turnright'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `
    m1 = ${number_speed1};
    m1 = map(m1, 0, 100, 0, 255);
    analogWrite(pwm1, m1);
    digitalWrite(dir1A, HIGH);
    digitalWrite(dir1B, LOW);
    analogWrite(pwm2, 255);
    digitalWrite(dir2A, HIGH);
    digitalWrite(dir2B, HIGH);\n`;
    return code;
  };
  Blockly.JavaScript['easykids_spinleft'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `
    speedm = ${number_speed};
    speedm = map(speedm, 0, 100, 0, 255);
    analogWrite(pwm1, speedm);
    digitalWrite(dir1A, HIGH);
    digitalWrite(dir1B, LOW);
    analogWrite(pwm2, speedm);
    digitalWrite(dir2A, LOW);
    digitalWrite(dir2B, HIGH);\n`;
    return code;
  };

  Blockly.JavaScript['easykids_spinright'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `
    speedm = ${number_speed};
    speedm = map(speedm, 0, 100, 0, 255);
    analogWrite(pwm1, speedm);
    digitalWrite(dir1A, LOW);
    digitalWrite(dir1B, HIGH);
    analogWrite(pwm2, speedm);
    digitalWrite(dir2A, HIGH);
    digitalWrite(dir2B, LOW);\n`;
    return code;
  };

  Blockly.JavaScript['easykids_motor1_stop'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `
    analogWrite(pwm1, 255);
    digitalWrite(dir1A, HIGH);
    digitalWrite(dir1B, HIGH);\n`;

    return code;
  };

  Blockly.JavaScript['easykids_motor2_stop'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `
    analogWrite(pwm2, 255);
    digitalWrite(dir2A, HIGH);
    digitalWrite(dir2B, HIGH);\n`;
    return code;
  };

  Blockly.JavaScript['easykidsmotorstopall'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `
    analogWrite(pwm1, 255);
    digitalWrite(dir1A, HIGH);
    digitalWrite(dir1B, HIGH);
    analogWrite(pwm2, 255);
    digitalWrite(dir2A, HIGH);
    digitalWrite(dir2B, HIGH);\n`;
    return code;
  };
}