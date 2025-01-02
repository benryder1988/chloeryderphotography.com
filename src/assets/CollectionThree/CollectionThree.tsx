import { BASE_URL, COLLECTION_THREE } from '@/config/config';
import Photo from '@/components/Photo/Photo';
import Title from '@/components/Gallery/Title/Title';
import Gallery from '@/components/Gallery/Gallery';
import TripleRow from '@/components/Gallery/TripleRow/TripleRow';
import Hero from '@/components/Gallery/Hero/Hero';
import DoubleRow from '@/components/Gallery/DoubleRow/DoubleRow';
import PortraitLandscapeRow from '@/components/Gallery/PortraitLandscapeRow/PortraitLandscapeRow';

// CAPTIONS
const captionEmpty = <div />;

// Function to generate full image URLs for CollectionThree
const getImageUrl = (imageName: string): string => `${BASE_URL}/${COLLECTION_THREE}/${imageName}`;

// IMAGES (loaded from S3)
const imageOne = <Photo image={getImageUrl('Zurich_Edition-1.jpg')} caption={captionEmpty} />;
const imageTwo = <Photo image={getImageUrl('Zurich_Edition-2.jpg')} caption={captionEmpty} />;
const imageThree = <Photo image={getImageUrl('Zurich_Edition-3.jpg')} caption={captionEmpty} />;
const imageFour = <Photo image={getImageUrl('Zurich_Edition-4.jpg')} caption={captionEmpty} />;
const imageFive = <Photo image={getImageUrl('Zurich_Edition-5.jpg')} caption={captionEmpty} />;
const imageSix = <Photo image={getImageUrl('Zurich_Edition-6.jpg')} caption={captionEmpty} />;
const imageSeven = <Photo image={getImageUrl('Zurich_Edition-7.jpg')} caption={captionEmpty} />;
const imageEight = <Photo image={getImageUrl('Zurich_Edition-8.jpg')} caption={captionEmpty} />;
const imageNine = <Photo image={getImageUrl('Zurich_Edition-9.jpg')} caption={captionEmpty} />;
const imageTen = <Photo image={getImageUrl('Zurich_Edition-10.jpg')} caption={captionEmpty} />;

// TITLE Section
export const title = <Title title="Zurich" />;

// HERO Section
const heroText =
  'Over the weekend, we set out to discover the summer charm of Zurich. Meandering through the old town, we admired the historic buildings in their soft, faded hues. Swiss flags fluttered along the side streets, hinting at the upcoming Swiss National Day on August 1st.\n' +
  "As evening approached, we found ourselves in Zurich's stylish quarter, where art galleries, artisanal shops, and local producers blend seamlessly with a relaxed, creative ambiance. We dined al fresco, savoring Peruvian delicacies in a quaint roundabout surrounded by inviting eateries. From zesty ceviche and plant-based creations to succulent sea bass, each dish was complemented by a refreshing orange wine that added a unique twist to our meal.\n" +
  "The following morning, we stumbled upon a charming backyard café, complete with a central fountain and white parasols casting gentle shade. We enjoyed our brunch amidst the soothing sound of the fountain's splash, basking in a lazy Sunday vibe. At the café's rear, a wine bar awaited, ready to welcome guests for a leisurely lunch or a delightful aperitif.";

export const heroSection = <Hero heroText={heroText} />;

// GALLERY
export const gallery = (
  <Gallery>
    <PortraitLandscapeRow componentOne={imageSix} componentTwo={imageSeven} />
    <TripleRow componentOne={imageEight} componentTwo={imageOne} componentThree={imageNine} />
    <DoubleRow componentOne={imageTen} componentTwo={imageThree} />
    <TripleRow componentOne={imageFive} componentTwo={imageFour} componentThree={imageTwo} />
  </Gallery>
);
