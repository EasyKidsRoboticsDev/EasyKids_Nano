#include <Arduino.h>
#include <vector>
#include <WiFi.h>
#include <Wire.h>
#include "Servo32.h"
#include "SPI.h"

#define _EN_A  27
#define _EN_B  26
#define _EN_C  16
#define _EN_D  17
#define _MotorA_ch  1
#define _MotorB_ch  2
#define _MotorC_ch  3
#define _MotorD_ch  4
int m1 = 0;
int m2 = 0;
int m3 = 0;
int m4 = 0;
int speedm = 0;
static const int servoPin = 25;
static const int potentiometerPin = 34;

Servo servo1;

void setup() {
    Serial.begin(115200);
    servo1.attach(servoPin);
    // ledcSetup(_MotorA_ch, 50, 8);
    // ledcAttachPin(_EN_A, _MotorA_ch);
    // ledcSetup(_MotorB_ch, 1000, 8);
    // ledcAttachPin(_EN_B, _MotorB_ch);
    // ledcSetup(_MotorC_ch, 1000, 8);
    // ledcAttachPin(_EN_C, _MotorC_ch);
    // ledcSetup(_MotorD_ch, 1000, 8);
    // ledcAttachPin(_EN_D, _MotorD_ch);
}

void loop() {
    int servoPosition = map(analogRead(potentiometerPin), 0, 4096, 0, 180);
    servo1.write(servoPosition);
    Serial.println(servoPosition);
    delay(20);
}
