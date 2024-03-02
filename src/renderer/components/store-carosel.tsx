import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { games } from '../data/games';
import { Button } from '@/components/ui/button';

export function StoreCarosel() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full p-4 max-w-2xl max-h-lg justify-center"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
            <div className="p-2">
              <Card>
                <CardContent className="flex items-center justify-center p-6 aspect-video">
                  <img src={games[index].cover} alt={games[index].name} />
                </CardContent>
                <CardFooter className="w-full flex justify-between">
                  <CardDescription>{games[index].name}</CardDescription>
                  <Button>{'Buy For: ' + games[index].price + ' $'}</Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
