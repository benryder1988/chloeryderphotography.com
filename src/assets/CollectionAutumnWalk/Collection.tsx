import { BASE_URL, COLLECTION_AUTUMN_WALK } from '@/config/config';
import Photo from '@/components/Photo/Photo';
import Title from '@/components/Gallery/Title/Title';
import Gallery from '@/components/Gallery/Gallery';
import Hero from '@/components/Gallery/Hero/Hero';
import DoubleRow from '@/components/Gallery/DoubleRow/DoubleRow';

// CAPTIONS
const captionEmpty = <div />;

// Function to generate full image URLs for CollectionFive
const getImageUrl = (imageName: string): string => `${BASE_URL}/${COLLECTION_AUTUMN_WALK}/${imageName}`;

// IMAGES (loaded from S3)
const imageOne = <Photo image={getImageUrl('Autumn-1.jpg')} caption={captionEmpty} />;
const imageTwo = <Photo image={getImageUrl('Autumn-10.jpg')} caption={captionEmpty} />;
const imageThree = <Photo image={getImageUrl('Autumn-11.jpg')} caption={captionEmpty} />;
const imageFour = <Photo image={getImageUrl('Autumn-2.jpg')} caption={captionEmpty} />;
const imageFive = <Photo image={getImageUrl('Autumn-4.jpg')} caption={captionEmpty} />;
const imageSix = <Photo image={getImageUrl('Autumn-8.jpg')} caption={captionEmpty} />;

// TITLE Section
export const title = <Title title="An Autumn Walk" />;

// HERO Section
const heroText =
  'As the sun dipped below the horizon, we embarked on a warm, balmy evening in Lausanne, finding ourselves at a quaint wine bar nestled amidst late 19th-century and early 20th-century buildings. The ever-cheerful Luis, eagerly anticipating his summer holiday, welcomed us. We sipped a refined, white wine made with the grape varieties in Corsica, its crisp freshness immediately cooling us in the warm evening air, while seated on slightly slanted chairs outside and surrounded by patrons enjoying platters of cold meats and cheeses. The air was filled with the anticipation of a long summer, occasionally punctuated by soft and upbeat music from inside the establishment. As the golden hour bathed everything in soft, beautiful light, the charming buildings opposite, one adorned with a vintage parasol, evoked a distinct Mediterranean vibe. For a moment, we felt transported beyond Switzerland, leaving with the lingering sensation of a brief, delightful escape on an otherwise regular Wednesday evening.';

export const heroSection = <Hero heroText={heroText} />;

// GALLERY
export const gallery = (
  <Gallery>
    <DoubleRow componentOne={imageFour} componentTwo={imageOne} />
    <DoubleRow componentOne={imageThree} componentTwo={imageTwo} />
    <DoubleRow componentOne={imageSix} componentTwo={imageFive} />
  </Gallery>
);
