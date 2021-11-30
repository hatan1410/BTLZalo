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
}

export const apiService = new ApiService();