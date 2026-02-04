
import { BriefcaseBusiness } from "@/assets/svg/briefcase-business";
import { UsersIcon } from "@/assets/svg/users-icon";
import Container from "@/components/container";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CircleArrowUpIcon } from "lucide-react";
import Image from "next/image";
import StandardSedanImage from "@/assets/images/cars/standard-sedan-image.png"
import PremiumSedanImage from "@/assets/images/cars/premium-sedan-image.png"
import EconomyVanImage from "@/assets/images/cars/economy-van-image.png"
import PremiumVanImage from "@/assets/images/cars/premium-van-image.png"
import PremiumSuvImage from "@/assets/images/cars/premium-suv-image.png"
import LuxurySedanImage from "@/assets/images/cars/luxury-sedan-image.png"


 const CARS_LIST = [
  {
    id: "standard-sedan",
    title: "Standard Sedan",
    description: "Corolla, Toyota Prius, Camry, Ford Taurus or similar",
    image: StandardSedanImage,
    paxCount: 2,
    luggageCount: 3,
  },
  {
    id: "premium-sedan",
    title: "Premium  Sedan",
    description: "Mercedes E Class, BMW 5 Series,Audi A6, VW Passat, Lexus",
    image: PremiumSedanImage,
    paxCount: 2,
    luggageCount: 3,
  },
  {
    id: "economy-van",
    title: "Economy Van",
    description: "Opel Vivaro, Volkswagen Caravelle, Ford, Honda Odyssey",
    image: EconomyVanImage,
    paxCount: 5,
    luggageCount: 5,
  },
  {
    id: "premium-van",
    title: "Premium Van",
    description: "Mercedes Viano/V Class,Toyota Alphard, Toyota Vellfire",
    image: PremiumVanImage,
    paxCount: 5,
    luggageCount: 5,
  },
  {
    id: "premium-suv",
    title: "Premium SUV",
    description: "GMC, Cadillac Escalade, Suburban, Chevrolet Tahoe ",
    image: PremiumSuvImage,
    paxCount: 5,
    luggageCount: 5,
  },
  {
    id: "luxury-sedan",
    title: "Luxury Sedan",
    description: "Mercedes S Class,BMW 7 Series, Audi A8 or similar",
    image: LuxurySedanImage,
    paxCount: 2,
    luggageCount: 3,
  },
] ;

export default function OurFleets() {


  return (
    <section
      id="chauffeur-category"
      className="bg-[#F7F7F8] max-w-[100vw] overflow-x-hidden py-10"
    
    >
      <Container>
        <header className="text-center">
          <h2
            className="text-fleets-text pb-3 text-xl font-bold md:text-[2rem] xl:text-[2.5rem]"
          >
            Our fleets
          </h2>
          <p
            className="text-fleets-description text-base md:text-xl"
          >
        Reliable vehicles, carefully selected for every journey type.
          </p>
        </header>
          <Carousel
          opts={{ containScroll: "trimSnaps" }}
          className="mt-10 flex flex-col gap-x-4 select-none xl:gap-x-6 2xl:mt-15 [&_[data-slot=carousel-content]]:overflow-visible"
        >
          <CarouselContent className="m-2 gap-x-4">
            {CARS_LIST.map((vehicle, index) => (
              <CarouselItem
                key={index}
                className="group relative max-w-[20rem] basis-1/1 space-y-3 rounded-xl border border-[#F6EEEF] bg-white p-3 transition-shadow duration-300 hover:rounded-xl hover:shadow-[0_0_30px_0_rgba(96,96,96,0.20)] md:basis-1/2 xl:basis-1/4 xl:px-3 xl:py-4 2xl:basis-1/4"
              >
                  {vehicle.image && (
                  <div className="bg-[#F7F7F8] relative flex h-50 items-center justify-center rounded-lg p-5">
                    <Image
                      fill
                      priority
                      src={vehicle.image}
                      alt={vehicle.title}
                      className="w-auto object-contain p-7"
                    />
                  </div>
                )}
                <h3 className="mb-1 text-base font-semibold text-black md:text-xl">
                  {vehicle.title}
                </h3>
                <p className="text-fleets-description text-sm md:text-base xl:text-sm">
                  {vehicle.description}
                </p>

              

                <div className="flex justify-between pt-2.5 xl:pt-4">
                  <div className="flex gap-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#F7F7F8] rounded-full p-2">
                        <UsersIcon className="text-drivado-red size-4 xl:size-5 [&_path]:stroke-[1.5]" />
                      </span>
                      <p className="text-fleets-description text-xs font-medium md:text-base xl:text-sm">
                        {vehicle.paxCount} Pax
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#F7F7F8] rounded-full p-2">
                        <BriefcaseBusiness className="text-drivado-red size-4 xl:size-5" />
                      </span>
                      <p className="text-fleets-description text-xs font-medium md:text-base xl:text-sm">
                        {vehicle.luggageCount} Luggage
                      </p>
                    </div>
                  </div>

                  <CircleArrowUpIcon className="stroke-fleets-text group-hover:text-drivado-red size-6 rotate-45 stroke-[0.75] xl:size-8" />
               
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex w-full justify-end gap-4">
            <CarouselPrevious className="static hover:cursor-pointer" />
            <CarouselNext className="static hover:cursor-pointer" />
          </div>
        </Carousel>
      </Container>
    </section>
  );
}
