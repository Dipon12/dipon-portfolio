import Image from "next/image";

const ProfileHeading = () => {
  const socialIcons = [
    // { name: "facebook", icon: "./facebook.svg", url: "http://facebook.com" },
    { name: "github", icon: "./github.svg", url: "http://facebook.com" },
    { name: "linkedIn", icon: "./linkedIn.svg", url: "http://facebook.com" },
    { name: "skype", icon: "./skype.svg", url: "http://facebook.com" },
    { name: "twitterx", icon: "./twitterx.svg", url: "http://facebook.com" },
    { name: "Google_Scholar_logo", icon: "./Google_Scholar_logo.svg", url: "http://facebook.com" },
    { name: "ResearchGate_icon_SVG", icon: "./ResearchGate_icon_SVG.svg", url: "http://facebook.com" },
  ];
    return (
        <div className="text-[#333333] flex flex-col lg:flex-row lg:justify-between">
          <div>
          <h1 className="font-semibold text-4xl mb-1">Dipon Talukder</h1>
          <p className="text-gray-600 text-32">Senior Assessment Developer at </p>
          <p className="text-gray-600 text-32">Senior Assessment Developer at </p>
          <p className="text-gray-600 text-32">Senior Assessment Developer at </p>
          </div>
          <div className="flex space-x-3 mt-4">
          {socialIcons.map((social) => (
            <>
              <a
                href={social.url}
                className="text-blue-600 hover:text-blue-800"
              >
                {/* <SocialLogo icon="linkedin" size={ 48 } /> */}
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={48}
                  height={48}
                  // objectFit="scale-down"
                  className="object-scale-down"
                />
              </a>
            </>
          ))}
        </div>
        </div>
    )
}
export default ProfileHeading;