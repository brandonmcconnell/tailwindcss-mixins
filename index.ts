import plugin from 'tailwindcss/plugin';

// using empty values here so the compiler plays nice and generates the styles without values
const EMPTY_VALUES = { values: { DEFAULT: '' } };

const mixins = plugin(({ matchVariant }) => {
  matchVariant('mixin', (_, { modifier }) => `& .mixin${modifier ? `\\/${modifier}` : ''} { & }`, EMPTY_VALUES);
});

module.exports = mixins;
