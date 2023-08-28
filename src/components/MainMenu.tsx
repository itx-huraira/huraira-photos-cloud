import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
const MainMenu = () => {
  return (
    <div className=" bg-orange-500">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/">
          <Image src={logo} alt="cloud logo" />
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <Avatar>
            <AvatarImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4e-s5X-GvFhqWMUBNQiD5b3rsczCmzu3_g&usqp=CAU"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
