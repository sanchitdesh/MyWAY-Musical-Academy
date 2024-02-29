"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Learn to play the guitar like a pro with our comprehensive masterclass. From basics to advanced techniques, this course covers it all.",
    name: "Guitar Masterclass",
    title: "Instructor: John Smith"
  },
  {
    quote:
      "Start your musical journey with our beginner-friendly piano course. No prior experience required!",
    name: "Piano for Beginners",
    title: "Instructor: Emily Johnson"
  },
  {
    quote:
      "Discover your voice and improve your singing skills with our singing essentials course. Suitable for all levels.",
    name: "Singing Essentials",
    title: "Instructor: Sarah Lee"
  },
  {
    quote:
      "Learn the ins and outs of music production with our hands-on workshop. Create your own tracks and beats from scratch.",
    name: "Music Production Workshop",
    title: "Instructor: Mike Davis"
  },
  {
    quote:
      "Master the fundamentals of music theory and enhance your understanding of music composition and performance.",
    name: "Music Theory Fundamentals",
    title: "Instructor: Rachel Adams"
  },
  {
    quote:
      "Become a skilled DJ with our comprehensive mixing techniques course. Perfect for aspiring DJs and enthusiasts alike.",
    name: "DJ Mixing Techniques",
    title: "Instructor: Alex Thompson"
  }
];

function InfiniteMoveCards() {
  return (
    <div className="h-[40rem] w-full  dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear Our Harmony: Voices of Success
      </h2>
      <div className="w-full flex justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            direction="right"
            speed="slow"
            items={testimonials}
          />
        </div>
      </div>
    </div>
  );
}

export default InfiniteMoveCards;
