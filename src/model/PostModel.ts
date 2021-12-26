import UserModel from "./UserModel";

interface PostModel {
    id: string;
    content: string;
    user: UserModel;
    likeCount: number;
    createDate: string;
}

export default PostModel;