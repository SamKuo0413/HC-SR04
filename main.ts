radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        第一台距離二 = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
        )
        if (第一台距離一 > 第一台距離二) {
            radio.sendNumber(1)
            第一台距離一 = sonar.ping(
            DigitalPin.P0,
            DigitalPin.P1,
            PingUnit.Centimeters
            )
        }
    }
    if (receivedNumber == 2) {
        第二台距離二 = sonar.ping(
        DigitalPin.P2,
        DigitalPin.P3,
        PingUnit.Centimeters
        )
        if (第二台距離一 > 第二台距離二) {
            radio.sendNumber(2)
            第二台距離一 = sonar.ping(
            DigitalPin.P2,
            DigitalPin.P3,
            PingUnit.Centimeters
            )
        }
    }
    if (receivedNumber == 3) {
        第三台距離二 = sonar.ping(
        DigitalPin.P5,
        DigitalPin.P4,
        PingUnit.Centimeters
        )
        if (第三台距離一 > 第三台距離二) {
            radio.sendNumber(3)
            第三台距離一 = sonar.ping(
            DigitalPin.P5,
            DigitalPin.P4,
            PingUnit.Centimeters
            )
        }
    }
})
let 第三台距離二 = 0
let 第二台距離二 = 0
let 第一台距離二 = 0
let 第三台距離一 = 0
let 第二台距離一 = 0
let 第一台距離一 = 0
第一台距離一 = sonar.ping(
DigitalPin.P0,
DigitalPin.P1,
PingUnit.Centimeters
)
第二台距離一 = sonar.ping(
DigitalPin.P2,
DigitalPin.P3,
PingUnit.Centimeters
)
第三台距離一 = sonar.ping(
DigitalPin.P5,
DigitalPin.P4,
PingUnit.Centimeters
)
