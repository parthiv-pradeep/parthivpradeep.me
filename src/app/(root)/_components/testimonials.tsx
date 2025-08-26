import { Marquee } from "@/components/magicui/marquee";

import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    jobTitle: "HTML developer to create HTML pages from Existing UI and Design kit",
    rating: 5.0,
    dueDate: "Jul 10, 2025 - Jul 22, 2025",
    body: "Parthiv was a pleasure to work with. He delivered pixel-perfect HTML pages ahead of schedule and communicated clearly throughout the project. Highly recommended for any front-end work!",
  },
  {
    jobTitle: "Expert CSS to change existing HTML to Web Mobile design - Refer attach ppt",
    rating: 5.0,
    dueDate: "Jun 15, 2025 - Jun 28, 2025",
    body: "Parthiv transformed our desktop site into a beautiful, responsive mobile experience. He was proactive with suggestions and always quick to respond. Will definitely hire again!",
  },
  {
    jobTitle: "HTML developer to create HTML pages from Existing UI and Design kit",
    rating: 5.0,
    dueDate: "Aug 1, 2025 - Aug 8, 2025",
    body: "Outstanding work! Parthiv completed the job before the deadline and exceeded our expectations. His attention to detail and professionalism stood out. Looking forward to future projects together.",
  },
  {
    jobTitle: "Fix problem in TailwindCSS layout",
    rating: 5.0,
    dueDate: "Jul 1, 2025 - Jul 3, 2025",
    body: "Parthiv quickly identified and fixed a tricky layout bug in our TailwindCSS project. The solution was clean and well-documented. Great experience!",
  },
  {
    jobTitle: "Clone web component in TailwindCSS",
    rating: 5.0,
    dueDate: "Jun 25, 2025 - Jun 27, 2025",
    body: "Impressive speed and accuracy. Parthiv cloned a complex web component flawlessly and provided helpful notes for our team. Will work with him again!",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  jobTitle,
  rating,
  dueDate,
  body,
}: {
  jobTitle: string;
  rating: number;
  dueDate: string;
  body: string;
}) => {
  return (
    <div className="relative h-fit max-w-sm cursor-pointer overflow-hidden rounded-xl p-4 border space-y-2.5">
      <h2 className="font-medium mb-2.5 text-sm text-green-600">{jobTitle}</h2>

      <div className="flex items-center gap-4">
        <div className="flex items-center text-xs">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
          ))}
          <span className="font-medium ml-2">{rating}.00</span>
          <span className="text-muted-foreground ml-3">{dueDate}</span>
        </div>
      </div>

      <p className="text-sm">&quot;{body}&quot;</p>
      <Image src="/upwork.png" width={50} height={50} alt="Upwork Company" />
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
