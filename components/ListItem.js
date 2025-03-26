"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const ListItem = ({ data }) => (<link_1.default href="/users/[id]" as={`/users/${data.id}`}>
    {data.id}:{data.name}
  </link_1.default>);
exports.default = ListItem;
