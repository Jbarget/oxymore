export interface DataValues {
  population: number;
  populationAffected: number;
  percentageAffected: number;
  casesTreated?: number | undefined;
}
export type DataSet = keyof DataValues;
export interface EyeData {
  coords: [number, number];
  name: string;
  data: DataValues;
}

const eyeData: EyeData[] = [
  {
    name: "Morocco",
    coords: [17, 68],
    data: {
      population: 36444324,
      populationAffected: 1382808,
      percentageAffected: 4.03,
      casesTreated: 324,
    },
  },
  {
    name: "Tunisia",
    coords: [18, 105],
    data: {
      population: 11835284,
      populationAffected: 514191,
      percentageAffected: 4,
    },
  },
  {
    name: "Libya",
    coords: [26, 133],
    data: {
      population: 6700086,
      populationAffected: 147514,
      percentageAffected: 2.9,
    },
  },
  {
    name: "Egypt",
    coords: [29, 158],
    data: {
      population: 100517804,
      populationAffected: 2612803,
      percentageAffected: 3.55,
    },
  },
  {
    name: "Algeria",
    coords: [36, 95],
    data: {
      population: 43007769,
      populationAffected: 1425342,
      percentageAffected: 3.75,
    },
  },
  {
    name: "Mauritius",
    coords: [135, 200],
    data: {
      population: 4573157,
      populationAffected: 107317,
      percentageAffected: 4.34,
    },
  },
  {
    name: "Sudan",
    coords: [52, 152],
    data: {
      population: 45308399,
      populationAffected: 1124066,
      percentageAffected: 4.55,
    },
  },
  {
    name: "Chad",
    coords: [55, 127],
    data: {
      population: 16431332,
      populationAffected: 409439,
      percentageAffected: 5.75,
    },
  },
  {
    name: "Niger",
    coords: [56, 101],
    data: {
      population: 24314931,
      populationAffected: 620589,
      percentageAffected: 5.69,
      casesTreated: 213,
    },
  },
  {
    name: "Mali",
    coords: [55, 75],
    data: {
      population: 20456890,
      populationAffected: 414692,
      percentageAffected: 4.75,
    },
  },
  {
    name: "Senegal",
    coords: [54, 45],
    data: {
      population: 17487409,
      populationAffected: 329943,
      percentageAffected: 3.99,
      casesTreated: 499,
    },
  },
  {
    name: "Cape Verde",
    coords: [55, 22],
    data: {
      population: 552850,
      populationAffected: 14611,
      percentageAffected: 3.72,
      casesTreated: 401,
    },
  },
  {
    name: "Eritrea",
    coords: [57, 174],
    data: {
      population: 5891500,
      populationAffected: 180704,
      percentageAffected: 6.46,
    },
  },
  {
    name: "Djibouti",
    coords: [67, 185],
    data: {
      population: 34,
      populationAffected: 2,
      percentageAffected: 3,
    },
  },
  {
    name: "Ethiopia",
    coords: [71, 164],
    data: {
      population: 111971051,
      populationAffected: 2348694,
      percentageAffected: 3.96,
    },
  },
  {
    name: "Benin",
    coords: [74, 93],
    data: {
      population: 12360726,
      populationAffected: 236187,
      percentageAffected: 4.13,
    },
  },
  {
    name: "Burkina Faso",
    coords: [67, 79],
    data: {
      population: 20860541,
      populationAffected: 406485,
      percentageAffected: 4.47,
    },
  },
  {
    name: "Guinea",
    coords: [70, 59],
    data: {
      population: 14354833,
      populationAffected: 339620,
      percentageAffected: 4.61,
      casesTreated: 628,
    },
  },
  {
    name: "Guinea Bissau",
    coords: [70, 45],
    data: {
      population: 2068363,
      populationAffected: 50326,
      percentageAffected: 4.6,
    },
  },
  {
    name: "Gambia",
    coords: [64, 41],
    data: {
      population: 34,
      populationAffected: 2,
      percentageAffected: 3,
    },
  },
  {
    name: "Sierra Leone",
    coords: [80, 53],
    data: {
      population: 7160373,
      populationAffected: 143695,
      percentageAffected: 4.31,
      casesTreated: 332,
    },
  },
  {
    name: "Liberia",
    coords: [84, 63],
    data: {
      population: 5090855,
      populationAffected: 109345,
      percentageAffected: 4.25,
    },
  },
  {
    name: "Ghana",
    coords: [83, 79],
    data: {
      population: 30530449,
      populationAffected: 634228,
      percentageAffected: 3.86,
      casesTreated: 317,
    },
  },
  {
    name: "Togo",
    coords: [80, 89],
    data: {
      population: 8293638,
      populationAffected: 163297,
      percentageAffected: 4.13,
    },
  },
  {
    name: "Nigeria",
    coords: [80, 106],
    data: {
      population: 206863087,
      populationAffected: 3904999,
      percentageAffected: 4.13,
    },
  },
  {
    name: "Central African Republic",
    coords: [81, 130],
    data: {
      population: 5408758,
      populationAffected: 142693,
      percentageAffected: 4.65,
    },
  },
  {
    name: "Somalia",
    coords: [81, 183],
    data: {
      population: 12422741,
      populationAffected: 279139,
      percentageAffected: 4.84,
    },
  },
  {
    name: "Kenya",
    coords: [93, 168],
    data: {
      population: 52186722,
      populationAffected: 750760,
      percentageAffected: 3.02,
      casesTreated: 75,
    },
  },
  {
    name: "Uganda",
    coords: [86, 151],
    data: {
      population: 45856367,
      populationAffected: 536641,
      percentageAffected: 2.99,
      casesTreated: 169,
    },
  },
  {
    name: "Cameroon",
    coords: [89, 117],
    data: {
      population: 26332965,
      populationAffected: 362539,
      percentageAffected: 2.89,
    },
  },
  {
    name: "Equatorial Guinea",
    coords: [95, 111],
    data: {
      population: 970828,
      populationAffected: 18649,
      percentageAffected: 3.3,
    },
  },
  {
    name: "Gabon",
    coords: [104, 114],
    data: {
      population: 1917169,
      populationAffected: 37584,
      percentageAffected: 2.91,
      casesTreated: 171,
    },
  },
  {
    name: "Republic of Congo",
    coords: [105, 125],
    data: {
      population: 5263342,
      populationAffected: 83782,
      percentageAffected: 2.99,
    },
  },
  {
    name: "Democratic Republic of Congo",
    coords: [98, 135],
    data: {
      population: 90169404,
      populationAffected: 1686670,
      percentageAffected: 3.98,
    },
  },
  {
    name: "Rwanda",
    coords: [99, 147],
    data: {
      population: 12996594,
      populationAffected: 191276,
      percentageAffected: 2.96,
    },
  },
  {
    name: "Burundi",
    coords: [104, 145],
    data: {
      population: 13126273,
      populationAffected: 194434,
      percentageAffected: 3.31,
    },
  },
  {
    name: "United Republic of Tanzania",
    coords: [106, 159],
    data: {
      population: 62267349,
      populationAffected: 895117,
      percentageAffected: 3.02,
    },
  },
  {
    name: "Comoros",
    coords: [115, 178],
    data: {
      population: 883162,
      populationAffected: 14412,
      percentageAffected: 3.27,
    },
  },
  {
    name: "Zambia",
    coords: [118, 139],
    data: {
      population: 18882333,
      populationAffected: 227777,
      percentageAffected: 2.81,
    },
  },
  {
    name: "Angola",
    coords: [122, 124],
    data: {
      population: 29245334,
      populationAffected: 383947,
      percentageAffected: 3.21,
      casesTreated: 703,
    },
  },
  {
    name: "Malawi",
    coords: [121, 151],
    data: {
      population: 20022268,
      populationAffected: 326529,
      percentageAffected: 3.47,
    },
  },
  {
    name: "Mozambique",
    coords: [128, 161],
    data: {
      population: 31992997,
      populationAffected: 514011,
      percentageAffected: 3.26,
      casesTreated: 228,
    },
  },
  {
    name: "Zimbabwe",
    coords: [135, 148],
    data: {
      population: 17470705,
      populationAffected: 184147,
      percentageAffected: 2.37,
      casesTreated: 281,
    },
  },
  {
    name: "Botswana",
    coords: [141, 135],
    data: {
      population: 2460223,
      populationAffected: 19859,
      percentageAffected: 1.37,
    },
  },
  {
    name: "Namibia",
    coords: [135, 120],
    data: {
      population: 2731165,
      populationAffected: 39950,
      percentageAffected: 2.62,
    },
  },
  {
    name: "Madagascar",
    coords: [137, 192],
    data: {
      population: 27798964,
      populationAffected: 484014,
      percentageAffected: 3.47,
    },
  },
  {
    name: "Swaziland",
    coords: [149, 151],
    data: {
      population: 1366266,
      populationAffected: 17559,
      percentageAffected: 2.46,
    },
  },
  {
    name: "Lesotho",
    coords: [155, 145],
    data: {
      population: 2257685,
      populationAffected: 37091,
      percentageAffected: 2.98,
    },
  },
  {
    name: "South Africa",
    coords: [165, 136],
    data: {
      population: 56668602,
      populationAffected: 984002,
      percentageAffected: 2.31,
    },
  },
];

export default eyeData;
