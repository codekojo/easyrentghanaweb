import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import firstImage from "../assets/1.png";
import secondImage from "../assets/2.png";
import thirdImage from "../assets/3.png";
import fourthImage from "../assets/4.png";
import fifthImage from "../assets/5.png";
import sixthImage from "../assets/6.png";
import seventhImage from "../assets/7.png";

const imageComponent = [
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
  sixthImage,
  seventhImage,
];

export function MainCarousel() {
  return (
    <Carousel
      className="w-full max-w-sm"
      opts={{
        loop: true,
        align: "center",
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="-ml-1 my-5">
        {imageComponent.map((image, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-4/6">
            <div className="p-1">
              <img src={image} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
