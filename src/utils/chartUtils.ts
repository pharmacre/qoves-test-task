export const initialChartValues = {
  brows: [2, 2],
  density: [85, 70],
  lips: [56],
  pigment: [18],
  thirds: [31, 38, 31],
  symmetry: [82, 78, 58],
};

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
