export const modifyUrl = (ref: string, isImage: boolean) => {
  const modifiedRef = ref
    .replace("file-", "")
    .replace("image-", "")
    .replace("-jpg", ".jpg")
    .replace("-jpeg", ".jpeg")
    .replace("-webp", ".webp")
    .replace("-png", ".png")
    .replace("-mp4", ".mp4")
    .replace("-webm", ".webm")
    .replace("-ogg", ".ogg");

  const baseUrl = isImage
    ? "https://cdn.sanity.io/images/o6m3g8fo/production/"
    : "https://cdn.sanity.io/files/o6m3g8fo/production/";

  return baseUrl + modifiedRef;
};
