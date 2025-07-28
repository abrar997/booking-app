import BestHotels from "@/components/best-hotels/BestHotels";
import Hero from "@/components/hero/Hero";
import PopularLocations from "@/components/popular-locations/PopularLocations";
import sea from "../../public/assets/sea.jpg";
import hotel from "../../public/assets/hr_10.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        image={sea}
        mainHeader="Are you ready for adventure ?"
        secondaryHeader="Browse throw the popular location"
        buttonLinkHref="/"
        buttonLinkText="start Now"
      />
      <PopularLocations />
      <Hero
        image={hotel}
        mainHeader="Get the best offer for your hotel"
        secondaryHeader="Pick up your desired place"
        buttonLinkHref="/"
        buttonLinkText="start Now"
      />
      <BestHotels />
    </div>
  );
}
