import { BASE_URL, COLLECTION_FOUR } from '@/config/config';
import Photo from '@/components/Photo/Photo';
import Title from '@/components/Gallery/Title/Title';
import Gallery from '@/components/Gallery/Gallery';
import TripleRow from '@/components/Gallery/TripleRow/TripleRow';
import Hero from '@/components/Gallery/Hero/Hero';
import DoubleRow from '@/components/Gallery/DoubleRow/DoubleRow';

// CAPTIONS
const captionEmpty = <div />;

// Function to generate full image URLs for CollectionFour
const getImageUrl = (imageName: string): string => `${BASE_URL}/${COLLECTION_FOUR}/${imageName}`;

// IMAGES (loaded from S3)
const imageThree = <Photo image={getImageUrl('Gruyeres-3.jpg')} caption={captionEmpty} />;
const imageFour = <Photo image={getImageUrl('Gruyeres-4.jpg')} caption={captionEmpty} />;
const imageFive = <Photo image={getImageUrl('Gruyeres-5.jpg')} caption={captionEmpty} />;
const imageTen = <Photo image={getImageUrl('Gruyeres-10.jpg')} caption={captionEmpty} />;
const imageThirteen = <Photo image={getImageUrl('Gruyeres-13.jpg')} caption={captionEmpty} />;
const imageSixteen = <Photo image={getImageUrl('Gruyeres-16.jpg')} caption={captionEmpty} />;
const imageNineteen = <Photo image={getImageUrl('Gruyeres-19.jpg')} caption={captionEmpty} />;
const imageTwentyThree = <Photo image={getImageUrl('Gruyeres-23.jpg')} caption={captionEmpty} />;
const imageTwentyFour = <Photo image={getImageUrl('Gruyeres-24.jpg')} caption={captionEmpty} />;
const imageTwentyFive = <Photo image={getImageUrl('Gruyeres-25.jpg')} caption={captionEmpty} />;

// TITLE Section
export const title = <Title title="Gruyères" />;

// HERO Section
const heroText =
  'As the sun dipped below the horizon, we embarked on a warm, balmy evening in Lausanne, finding ourselves at a quaint wine bar nestled amidst late 19th-century and early 20th-century buildings. The ever-cheerful Luis, eagerly anticipating his summer holiday, welcomed us. We sipped a refined, white wine made with the grape varieties in Corsica, its crisp freshness immediately cooling us in the warm evening air, while seated on slightly slanted chairs outside and surrounded by patrons enjoying platters of cold meats and cheeses. The air was filled with the anticipation of a long summer, occasionally punctuated by soft and upbeat music from inside the establishment. As the golden hour bathed everything in soft, beautiful light, the charming buildings opposite, one adorned with a vintage parasol, evoked a distinct Mediterranean vibe. For a moment, we felt transported beyond Switzerland, leaving with the lingering sensation of a brief, delightful escape on an otherwise regular Wednesday evening.';

export const heroSection = <Hero heroText={heroText} />;

// GALLERY
export const gallery = (
  <Gallery>
    <DoubleRow componentOne={imageTwentyFour} componentTwo={imageTwentyFive} />
    <TripleRow componentOne={imageThree} componentTwo={imageFive} componentThree={imageFour} />
    <DoubleRow componentOne={imageTen} componentTwo={imageSixteen} />
    <TripleRow componentOne={imageTwentyThree} componentTwo={imageNineteen} componentThree={imageThirteen} />
  </Gallery>
);
