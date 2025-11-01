import { useState, useEffect } from 'react';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';

export const useGetCallById = (id: string | string[]) => {
    const [call, setCall] = useState<Call | undefined>();
    const [isCallLoading, setIsCallLoading] = useState(true);

    const client = useStreamVideoClient();

    useEffect(() => {
        if (!client) return;

        const loadCall = async () => {
            try {
                setIsCallLoading(true);
                const { calls } = await client.queryCalls({
                    filter_conditions: {
                        id
                    }
                });

                if (!calls.length) {
                    throw new Error('Call not found');
                }

                setCall(calls[0]);
            } catch (error) {
                console.error('Error loading call:', error);
            } finally {
                setIsCallLoading(false);
            }
        };

        loadCall();
    }, [client, id]);

    return { call, isCallLoading };
};