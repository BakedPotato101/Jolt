import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaseball, faBasketball, faFootball } from "@fortawesome/free-solid-svg-icons";
import ToggleDarkMode from "./ToggleDarkMode";
export default function Header() {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-orange-500 text-white text-center absolute h-20 w-full flex justify-around items-center">
      <FontAwesomeIcon className="size-12" icon={faBaseball} />
      <FontAwesomeIcon className="size-12" icon={faBasketball} />
      <p className="text-3xl">JOLT</p>
      <FontAwesomeIcon className="size-12" icon={faFootball} />
      <ToggleDarkMode />
    </div>
  );
}