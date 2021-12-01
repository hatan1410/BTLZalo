import FakeApiModel from "../model/FakeApiModel";
import { Fetch } from "./fetch";

class ApiService {
    getFakeApi = async (postId: number) => {
        return await Fetch.get<FakeApiModel[]>('comments', { 
            params: {
                postId: postId,
            }
        });
    };

    getFakeApi2 = async () => {
        return await Fetch.get<FakeApiModel[]>('comments');
    };
}

export const apiService = new ApiService();