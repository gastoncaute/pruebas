export async function getApis() {
  const res = await fetch(
    "https://o6m3g8fo.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27info%27%5D",
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (res.ok) {
    const data = await res.json();
    if (data && data.result) {
      return data.result;
    } else {
      return [];
    }
  } else {
    throw new Error("Error getting data from server");
  }
}
