import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 sm:grid-cols-2 ">
        <div className="flex flex-col gap-5">
          <h1 className="h1-bold">
           Host,Connect, 
           Celebrate: Your Events
          </h1>
          <p className="p-regular-20">
            Create and manage your events with ease. Connect with your guests and make unforgettable memories.
          </p>
          <Button className="font-bold">
            <Link href='#event'>
               Explore Now
            </Link>
          </Button>
        </div>
        <Image
        src='/company-event.png'
        alt="image"
        width={900}
        height={1000}
        className="rounded-lg object-contain object-center max-h-[70vh] 2xl:max-h-[50vh]"
        />
      </div>
     </section>
     <section className="wrapper">
      
       
     </section>
    </>


  );
}
