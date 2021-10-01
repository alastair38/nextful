import Link from 'next/link';
import Image from 'next/image';

export default function PublicationsCard({ publication }) {
  const { title, slug, featuredImage, excerpt } = publication.fields;

  return (
    <div className="overflow-hidden ring-4 ring-gray-200 rounded">
      <div className="featured object-fit md:h-60 overflow-hidden">
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          alt={featuredImage.fields.description}
        />
      </div>
      <div className="p-6">
        <div className="info">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="pt-4">{excerpt}</p>
        </div>
        <div className="pt-8">
          <Link href={'/publications/' + slug}>
            <a
              aria-label={`Read ${title}`}
              className="bg-red-200 px-6 py-2 rounded-full shadow-sm inline-flex items-center"
            >
              Read article
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
