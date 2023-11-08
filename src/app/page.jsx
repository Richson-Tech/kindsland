import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <main>
      <div className="h-max max-w-full">
        <Image
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXN0YXRlfGVufDB8fDB8fHww"
          height={200}
          width={1800}
        />
      </div>
    </main>
  );
};

export default Page;
