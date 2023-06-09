import Link from "next/link";
import Image from "next/image";
import userPhoto from '../images/userProfile.jpg'

const ProfileCard = (props: any) => {
  return (
    <div className="max-w-md bg-gray-700 text-white flex flex-col items-center p-12 rounded-md">
      <Image
        alt="profile picture"
        className="w-24 h-24 rounded-full"
        src={userPhoto}
      ></Image>
      <span className="font-bold py-2">Julius Caesar</span>
      <span className="text-xs font-light py-1">Product Designer</span>
      <Link
        className="bg-[#94A3B8] rounded-md !my-2 py-2 px-8 text-xs"
        href={"/edit-profile"}
      >
        Edit Profile
      </Link>
    </div>
  );
};
export default ProfileCard;
