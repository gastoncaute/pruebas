import { Info } from "@/types/components.types";
import { getApis } from "@/utils/getApis";
import { modifyUrl } from "@/utils/modifuCodes";
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
          {info.image_principal && info.image_principal.imagen && (
            <Image
              src={modifyUrl(info.image_principal.imagen.asset._ref, true)}
              alt={info.image_principal.epigrafe}
              height={800}
              width={800}
              style={{
                maxHeight: "600px",
                maxWidth: "100%",
                width: "auto",
              }}
            />
          )}
          {(!info.image_principal || !info.image_principal.imagen) &&
            info.image_principal?.video && (
              <video controls>
                <source
                  src={modifyUrl(info.image_principal.video.asset._ref, false)}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
        </section>
      ))}
    </>
  );
}
