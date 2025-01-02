import { BASE_URL, COLLECTION_ITALY } from '@/config/config';
import Photo from '@/components/Photo/Photo';
import Title from '@/components/Gallery/Title/Title';
import Gallery from '@/components/Gallery/Gallery';
import Hero from '@/components/Gallery/Hero/Hero';
import DoubleRow from '@/components/Gallery/DoubleRow/DoubleRow';
import TripleRow from '@/components/Gallery/TripleRow/TripleRow';

// CAPTIONS
const captionEmpty = <div />;

// Function to generate full image URLs for CollectionFive
const getImageUrl = (imageName: string): string => `${BASE_URL}/${COLLECTION_ITALY}/${imageName}`;

// IMAGES (loaded from S3)
const imageOne = <Photo image={getImageUrl('Autumn_WE-1.jpg')} caption={captionEmpty} />;
const imageTwo = <Photo image={getImageUrl('Autumn_WE-2.jpg')} caption={captionEmpty} />;
const imageThree = <Photo image={getImageUrl('Autumn_WE-3.jpg')} caption={captionEmpty} />;
const imageFour = <Photo image={getImageUrl('Autumn_WE-6.jpg')} caption={captionEmpty} />;
const imageFive = <Photo image={getImageUrl('Autumn_WE-7.jpg')} caption={captionEmpty} />;
const imageSix = <Photo image={getImageUrl('Autumn_WE-8.jpg')} caption={captionEmpty} />;
const imageSeven = <Photo image={getImageUrl('Autumn_WE-9.jpg')} caption={captionEmpty} />;

// TITLE Section
export const title = <Title title="Piedmont" />;

// HERO Section
const heroText =
  'As the sun dipped below the horizon, we embarked on a warm, balmy evening in Lausanne, finding ourselves at a quaint wine bar nestled amidst late 19th-century and early 20th-century buildings. The ever-cheerful Luis, eagerly anticipating his summer holiday, welcomed us. We sipped a refined, white wine made with the grape varieties in Corsica, its crisp freshness immediately cooling us in the warm evening air, while seated on slightly slanted chairs outside and surrounded by patrons enjoying platters of cold meats and cheeses. The air was filled with the anticipation of a long summer, occasionally punctuated by soft and upbeat music from inside the establishment. As the golden hour bathed everything in soft, beautiful light, the charming buildings opposite, one adorned with a vintage parasol, evoked a distinct Mediterranean vibe. For a moment, we felt transported beyond Switzerland, leaving with the lingering sensation of a brief, delightful escape on an otherwise regular Wednesday evening.';

export const heroSection = <Hero heroText={heroText} />;

// GALLERY
export const gallery = (
  <Gallery>
    <DoubleRow componentOne={imageOne} componentTwo={imageFive} />
    <TripleRow componentOne={imageFour} componentTwo={imageThree} componentThree={imageSix} />
    <DoubleRow componentOne={imageTwo} componentTwo={imageSeven} />
  </Gallery>
);
