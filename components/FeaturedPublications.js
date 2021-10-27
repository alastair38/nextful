import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedPublications(props) {
  const featPubs = props.fields.featuredPublications;
  return (
    <>
      <div className="w-4/5 mx-auto my-16">
        <h2 className="col-span-full text-3xl font-bold text-center">
          {props.fields.title}
        </h2>

        {featPubs.map((pub, i) => (
          <div
            key={pub.sys.id}
            className="w-4/5 mx-auto grid md:grid-cols-2 gap-4 md:gap-16 my-12 place-items-center"
            data-row={i + 1}
          >
            <div>
              <h3 className="text-2xl font-bold">{pub.fields.title}</h3>
              <Link href={'/publications/' + pub.fields.slug}>
                <a className="mt-6 ring-4 ring-gray-200 hover:ring-green-200 focus:ring-green-200 transition-colors px-4 rounded-full shadow-sm inline-flex items-center">
                  Find our more
                </a>
              </Link>
            </div>
            <div className="flex flex-col rounded shadow-2xl relative h-full border-8 border-white text-green-700 w-full max-h-56">
              <Image
                className="object-cover"
                src={`https:${pub.fields.featuredImage.fields.file.url}`}
                width={pub.fields.featuredImage.fields.file.details.image.width}
                height={
                  pub.fields.featuredImage.fields.file.details.image.height
                }
                alt={pub.fields.featuredImage.fields.description}
                layout="intrinsic"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
