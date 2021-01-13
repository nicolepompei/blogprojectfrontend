export interface PostRequestPayload {
    username: string;
    title: string;
    blurb: string;
    fulltext: string;
    imagelink: string;
    tags: string; // how are we gonna do this? Convert to tags before we send it?
}