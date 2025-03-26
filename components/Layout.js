"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const head_1 = __importDefault(require("next/head"));
const Layout = ({ children, title = "This is the default title" }) => (<div>
    <head_1.default>
      <title>{title}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </head_1.default>
    <header>
      <nav>
        <link_1.default href="/">Home</link_1.default> | <link_1.default href="/about">About</link_1.default> |{" "}
        <link_1.default href="/users">Users List</link_1.default> |{" "}
        <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>);
exports.default = Layout;
