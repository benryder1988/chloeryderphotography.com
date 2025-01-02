import { BASE_URL, COLLECTION_TWO } from '@/config/config';
import Photo from '@/components/Photo/Photo';
import Title from '@/components/Gallery/Title/Title';
import Gallery from '@/components/Gallery/Gallery';
import TripleRow from '@/components/Gallery/TripleRow/TripleRow';
import Hero from '@/components/Gallery/Hero/Hero';
import DoubleRow from '@/components/Gallery/DoubleRow/DoubleRow';

// CAPTIONS
const captionEmpty = <div />;

// Function to generate full image URLs for CollectionTwo
const getImageUrl = (imageName: string): string => `${BASE_URL}/${COLLECTION_TWO}/${imageName}`;

// IMAGES (loaded from S3)
const imageOne = <Photo image={getImageUrl('Zurich_Home-1.jpg')} caption={captionEmpty} />;
const imageTwo = <Photo image={getImageUrl('Zurich_Home-2.jpg')} caption={captionEmpty} />;
const imageThree = <Photo image={getImageUrl('Zurich_Home-3.jpg')} caption={captionEmpty} />;
const imageFour = <Photo image={getImageUrl('Zurich_Home-4.jpg')} caption={captionEmpty} />;
const imageSix = <Photo image={getImageUrl('Zurich_Home-6.jpg')} caption={captionEmpty} />;
const imageSeven = <Photo image={getImageUrl('Zurich_Home-7.jpg')} caption={captionEmpty} />;
const imageEight = <Photo image={getImageUrl('Zurich_Home-8.jpg')} caption={captionEmpty} />;
const imageNine = <Photo image={getImageUrl('Zurich_Home-9.jpg')} caption={captionEmpty} />;

// TITLE Section
export const title = <Title title="Home in Zurich" />;

// HERO Section
const heroText =
  'We opted for a charming retreat at our family home on the outskirts of Zurich, embracing one of the hottest summer days we’ve yet experienced. Perched on the top floor beneath a slanted roof, the apartment was an oven of summer heat, compelling us to seek refuge on the balcony. Sheltered by a crimson parasol, we whiled away our days in leisurely relaxation, going through old books kept by our parents or grandparents and savoring simple, cold meals al fresco, paired with crisp Zurich white wines recommended by local sommeliers. The balcony offered a comforting and familiar view of apple trees, nearby farms, and rolling hills in the distance. Each evening, we enjoyed the serenity of the sun setting, its golden light gently casting its glow on the rooftops of neighboring buildings.';

export const heroSection = <Hero heroText={heroText} />;

// GALLERY
export const gallery = (
  <Gallery>
    <TripleRow componentOne={imageEight} componentTwo={imageOne} componentThree={imageNine} />
    <DoubleRow componentOne={imageTwo} componentTwo={imageThree} />
    <TripleRow componentOne={imageFour} componentTwo={imageSeven} componentThree={imageSix} />
  </Gallery>
);
