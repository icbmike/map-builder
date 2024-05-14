import { draw } from "./draw";
import { createCanvas } from "./createCanvas";
import { createOptionsControl } from "./createOptionsControl";
import { sprites } from "./data";
import { loadAllAssets } from "./assets";
import { setupInputs } from './inputs';

const { ctx, cvs } = createCanvas();
const options = createOptionsControl();

sprites.sort((a, b) => b.position.z - a.position.z);

setupInputs(cvs);

// Define and start render loop
const render = () => {
  requestAnimationFrame(() => {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    draw(ctx, sprites, options);
    render();
  });
};

loadAllAssets().then(() => {
  render();
});
