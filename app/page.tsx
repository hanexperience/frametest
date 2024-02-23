import { getFrameMetadata} from 'coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
	buttons: [
		{
			label: "Begin"
		}
	]
	image: '$process.evn.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmXmHQhnYoWwZAqV1778UyBQN7gdNcCuze3Fm3bL1HzVcx/newsletter.mp4}',
	post_url: '${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id1',
});

export const metadata: Metadata = {
	title: 'HERE & NOW NEWSLETTER',
	description: 'A newsletter',
	opengraph: {
		title: 'HERE & NOW NEWSLETTER', 
		images: ['${process.evn.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmZpvstBtTsxkpfEaBghLorVYcvLKVnx2tK5Y8BBZ5RPug/1.jpg}']
	},
	other: {
		...frameMetadata
	},
};