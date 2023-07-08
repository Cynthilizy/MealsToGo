import { Platform } from "react-native";

export const isAndroid = Platform.OS === "android";
export const isMock = true;

const liveHost = "https://us-central1-mealstogo-b8369.cloudfunctions.net";
const localHost =
  "https://acfc-2001-14ba-6067-900-649a-e260-b78d-3b3a.ngrok-free.app/mealstogo-b8369/us-central1";

export const IsDevelopment = process.env.NODE_ENV === "development";

export const Host = IsDevelopment ? localHost : liveHost;
