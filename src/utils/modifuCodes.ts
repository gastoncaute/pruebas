export const modifyImageUrl = (imageRef: any) => {
  const modifiedRef = String(imageRef)
    .replace("file-", "")
    .replace("image-", "")
    .replace("-jpg", ".jpg")
    .replace("-jpeg", ".jpeg")
    .replace("-webp", ".webp")
    .replace("-png", ".png")
    .replace("-mp4", ".mp4")
    .replace("-webm", ".webm")
    .replace("-ogg", ".ogg");
  const baseUrl = "https://cdn.sanity.io/images/o6m3g8fo/production/";
  return baseUrl + modifiedRef;
};
