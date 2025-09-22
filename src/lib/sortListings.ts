export function calcAndSortListing(listings: any) {
  const sortedListings = listings
    .map((item) => {
      if (item.reviews.length === 0) return { ...item, avgRating: 0 };

      const avgRating = item.reviews.reduce((a: any, b: any) => {
        return a + b.stars;
      }, 0);
      return { ...item, avgRating: Number(avgRating.toFixed(2)) };
    })
    .sort((a: any, b: any) => b.avgRating - a.avgRating);

  return sortedListings;
}
