import MainLayout from "@/components/layout/main";
import { usePageContext } from "@/contexts/pageContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const WeChat = () => {
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const { id } = router?.query;
  const { setId } = usePageContext();

  useEffect(() => {
    if (id) {
      setId(id as string);
    } else {
      return;
    }
  }, [id]);

  const handleCopyClick = () => {
    const textToCopy = "kali-linux01";

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <MainLayout style={"bg-[#1c1c1c]"}>
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center text-white">
        <div className="mb-10">WeChat Name: UnknownOne76</div>
        <button onClick={handleCopyClick} className="mt-10 hover:transition-transform hover:ease-in-out hover:duration-100 hover:border-b-2 border-yellow-500">Copy my WeChat ID</button>
        {copied && <div>WeChat ID has been copied!</div>}
      </div>
    </MainLayout>
  );
};

export default WeChat;
