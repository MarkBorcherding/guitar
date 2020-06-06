import five from "johnny-five"
import serialPort from "serialPort"


const board = new five.Board();

board.on("ready", () => {
  // Create an Led on pin 13
  const led = new five.Led(13);

  // Strobe the pin on/off, defaults to 100ms phases
  led.strobe(20);

});