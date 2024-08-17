interface ButtonProps {
  label: string;
  className?: string;
  pdfUrl?: string;
}
const Button = ({ label, className, pdfUrl }: ButtonProps) => {
  // const handleDownload = () => {
  //     if (!pdfUrl) {
  //       return;
  //     }

  //     const link = document.createElement("a");
  //     link.href = pdfUrl;
  //     link.download = "";
  //     link.click();
  //   };

  return (
    <>
      <a href={pdfUrl || "#"}>
        <button
          type="button"
          className="text-white bg-primary
         hover:bg-primary/80  font-medium rounded-lg 
         text-sm px-5 py-2.5 w-fit
          text-center inline-flex items-center "
        >
          <span className="mr-2"> {label}</span>
          <svg
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </button>
      </a>
    </>
  );
};

export default Button;
