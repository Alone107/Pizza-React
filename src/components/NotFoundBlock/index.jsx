import React from "react";
import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={styles.notFound}>
      <h1>
        <span>😔 </span> <br /> Ничего не найдено
      </h1>
      <p>К сожалению такой страницы не существует</p>
    </div>
  );
};
