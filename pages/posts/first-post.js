import Link from "next/link";
import Image from "next/image";

const FirstPost = () => {
  return (
    <>
      <Image
        src="/images/killer-mike-john-henry.png"
        height={144}
        width={210}
        alt="The Blk Smth"
      />

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default FirstPost;
