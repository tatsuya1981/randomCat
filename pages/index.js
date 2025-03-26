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
exports.getServerSideProps = void 0;
const react_1 = require("react");
const index_module_css_1 = __importDefault(require("./index.module.css"));
const IndexPage = ({ initialImageUrl }) => {
    const [imageUrl, setImageUrl] = (0, react_1.useState)(initialImageUrl);
    const [loading, setLoading] = (0, react_1.useState)(false);
    // useEffect(() => {
    //   fetchImage().then((newImage) => {
    //     setImageUrl(newImage.url);
    //     setLoading(false);
    //   });
    // }, [])
    const handleClick = () => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true); // 読み込みフラグを立てる
        const newImage = yield fetchImage(); // 新しい画像を取得
        setImageUrl(newImage.url); // 画像のURLを更新
        setLoading(false); //読み込み中フラグを消す
    });
    return (<div className={index_module_css_1.default.page}>
      <button onClick={handleClick} className={index_module_css_1.default.button}>他のにゃんこも見る</button>
      <div>{loading || <img src={imageUrl} className={index_module_css_1.default.img}/>}</div>
    </div>);
};
exports.default = IndexPage;
// サーバーサイドで実行する処理
const getServerSideProps = () => __awaiter(void 0, void 0, void 0, function* () {
    const image = yield fetchImage();
    return {
        props: {
            initialImageUrl: image.url,
        },
    };
});
exports.getServerSideProps = getServerSideProps;
// Promiseが成功した場合に解決する値の型がImageであることを指定
const fetchImage = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://api.thecatapi.com/v1/images/search");
    const images = yield res.json();
    // 配列かどうか？
    if (!Array.isArray(images)) {
        throw new Error("猫の画像が取得できませんでした");
    }
    const image = images[0];
    // Imageの構造かどうか？
    if (!isImage(image)) {
        throw new Error("猫の画像が取得できませんでした");
    }
    return image;
});
// 型ガード関数
const isImage = (value) => {
    // 値がオブジェクトなのかどうか？
    if (!value || typeof value !== "object") {
        return false;
    }
    // urlプロパティが存在し、文字列型なのかどうか？
    return "url" in value && typeof value.url === "string";
};
fetchImage();
