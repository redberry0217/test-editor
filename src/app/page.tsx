"use client";

import { Tldraw } from "tldraw";

export default function Home() {
  // const tlDrawInstance = new Tldraw();

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw />
      {/* <button onClick={()=>{
        tlDrawInstance.save~~~

      }}>PNG로 저장하기</button> */}
    </div>
  );
}
