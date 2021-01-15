import { Tag } from '../tag';

export interface PostRequestPayload {
    username: string;
    title: string;
    blurb: string;
    fulltext: string;
    imagelink: string;
    tags: Tag[]; // how are we gonna do this? Convert to tags before we send it?
}