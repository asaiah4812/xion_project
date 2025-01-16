import Card from "@/components/Card";
import LinearCard from "@/components/linearCard";
import ModalButton from "@/components/Modal";
import Feeds from "@/utils/data";

export default function Home() {
  return (
    <div className="w-full p-4">
      <div>
      <ModalButton/>
      </div>
      <LinearCard/>
    </div>
  );
}
