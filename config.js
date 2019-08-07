module.exports = {
  spreadsheetUrl:
    'https://docs.google.com/spreadsheets/d/1DxPJ5G_1oRlNgPg2102n-KB2wmKTOUHwyIRwfOWBM4s/edit#gid=0',
  worksheets: [
    {
      id: 1,
      name: 'colors',
    },
    {
      id: 2,
      name: 'spacing',
    },
  ],
  formats: [
    {
      transform: 'web',
      format: 'scss',
    },
    {
      transform: 'web',
      format: 'common.js',
    },
    {
      transform: 'ios',
      format: 'ios.json',
    },
  ],
  outputDirectory: './tokens/',
};
