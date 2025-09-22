import AXIOS_API from "@/utlis/AxiosApi";

export async function createNewListing(data: {}, imageUrls: string[]) {
  const { data: newListing } = await AXIOS_API.post("/create", {
    ...data,
    imageUrls,
  });
  return newListing;
}
