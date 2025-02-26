export type AssetList = Record<string, HTMLImageElement | undefined>;

export const assets: AssetList = {};

export const listAssetNames = () => {
  return Object.entries(assets)
    .filter(([_, image]) => !!image)
    .map(([assetName, _]) => assetName);
};

export const assetList: [string, string][] = [
  ['tree', './tree.png'],
  ['freddie', './freddie.png'],
  ['grass_tile', './grass_tile.png'],
  ['log', './log.png'],
  ['long_grass_patch', './long_grass_patch.png'],
  ['long_grass_tile', './long_grass_tile.png'],
  ['pink_flowers', './pink_flowers.png'],
  ['white_flowers', './white_flowers.png'],
  ['blue_flowers', './blue_flowers.png'],
  ['yellow_flowers', './yellow_flowers.png'],
  ['signpost', './signpost.png'],
  ['round_tree', './round_tree.png'],
  ['round_tree_dark_green', './round_tree_dark_green.png'],
  ['rose', './rose.png'],
  ['archer', './archer.png'],
  ['cobblestone_tile', './cobblestone_tile.png'],
  ['fountain', './fountain.png'],
  ['lantern', './lantern.png'],
  ['reinforced_door', './reinforced_door.png'],
  ['brick_wall_high', './brick_wall_high.png'],
  ['wall_horizontal', './wall_horizontal.png'],
  ['statue_1', './statue_1.png'],
  ['statue_2', './statue_2.png'],
  ['vine', './vine.png'],
  ['vine', './vine.png'],
  ['lamp_post_tall_1', './lamp_post_tall_1.png'],
  ['lamp_post_tall_2', './lamp_post_tall_2.png'],
  ['lamp_post_short_1', './lamp_post_short_1.png'],
  ['lamp_post_short_2', './lamp_post_short_2.png'],
  ['notice_board', './notice_board.png'],
  ['dock_horizontal', './dock_horizontal.png'],
  ['banner_1', './banner_1.png'],
  ['banner_2', './banner_2.png'],
  ['black_cat', './black_cat.png'],
  ['gray_cat', './gray_cat.png'],

  ['water_tile', './water_tile.png'],
  ['water_inverse_corners', './water_inverse_corners.png'],
  ['water_corners', './water_corners.png'],
  ['water_vertical_sides', './water_vertical_sides.png'],
  ['water_horizontal_sides', './water_horizontal_sides.png'],
  ['water_bank_top', './water_bank_top.png'],
  ['water_bank_bottom', './water_bank_bottom.png'],

  ['path_horizontal_sides', './path_horizontal_sides.png'],
  ['path_vertical_sides', './path_vertical_sides.png'],
  ['path_tile', './path_tile.png'],
  ['path_corners', './path_corners.png'],
  ['path_inverse_corners', './path_inverse_corners.png'],
];
