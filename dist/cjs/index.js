"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
// using empty values here so the compiler plays nice and generates the styles without values
const EMPTY_VALUES = { values: { DEFAULT: '' } };
const mixins = (0, plugin_1.default)(({ matchVariant }) => {
    matchVariant('mixin', (_, { modifier }) => `& .mixin${modifier ? `\\/${modifier}` : ''} { & }`, EMPTY_VALUES);
});
exports.default = mixins;
