import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export default function Hero(props) {
  console.log(props.fields);
  return (
    <>
      <div className="bg-gray-800 text-white cta-bg p-24 gap-6 my-16 shadow-2xl w-3/4 mx-auto rounded-lg grid place-items-center">
        <h2 className="text-4xl font-bold">{props.fields.title}</h2>
        <div className="flex">
          <Image
            className="object-cover rounded-full"
            src={`https:${props.fields.featuredImage.fields.file.url}`}
            width={125}
            height={125}
            alt={props.fields.featuredImage.fields.description}
            layout="intrinsic"
          />
        </div>
        <div className="max-w-prose text-xl text-white text-center italic">
          {documentToReactComponents(props.fields.description)}
        </div>
      </div>
    </>
  );
}
