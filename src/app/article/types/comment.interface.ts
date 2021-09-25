import { ProfileInterface } from "src/app/shared/types/profile.interface";

export interface CommentInterface {
    id: number;
    body: string;
    createdAt: string;
    updatedAt: string;
    author: ProfileInterface
}