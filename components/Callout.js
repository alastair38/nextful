import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export default function Callout(props) {
  console.log(props);
  return (
    <>
      <div className="w-3/4 mx-auto grid md:grid-cols-2 py-20 place-items-center">
        <h2 className="text-4xl md:text-8xl mb-8 md:mb-0 first-letter:text-purple-900 font-bold lg:-mr-36 z-10">
          {props.fields.title}
        </h2>
        <div className="featured relative flex items-center rounded-full lg:-ml-36 cta-bg p-12 h-60 w-60 md:h-96 md:w-96">
          <Image
            src={`https:${props.fields.featuredImage.fields.file.url}`}
            width={props.fields.featuredImage.fields.file.details.image.width}
            height={props.fields.featuredImage.fields.file.details.image.height}
            alt={props.fields.featuredImage.fields.description}
            layout="intrinsic"
          />
        </div>
      </div>
      {/* <div className="svg-container w-full">
        <svg
          className="fill-current text-green-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 280"
        >
          <path
            id="curve0"
            d="M0,199V33S190,153.92,499.5,153.92C990.58,153.92,1065,0,1427.25,0,1712.37,0,1887,61.28,1920,79.14V196Z"
            transform="translate(0, 90)"
          />
        </svg>
      </div> */}
    </>
  );
}
