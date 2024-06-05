#include <Arduino.h>
#include "EasyNano.h"
typedef int Number;
typedef int Boolean;

${EXTINC}
#define dir1A 3
#define dir1B 4
#define pwm1 5

#define dir2A 7
#define dir2B 8
#define pwm2 6
int m1 = 0;
int m2 = 0;
int speedm = 0;


${VARIABLE}

${FUNCTION}

void setup()
{
  EasyKids_Setup();
  ${SETUP_CODE}
  ${BLOCKSETUP}
}
void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}
