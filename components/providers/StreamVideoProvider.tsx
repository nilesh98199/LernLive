'use client';

import { StreamVideoProvider as StreamVideoProviderComponent } from '@stream-io/video-react-sdk';
import { StreamVideoClient } from '@stream-io/video-react-sdk';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!;
const token = process.env.NEXT_PUBLIC_STREAM_TOKEN!;

const client = new StreamVideoClient({ apiKey, token });

export const StreamVideoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StreamVideoProviderComponent client={client}>
      {children}
    </StreamVideoProviderComponent>
  );
}; 