"use client"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";


export const galleryImages1 = [
  { src: "image1.jpeg", alt: "image 1" },
  { src: "image2.jpeg", alt: "image 2 " },
  { src: "image3.jpeg", alt: "image 3 " },
  { src: "image4.jpeg", alt: "image 4 " },
  { src: "image5.jpeg", alt: "image 5 " },
  { src: "image6.jpeg", alt: "image 6 " },
];


export const galleryImages2 =[
  { src: "data1.png", alt: "Data Image 1" },
  { src: "data2.png", alt: "Data Image 2" },
  { src: "data3.png", alt: "Data Image 3" },
  { src: "data4.png", alt: "Data Image 4" },
  { src: "data5.png", alt: "Data Image 5" },
  { src: "data6.png", alt: "Data Image 6" },
  { src: "data7.png", alt: "Data Image 7" },
  { src: "data8.png", alt: "Data Image 8" },
  { src: "data9.png", alt: "Data Image 9" },
]

export default function Home() {



  return (
    <div className="min-h-screen bg-zinc-50 text-black font-sans max-w-full">
      <div className="flex md:space-x-60">
        <img src="./IIT_Ropar_Logo.png" alt="IIT_Ropar_Logo" className="size-20 md:size-30 ml-4 mt-3" />
        <h1 className="text-2xl md:text-4xl font-extrabold italic text-center w-1/2 tracking-tight text-green-800 md:py-10 border-4 h-fit mt-5 md:px-2 bg-green-200 border-blue-500 rounded-2xl">
          Sustainable Solutions for Parali Management in Punjab
        </h1>
      </div>
      <div className="text-center mt-4">
        <h2 className="text-2xl font-semibold font-serif italic">Introduction</h2>
        <div className="flex w-2/3 text-center mx-auto">
          <h3 className="font-semibold">Problem: </h3>
          <span>Punjab generates over 20 million tons of paddy straw residue annually. Despite a 90% decline since 2021, 1,642 burning incidents were reported through October 2025, with hotspots like Tarn Taran and Sangrur accounting for 62% of cases from just 6% of villages.
          </span>
        </div>
        <div className="flex w-2/3 text-center mx-auto">
          <h3 className="font-semibold">Solution: </h3>
          <li>
            Waste-to-Value Chain: Establish government buy-back centers where farmers sell parali at ₹500-1,000/ton, exchanging it for subsidized fertilizers. Pilot in 50 villages with projected 20% income boost for participating farmers.
          </li>
          <li>
            On-Farm Processing
            : Provide compost and vermicompost kits for small plots (0.1-0.5 acres). Train 100 farmers per village in 2-3 month cycles to produce 5-10 tons per hectare, generating ₹10,000-15,000 extra income annually.
          </li>
          <li>
            Employment Generation
            : Create community processing hubs hiring local workers at ₹200-300/day for baling, shredding, and processing operations. Integrate with MGNREGA funding to generate 500 jobs per district.
          </li>
        </div>
        <InfiniteMovingCards
          items={galleryImages1}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          items={galleryImages2}
          direction="left"
          speed="slow" 
          className="space-x-4 gap-x-5"
        />
          <h1 className="font-bold mt-10">Made by: </h1>
          <div className="flex space-x-5 text-center justify-center">
            <li>Chaitanya Kalme</li>
            <li>Keshav Arora</li>
            <li>Badri Narayan</li>
            <li>Brajesh Khokad</li>
            <li>Ayush Sonika</li>
            <li>Tushar Waghmare</li>
            <li>Priyanshu</li>
            <li>Prem</li>
            <li>Sumit Sharma</li>

          </div>

      </div>
    </div>
  );
}
