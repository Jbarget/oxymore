export interface EyeData {
  coords: [number, number];
  name: string;
  active: boolean;
  data: {
    population: number;
    populationPerCapita: number;
    percentage: number;
  };
}

const eyeData: EyeData[] = [
  {
    name: "Morocco",
    coords: [17, 68],
    active: true,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Tunisia",
    coords: [18, 105],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Libya",
    coords: [26, 133],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Egypt",
    coords: [29, 158],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Algeria",
    coords: [36, 95],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Sudan",
    coords: [52, 152],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Chad",
    coords: [55, 127],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Niger",
    coords: [56, 101],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Mali",
    coords: [55, 75],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Senegal",
    coords: [54, 45],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Cape Verde",
    coords: [55, 22],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Eritrea",
    coords: [57, 174],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Djibouti",
    coords: [67, 185],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Ethiopia",
    coords: [71, 164],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Benin",
    coords: [74, 93],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Burkina Faso",
    coords: [67, 79],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Guinea",
    coords: [70, 59],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Guinea Bissau",
    coords: [70, 45],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Gambia",
    coords: [64, 41],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Sierra Leone",
    coords: [80, 53],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Liberia",
    coords: [84, 63],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Ghana",
    coords: [83, 79],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Togo",
    coords: [80, 89],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Nigeria",
    coords: [80, 106],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Central African Republic",
    coords: [81, 130],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Somalia",
    coords: [81, 183],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Kenya",
    coords: [93, 168],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Uganda",
    coords: [86, 151],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Cameroon",
    coords: [89, 117],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Equatorial Guinea",
    coords: [95, 111],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Gabon",
    coords: [104, 114],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Republic of Congo",
    coords: [105, 125],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Democratic Republic of Congo",
    coords: [98, 135],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Rwanda",
    coords: [99, 147],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Burundi",
    coords: [104, 145],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Tanzania",
    coords: [106, 159],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Comoros",
    coords: [115, 178],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Zambia",
    coords: [118, 139],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Angola",
    coords: [122, 124],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Malawi",
    coords: [121, 151],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Mozambique",
    coords: [128, 161],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Zimbabwe",
    coords: [135, 148],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Botswana",
    coords: [141, 135],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Namibia",
    coords: [135, 120],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Madagascar",
    coords: [137, 192],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Swaziland",
    coords: [149, 151],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "Lesotho",
    coords: [155, 145],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
  {
    name: "South Africa",
    coords: [165, 136],
    active: false,
    data: {
      population: 34,
      populationPerCapita: 2,
      percentage: 3,
    },
  },
];

export default eyeData;
