import { IoMdClose } from "react-icons/io";

interface JungleProps {
  jungleImages: string[];
  onDelete: (imageURL: string) => void;
}

const Jungle = ({ jungleImages, onDelete }: JungleProps) => {
  return (
    <div className="w-[90%] mx-auto flex flex-wrap justify-start items-center gap-5">
      {jungleImages.map((img, i) => (
        <div className="relative w-32 h-32 border border-solid border-white">
          <img className="object-cover h-full w-full" key={i} src={img} />
          <button
            className="absolute bottom-0 right-0 bg-white"
            onClick={() => onDelete(img)}
          >
            <IoMdClose className="w-6 h-6 text-red-600" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Jungle;
