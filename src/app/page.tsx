import ImageGallery from "./components/ImageGallery";





export default function Home() {
  return (
    <main className="flex flex-col items-center gap-2 pt-24">
        <h1 className="font-bold text-4xl capitalize text-[rgba(254,44,85,1)]">image gallery</h1>
        <ImageGallery/>
    </main>
  );
}
