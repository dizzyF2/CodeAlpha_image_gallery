import Filters from "./components/Filters";
import ImageGallery from "./components/ImageGallery";





export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-8 p-24">
        <h1 className="font-bold text-4xl capitalize text-[rgba(254,44,85,1)]">image gallery</h1>
        <Filters/>
        <ImageGallery/>
    </main>
  );
}
