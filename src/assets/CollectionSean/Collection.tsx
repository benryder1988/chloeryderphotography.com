import { BASE_URL, COLLECTION_SEAN } from '@/config/config';
import Photo from '@/components/Photo/Photo';
import Title from '@/components/Gallery/Title/Title';
import Gallery from '@/components/Gallery/Gallery';
import Hero from '@/components/Gallery/Hero/Hero';
import DoubleRow from '@/components/Gallery/DoubleRow/DoubleRow';
import SingleRow from '@/components/Gallery/SingleRow/SingleRow';
import PortraitLandscapeRow from '@/components/Gallery/PortraitLandscapeRow/PortraitLandscapeRow';

// CAPTIONS
const captionEmpty = <div />;

// Function to generate full image URLs for CollectionFive
const getImageUrl = (imageName: string): string => `${BASE_URL}/${COLLECTION_SEAN}/${imageName}`;

// IMAGES (loaded from S3)
const imageOne = <Photo image={getImageUrl('Autumn_WE-23.jpg')} caption={captionEmpty} />;
const imageTwo = <Photo image={getImageUrl('Autumn_WE-29.jpg')} caption={captionEmpty} />;
const imageThree = <Photo image={getImageUrl('Autumn_WE-31.jpg')} caption={captionEmpty} />;
const imageFour = <Photo image={getImageUrl('Autumn_WE-32.jpg')} caption={captionEmpty} />;
const imageFive = <Photo image={getImageUrl('Autumn_WE-40.jpg')} caption={captionEmpty} />;

// TITLE Section
export const title = <Title title="Kung Fu Portraits" />;

// HERO Section
const heroText =
  'As the sun dipped below the horizon, we embarked on a warm, balmy evening in Lausanne, finding ourselves at a quaint wine bar nestled amidst late 19th-century and early 20th-century buildings. The ever-cheerful Luis, eagerly anticipating his summer holiday, welcomed us. We sipped a refined, white wine made with the grape varieties in Corsica, its crisp freshness immediately cooling us in the warm evening air, while seated on slightly slanted chairs outside and surrounded by patrons enjoying platters of cold meats and cheeses. The air was filled with the anticipation of a long summer, occasionally punctuated by soft and upbeat music from inside the establishment. As the golden hour bathed everything in soft, beautiful light, the charming buildings opposite, one adorned with a vintage parasol, evoked a distinct Mediterranean vibe. For a moment, we felt transported beyond Switzerland, leaving with the lingering sensation of a brief, delightful escape on an otherwise regular Wednesday evening.';

export const heroSection = <Hero heroText={heroText} />;

// GALLERY
export const gallery = (
  <Gallery>
    <PortraitLandscapeRow componentOne={imageTwo} componentTwo={imageFour} />
    <SingleRow componentOne={imageOne} />
    <DoubleRow componentOne={imageThree} componentTwo={imageFive} />
  </Gallery>
);
