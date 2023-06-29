import { FormEvent, useEffect, useState } from "react";
import Jungle from "./component/Jungle";

const App = () => {
  const [imageURL, setImageURL] = useState<string>("");
  const [jungleImages, setJungleImages] = useState<string[]>([]);

  useEffect(() => {
    const jungleImagesJson = localStorage.getItem("jungleImages");
    setJungleImages(jungleImagesJson ? JSON.parse(jungleImagesJson) : []);
  }, []);

  function handleAddJungle(e: FormEvent) {
    e.preventDefault();
    setJungleImages((prevState) => [imageURL, ...prevState]);
    localStorage.setItem(
      "jungleImages",
      JSON.stringify([imageURL, ...jungleImages])
    );
    setImageURL("");
  }

  function handleDeleteImage(imageURL: string) {
    setJungleImages((prevState) =>
      prevState.filter((item) => item !== imageURL)
    );
    localStorage.setItem(
      "jungleImages",
      JSON.stringify(jungleImages.filter((item) => item !== imageURL))
    );
  }

  return (
    <div className="h-screen bg-[#191919]">
      <form
        className="flex flex-col items-center justify-center gap-3 mb-10"
        onSubmit={handleAddJungle}
      >
        <label className="text-white" htmlFor="jungle">
          Enter URL image of a jungle
        </label>
        <input
          type="url"
          id="jungle"
          className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setImageURL(e.target.value)}
          value={imageURL}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </form>

      <Jungle jungleImages={jungleImages} onDelete={handleDeleteImage} />
    </div>
  );
};

export default App;
