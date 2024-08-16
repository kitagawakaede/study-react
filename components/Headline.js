"use client";  // クライアントコンポーネントとして使用

import React, { useEffect } from "react";

export default function Headline({ title }) {
  useEffect(() => {
    console.log({ title });
  }, [title]);

  return (



  <h2>{title}</h2>
  );
}
