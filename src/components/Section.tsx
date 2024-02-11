import { Info } from "@/types/components.types";
import { getApis } from "@/utils/getApis";
import { modifyImageUrl } from "@/utils/modifuCodes";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";

export default async function Section() {
  const data = await getApis();
  return (
    <>
      {data.map((info: Info) => (
        <section key={info._id}>
          <h1>{info.title}</h1>
          <Image
            src={modifyImageUrl(info.image_principal.imagen.asset._ref)}
            alt={info?.image_principal.epigrafe}
            height={800}
            width={800}
            style={{
              maxHeight: "600px",
              maxWidth: "100%",
              width: "auto",
            }}
          />
        </section>
      ))}
    </>
  );
}
