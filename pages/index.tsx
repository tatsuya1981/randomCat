import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import styles from "./index.module.css";

type Props = {
  initialImageUrl: string;
};


const IndexPage: NextPage<Props> = ({ initialImageUrl}) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   fetchImage().then((newImage) => {
  //     setImageUrl(newImage.url);
  //     setLoading(false);
  //   });
  // }, [])

  const handleClick = async () => {
    setLoading(true); // 読み込みフラグを立てる
    const newImage = await fetchImage(); // 新しい画像を取得
    setImageUrl(newImage.url); // 画像のURLを更新
    setLoading(false); //読み込み中フラグを消す
  };
  return(
    <div className={styles.page}>
      <button onClick={handleClick} className={styles.button}>他のにゃんこも見る</button>
      <div>{loading || <img src={imageUrl} className={styles.img} />}</div>
    </div>
  )
};

export default IndexPage;

// サーバーサイドで実行する処理
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const image = await fetchImage();
  return {
    props: {
      initialImageUrl: image.url,
    },
  };
};

type Image = {
  url: string;
};

// Promiseが成功した場合に解決する値の型がImageであることを指定
const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  
  const images: unknown = await res.json();
  // 配列かどうか？
  if(!Array.isArray(images)) {
    throw new Error("猫の画像が取得できませんでした");
  }

  const image: unknown = images[0];
  // Imageの構造かどうか？
  if(!isImage(image)) {
    throw new Error("猫の画像が取得できませんでした");
  }
  return image;
};

// 型ガード関数
 const isImage = (value: unknown): value is Image => {
  // 値がオブジェクトなのかどうか？
  if(!value || typeof value !== "object") {
    return false;
  }
  // urlプロパティが存在し、文字列型なのかどうか？
  return "url" in value && typeof value.url === "string";
 };

fetchImage();