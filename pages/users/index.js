"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
const link_1 = __importDefault(require("next/link"));
const sample_data_1 = require("../../utils/sample-data");
const Layout_1 = __importDefault(require("../../components/Layout"));
const List_1 = __importDefault(require("../../components/List"));
const WithStaticProps = ({ items }) => (<Layout_1.default title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List_1.default items={items}/>
    <p>
      <link_1.default href="/">Go home</link_1.default>
    </p>
  </Layout_1.default>);
const getStaticProps = () => __awaiter(void 0, void 0, void 0, function* () {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items = sample_data_1.sampleUserData;
    return { props: { items } };
});
exports.getStaticProps = getStaticProps;
exports.default = WithStaticProps;
