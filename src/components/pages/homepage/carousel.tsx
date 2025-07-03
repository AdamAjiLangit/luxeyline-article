'use client'

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselImage() {
    const images = Array.from({ length: 5 }).map((_, i) => `/assets/images/carousel-${i + 1}.jpg`)

    return (
        <Carousel className="w-full mx-auto mb-24 cursor-grab">
            <CarouselContent className="px-3">
                {images.map((img, index) => (
                    <CarouselItem
                        key={index}
                        className="sm:basis-1/2 md:basis-1/3 pl-2"
                    >
                        <div className="">
                            <Card className="overflow-hidden py-0">
                                <CardContent className="relative aspect-[2/1.3] p-0">
                                    <Image
                                        src={img}
                                        alt={`Image ${index + 1}`}
                                        fill
                                        className="object-cover w-full h-full rounded-md"
                                        loading={index >= 3 ? 'lazy' : 'eager'}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
