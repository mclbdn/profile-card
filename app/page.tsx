import Image from "next/image";
import Link from "next/link";
import { ReactNode, SVGProps } from "react";

export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw] bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB] pt-[200px] flex justify-center">
      <ProfileCard />
    </div>
  );
}

const ProfileCard = () => {
  return (
    <div
      role="region"
      aria-labelledby="profile-name"
      aria-describedby="profile-description"
      className="text-center shadow-[0_1px_3px_0_rgba(0_0_0_0.1)] shadow-[0_1px_2px_0_rgba(0_0_0_0.6)] bg-white px-4 py-6 w-[340px] h-[428px] rounded-[8px]"
    >
      <Image
        priority
        quality={100}
        className="ml-auto mr-auto mb-6"
        src="/assets/profile.png"
        width={64}
        height={64}
        alt="Profile picture"
      />
      <p
        id="profile-name"
        className="text-[20px] text-neutral-900 font-medium mb-1"
      >
        Sarah Dole
      </p>
      <p id="profile-description" className="text-sm text-neutral-600 mb-6">
        Front End Engineer @ Microsoft
      </p>
      <p className="text-neutral-600 text-[16px] mb-10">
        I turn coffee into bugs which are fixed by someone else. Certified Stack
        Overflow and ChatGPT developer.
      </p>
      <button className="mb-6 hover:cursor-pointer bg-indigo-700 w-full h-11 text-[16px] font-medium rounded-sm hover:bg-indigo-800 enabled:focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)] enabled:drop-shadow-[0_1px_3px_rgba(0,0,0,0.1)] disabled:shadow-none disabled:text-neutral-400 disabled:bg-neutral-100">
        Contact me
      </button>

      <div className="flex justify-center gap-4">
        <SocialIconComponent ariaLabel="Visit Sarah's Github">
          <Github />
        </SocialIconComponent>
        <SocialIconComponent ariaLabel="Visit Sarah's LinkedIn">
          <Linkedin />
        </SocialIconComponent>
        <SocialIconComponent ariaLabel="Visit Sarah's Instagram">
          <Instagram />
        </SocialIconComponent>
        <SocialIconComponent ariaLabel="Visit Sarah's X (formerly Twitter)">
          <X />
        </SocialIconComponent>
      </div>
    </div>
  );
};

const SocialIconComponent = ({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel: string;
}) => {
  return (
    <Link
      aria-label={ariaLabel}
      href={"#"}
      className="w-9 h-9 hover:bg-neutral-50 flex justify-center align-middle items-center rounded-lg focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]"
    >
      {children}
    </Link>
  );
};

const Github = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#4338CA"
      d="M9 .667A8.331 8.331 0 0 0 .668 9a8.328 8.328 0 0 0 5.698 7.906c.417.073.573-.177.573-.396 0-.198-.01-.854-.01-1.552-2.094.386-2.636-.51-2.802-.979-.094-.24-.5-.979-.854-1.177-.292-.156-.709-.542-.01-.552.655-.01 1.124.604 1.28.854.75 1.26 1.948.906 2.428.688.072-.542.291-.907.53-1.115-1.853-.208-3.79-.927-3.79-4.114 0-.907.322-1.657.853-2.24-.083-.208-.375-1.063.084-2.208 0 0 .698-.22 2.291.854a7.733 7.733 0 0 1 2.084-.282c.708 0 1.416.094 2.083.282 1.594-1.084 2.292-.854 2.292-.854.458 1.145.166 2 .083 2.208.531.583.854 1.323.854 2.24 0 3.197-1.948 3.906-3.802 4.114.302.26.563.76.563 1.542 0 1.114-.01 2.01-.01 2.291 0 .22.155.48.572.396A8.347 8.347 0 0 0 17.334 9 8.331 8.331 0 0 0 9.001.667Z"
    />
  </svg>
);

const Linkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#4338CA"
      d="M13.28 13.283H11.06V9.802c0-.83-.017-1.898-1.158-1.898-1.158 0-1.335.903-1.335 1.837v3.542h-2.22V6.125h2.133v.976h.029c.298-.563 1.023-1.157 2.106-1.157 2.25 0 2.667 1.482 2.667 3.41v3.929ZM3.836 5.146c-.715 0-1.289-.58-1.289-1.291a1.288 1.288 0 1 1 2.58 0c0 .712-.579 1.29-1.29 1.29Zm1.114 8.137H2.723V6.125H4.95v7.158ZM14.391.5H1.608C.996.5.5.984.5 1.58v12.84c0 .597.495 1.08 1.107 1.08H14.39c.61 0 1.11-.483 1.11-1.08V1.58C15.5.985 15 .5 14.39.5h.001Z"
    />
  </svg>
);

const Instagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#4338CA"
      d="M9.857.667c.938.002 1.413.007 1.824.02l.161.005c.187.006.371.014.594.025.886.04 1.491.181 2.023.387a4.06 4.06 0 0 1 1.476.962c.462.463.749.928.961 1.476.206.53.346 1.136.388 2.023.01.222.018.406.024.593l.005.162c.013.41.018.886.02 1.824v1.713a65.503 65.503 0 0 1-.019 1.824l-.005.161-.025.594c-.041.886-.182 1.491-.388 2.023a4.071 4.071 0 0 1-.961 1.476c-.463.462-.93.749-1.476.961-.532.206-1.137.346-2.023.388-.223.01-.407.018-.594.024l-.162.005c-.41.013-.885.018-1.823.02H8.144a65.503 65.503 0 0 1-1.824-.019l-.162-.005a51.223 51.223 0 0 1-.593-.025c-.887-.041-1.491-.182-2.023-.388a4.076 4.076 0 0 1-1.476-.961 4.087 4.087 0 0 1-.962-1.476c-.206-.532-.345-1.137-.387-2.023l-.025-.594-.005-.162c-.012-.41-.018-.885-.02-1.823V8.144C.67 7.206.674 6.73.687 6.32l.005-.162c.006-.187.014-.371.025-.593.04-.888.181-1.492.387-2.023a4.066 4.066 0 0 1 .962-1.476 4.08 4.08 0 0 1 1.476-.962C4.073.898 4.677.76 5.565.717l.593-.025.162-.005c.41-.012.886-.018 1.824-.02h1.713ZM9 4.834a4.166 4.166 0 1 0 0 8.332 4.166 4.166 0 0 0 0-8.332ZM9 6.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm4.375-2.916a1.042 1.042 0 1 0 .001 2.084 1.042 1.042 0 0 0 0-2.084Z"
    />
  </svg>
);

const X = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#4338CA"
      d="M14.17.875h2.757l-6.022 6.883 7.085 9.367h-5.548l-4.345-5.68-4.971 5.68H.367L6.81 9.762.012.875h5.689l3.927 5.192L14.171.875Zm-.967 14.6h1.528L4.87 2.438H3.23l9.972 13.037Z"
    />
  </svg>
);
