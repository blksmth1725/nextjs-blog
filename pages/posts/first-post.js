import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Box, Grid, GridItem } from "@chakra-ui/react";

const FirstPost = () => {
  const postData = {
    imageUrl: "/images/killer-mike-john-henry.png",
    userName: "Smitty",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus exercitationem sapiente ut aliquid perferendis fugiat? Sed temporibus repudiandae perferendis exercitationem iusto quae provident placeat ducimus dicta reprehenderit minus voluptates eius, eos maxime amet ex velit id soluta et! Nam natus nisi quasi iure numquam.",
  };
  return (
    <>
      <Grid
        h="300px"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(6, 1fr)"
      >
        <Head>
          <title>First Post</title>
        </Head>
        <GridItem rowSpan={4} colSpan={2}>
          <Box bgColor="tomato">
            <Image
              src={postData.imageUrl}
              height={144}
              width={210}
              alt="The Blk Smth"
            />
          </Box>
        </GridItem>

        <GridItem rowSpan={2} colSpan={4}>
          <Box>
            <p>{postData.postText}</p>
          </Box>
          <Box>
            <p>-{postData.userName}</p>
          </Box>
        </GridItem>

        <GridItem>
          <Box>
            <h2>
              <Link href="/">
                <a>back to home</a>
              </Link>
            </h2>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default FirstPost;
