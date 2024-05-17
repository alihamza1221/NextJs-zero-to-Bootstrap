import { Message } from "@/model/UserModel";

export interface ApiResponse {
  success: boolean;
  status: number;
  isAcceptingMessages?: boolean;
  message?: Array<Message> | string;
}
