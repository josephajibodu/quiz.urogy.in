export interface QuestionnaireData {
    created_at: string;
    diagnosis: string;
    sui_score: number;
    uui_score: number;
}

export interface InvitationData {
    created_at: string;
    expire_at: string;
    id: number;
    lastused_at: string | null;
    link: string | null;
    playlist: {
        link: string;
        id: string;
    };
    questionnaire: QuestionnaireData;
    token: string;
    updated_at: string;
    viewed: number;
}

interface Thumbnail {
    default: {
        url: string;
        width: number;
        height: number;
    };
    medium: {
        url: string;
        width: number;
        height: number;
    };
    high: {
        url: string;
        width: number;
        height: number;
    };
    standard: {
        url: string;
        width: number;
        height: number;
    };
    maxres: {
        url: string;
        width: number;
        height: number;
    };
}

interface ResourceId {
    kind: string;
    videoId: string;
}

interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnail;
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: ResourceId;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
}

interface ContentDetails {
    videoId: string;
    videoPublishedAt: string;
}

interface PlaylistItem {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
    contentDetails: ContentDetails;
}

export interface PlaylistData {
    kind: string;
    etag: string;
    items: PlaylistItem[];
}


