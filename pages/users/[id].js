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
exports.getStaticProps = exports.getStaticPaths = void 0;
const sample_data_1 = require("../../utils/sample-data");
const Layout_1 = __importDefault(require("../../components/Layout"));
const ListDetail_1 = __importDefault(require("../../components/ListDetail"));
const StaticPropsDetail = ({ item, errors }) => {
    if (errors) {
        return (<Layout_1.default title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout_1.default>);
    }
    return (<Layout_1.default title={`${item ? item.name : "User Detail"} | Next.js + TypeScript Example`}>
      {item && <ListDetail_1.default item={item}/>}
    </Layout_1.default>);
};
exports.default = StaticPropsDetail;
const getStaticPaths = () => __awaiter(void 0, void 0, void 0, function* () {
    // Get the paths we want to pre-render based on users
    const paths = sample_data_1.sampleUserData.map((user) => ({
        params: { id: user.id.toString() },
    }));
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
});
exports.getStaticPaths = getStaticPaths;
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
const getStaticProps = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = params === null || params === void 0 ? void 0 : params.id;
        const item = sample_data_1.sampleUserData.find((data) => data.id === Number(id));
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { item } };
    }
    catch (err) {
        return { props: { errors: err.message } };
    }
});
exports.getStaticProps = getStaticProps;
