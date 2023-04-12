import { Carousel } from "react-responsive-carousel";
import fs from "fs";
// var fs = require('fs');
import Image from "next/image";

export default function Media_Carousel(props) {
  console.log('Carousel')
  // console.log(props)
  // console.log(props.folder)
  // let folder = props.folder;
  // console.log(folder)
  // const files = fs.readdirSync(folder);
  // console.log(files)
  // const media = files.map((filename) => {
  //   return filename;
  // });
  // console.log(media);

  return (
    <Carousel>
      {/* {}
      <div>
        <Image
          // className={}
          alt="thumbnail"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="scale-down"
        />
      </div> */}
    </Carousel>
  );
}
