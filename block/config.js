const dirIcon = Vue.prototype.$global.board.board_info.dir;
module.exports = {
    blocks : [ // use "blocks : [ " in normally situation but this need to override base block from esp-idf platforms
    {
        name: "EasyKidsNano",
        color: "58",
        icon: `file:///${dirIcon}/static/icons/Robot.png`,
        blocks: [
            {
                xml: `<sep gap="24"></sep><label text="EasyKids: Input/Output" web-class="headline"></label>`
            },
            {
                xml: `<block type="easykids_setuppin">
             </block>
             <block type="easykids_writeio">
             </block>
             <block type="easykids_readio">
             </block>
             <block type="easykids_readadc">
             </block>
             <block type="easykids_readsw">
             </block>
             <block type="easykids_microstart">
             </block>
             <block type="easykids_sw">
             </block>`
            },
            {
                xml: `<sep gap="24"></sep><label text="EasyKids: Motor Control" web-class="headline"></label>`
            },
            {
                xml: `<block type="easykids_motor_forward">
                <value name="SPEED1">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="SPEED2">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_dc_forward">
                <value name="SPEED">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_dc_forward2">
                <value name="SPEED">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_motor_backward">
                <value name="SPEED1">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                    <value name="SPEED2">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_dc_backward">
                <value name="SPEED">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_dc_backward2">
                <value name="SPEED">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_turnleft">
                <value name="SPEED">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_turnright">
                <value name="SPEED">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_spinleft">
                <value name="SPEED">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_spinright">
                <value name="SPEED">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_motor1_stop">
            </block>
            <block type="easykids_motor2_stop">
            </block>
            <block type="easykidsmotorstopall">
            </block>`
            },
           
        ]
    },
    {
        name: "LineFollower",
        color: "58",
        icon: `file:///${dirIcon}/static/icons/LineFollower.png`,
        blocks: [
            {
                xml: `<sep gap="24"></sep><label text="EasyKids: LineFollower" web-class="headline"></label>`
            },
            {
                xml: `<block type="easykids_sensornum">
             </block>
             <block type="easykids_blackline">
             </block>
             <block type="easykids_whiteline">
             </block>
             <block type="easykids_readsensor">
             </block>
             <block type="easykids_sw">
             </block>
             `
            },
            {
                xml: `<block type="easykids_sensormin">
                <value name="s0">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="s1">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="s2">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="s3">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="s4">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="s5">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="s6">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="s7">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_sensormax">
                <value name="s0">
                    <shadow type="math_number">
                        <field name="NUM">1023</field>
                    </shadow>
                </value>
                <value name="s1">
                    <shadow type="math_number">
                        <field name="NUM">1023</field>
                    </shadow>
                </value>
                <value name="s2">
                    <shadow type="math_number">
                        <field name="NUM">1023</field>
                    </shadow>
                </value>
                <value name="s3">
                    <shadow type="math_number">
                        <field name="NUM">1023</field>
                    </shadow>
                </value>
                <value name="s4">
                    <shadow type="math_number">
                        <field name="NUM">1023</field>
                    </shadow>
                </value>
                <value name="s5">
                    <shadow type="math_number">
                        <field name="NUM">1023</field>
                    </shadow>
                </value>
                <value name="s6">
                    <shadow type="math_number">
                        <field name="NUM">1023</field>
                    </shadow>
                </value>
                <value name="s7">
                    <shadow type="math_number">
                        <field name="NUM">1023</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_linefollower">
                <value name="speed">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="kp">
                    <shadow type="math_number">
                        <field name="NUM">1.2</field>
                    </shadow>
                </value>
                <value name="kd">
                    <shadow type="math_number">
                        <field name="NUM">0.5</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_linetime">
                <value name="speed">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="kp">
                    <shadow type="math_number">
                        <field name="NUM">1.2</field>
                    </shadow>
                </value>
                <value name="kd">
                    <shadow type="math_number">
                        <field name="NUM">0.5</field>
                    </shadow>
                </value>
                <value name="timer">
                <shadow type="math_number">
                    <field name="NUM">1000</field>
                </shadow>
            </value>
            </block>`
            },
            {
                xml: `<block type="easykids_linecross">
                <value name="speed">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="kp">
                    <shadow type="math_number">
                        <field name="NUM">1.2</field>
                    </shadow>
                </value>
                <value name="kd">
                    <shadow type="math_number">
                        <field name="NUM">0.5</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_line90left">
                <value name="speed">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="kp">
                    <shadow type="math_number">
                        <field name="NUM">1.2</field>
                    </shadow>
                </value>
                <value name="kd">
                    <shadow type="math_number">
                        <field name="NUM">0.5</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_line90right">
                <value name="speed">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="kp">
                    <shadow type="math_number">
                        <field name="NUM">1.2</field>
                    </shadow>
                </value>
                <value name="kd">
                    <shadow type="math_number">
                        <field name="NUM">0.5</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_lineturnleft">
                <value name="speed">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
            },
            {
                xml: `<block type="easykids_lineturnright">
                <value name="speed">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
            },
        ]
    }
    ]
};