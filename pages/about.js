"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const Layout_1 = __importDefault(require("../components/Layout"));
const AboutPage = () => (<Layout_1.default title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <link_1.default href="/">Go home</link_1.default>
    </p>
  </Layout_1.default>);
exports.default = AboutPage;
