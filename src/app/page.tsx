import Image from "next/image";

export default function Home() {
  return (
    <div >
      <header className="h-16 bg-zinc-500">
      </header>


    <div className="flex">
      <div className=" mt-36 ml-20 mr-4 ">
      <h1 className= "text-4xl font-bold shadow-lg shadow-yellow-300 ">Welcome To Our Website</h1>
       <p className="mt-7 font-medium tracking-wider " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum quos, 
          consequatur dicta neque eaque aspernatur? Tempore eveniet, laborum nisi, 
          veritatis animi omnis dolorem numquam incidunt minus voluptate, ab quia..</p>
          <button className="w-32 h-10 bg-yellow-300 text-black text-center mt-8
          border-2 border-zinc-500">
            Contact US</button>
          </div>


          <div className="mt-24 mr-12">
            <Image src={"/picture/figma.jpg"} alt="main-image"
            width={1300} height={2100}></Image>
          </div>

</div>
    </div>
  );
}
