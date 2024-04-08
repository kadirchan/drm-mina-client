'use client';
import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { ChevronLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate, useParams } from 'react-router-dom';
import { useGamesStore } from '../lib/stores/gameStore';
import { Separator } from '@/components/ui/separator';

const ENDPOINT = 'http://localhost:8080/';

export default function GameDetail() {
  const { gameName } = useParams();
  console.log(gameName);
  const navigate = useNavigate();

  const gameStore = useGamesStore();

  const game = gameStore.games.find((game) => game.name === gameName);

  return (
    <div>
      <div className=" grid grid-cols-5 w-full p-4">
        <div className=" col-span-3 h-full mt-8">
          <Button
            variant={'outline'}
            onClick={() => navigate('/store')}
            className=" ml-4"
          >
            <ChevronLeft size={24} /> Back to Store
          </Button>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full p-4 justify-center"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, i) => (
                <CarouselItem key={i}>
                  <img
                    src={ENDPOINT + game?.cover}
                    crossOrigin="anonymous"
                    alt="Game"
                    className="w-full h-full object-cover aspect-video"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className=" h-full col-span-2 px-4">
          <div className=" flex flex-col items-center h-full p-8 mt-8 justify-between">
            <h1 className=" text-3xl font-bold p-4">{game?.name}</h1>
            <div className=" text-base mt-8">{game?.description}</div>

            <div>Total Reviews: 5 (4.3)</div>

            <div>
              {Array.from(game?.tags || []).map((tag, index) => (
                <Badge key={index} className=" rounded-lg mx-1">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4 ">
              <div className=" flex flex-row mt-8 p-2 gap-4 border border-gray-300 rounded-lg">
                <div className=" flex gap-1 justify-center items-center ">
                  {game?.discount || 0 > 0 ? (
                    <>
                      <div className=" text-lg text-discount bg-discount rounded-lg p-1">
                        -%
                        {Math.floor(
                          ((game?.discount || 0) / (game?.price || 1)) * 100,
                        )}
                      </div>
                      <span className="text-base strikethrough text-gray-500 px-2">
                        {game?.price}
                      </span>
                    </>
                  ) : (
                    <></>
                  )}
                  <span className="text-base">
                    {game?.price - game?.discount}
                  </span>
                  <img
                    src={'/mina.png'}
                    alt="mina"
                    className=" w-4 h-4 inline-block"
                  />
                </div>
                <Button
                  variant={'default'}
                  onClick={() => {
                    window.electron.ipcRenderer.sendMessage(
                      'redirect-buy-game',
                      [game?.name],
                    );
                  }}
                >
                  Buy Game
                </Button>
              </div>
              <Button variant={'link'} className="">
                <Download size={24} />
                Download Game
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-1/3 p-8">
        <h3 className=" font-semibold">Recommended System Requirements</h3>
        <Separator />
        <div className=" text-base mt-4">
          <ul>
            <li>Processor: Intel Core i5-3570K</li>
            <li>Memory: 8 GB RAM</li>
            <li>Graphics: GeForce GTX 780</li>
            <li>Storage: 10 GB available space</li>
          </ul>
        </div>
      </div>
      {/* <CommentSection /> */}
    </div>
  );
}
