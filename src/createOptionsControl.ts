import { Options } from "./models";

export const createOptionsControl = () => {
  const options: Options = {
    showGrid: false,
    tileSize: 50
  }

  const optionsControl = document.createElement('div');

  optionsControl.className = 'optionsControl';

  const showGridCheckbox = document.createElement('input');
  showGridCheckbox.type = 'checkbox';
  showGridCheckbox.checked = options.showGrid;
  showGridCheckbox.addEventListener('change', function () {
    options.showGrid = this.checked
  })

  const showGridLabel = document.createElement('label');
  showGridLabel.style.display = 'block'

  showGridLabel.innerText = 'Show grid: ';
  showGridLabel.appendChild(showGridCheckbox);

  optionsControl.appendChild(showGridLabel);

  const tileSizeInput = document.createElement('input');
  tileSizeInput.type = 'range'
  tileSizeInput.min = '5';
  tileSizeInput.step = '1';
  tileSizeInput.max = '100';
  tileSizeInput.value = options.tileSize.toString();
  tileSizeInput.addEventListener('input', function () {
    options.tileSize = parseInt(this.value);
  });

  const tileSizeLabel = document.createElement('label');
  tileSizeLabel.style.display = 'block'
  tileSizeLabel.innerText = 'Tile size: ';
  tileSizeLabel.appendChild(tileSizeInput);

  optionsControl.appendChild(tileSizeLabel);

  document.getElementsByTagName('body')[0].appendChild(optionsControl)

  return options;
}