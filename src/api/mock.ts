import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

export interface ICatData {
  type: string;
  title: string;
  position: number;
  thumbnail: string;
}

export const handlers = [
  http.get("https://example.com/cats", () => {
    return HttpResponse.json<ICatData[]>([
      {
        type: "bank draft",
        title: "Bank Draft",
        position: 0,
        thumbnail:
          "https://static.vecteezy.com/system/resources/thumbnails/024/646/930/small_2x/ai-generated-stray-cat-in-danger-background-animal-background-photo.jpg",
      },
      {
        type: "bill-of-lading",
        title: "Bill of Lading",
        position: 1,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNlMllnsEkM4--m_EpFpvWn3nM67YsexJ3w&s",
      },
      {
        type: "invoice",
        title: "Invoice",
        position: 2,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UOW09a8y-Ue_FtTFn01C4U4-dZmIax-P_g&s",
      },
      {
        type: "bank-draft-2",
        title: "Bank Draft 2",
        position: 3,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aBhloyMLx5qA6G6wSEi0s9AvDu1r7utrbQ&s",
      },
      {
        type: "bill-of-lading-2",
        title: "Bill of Lading 2",
        position: 4,
        thumbnail: "https://i.pinimg.com/736x/99/6c/a6/996ca6d41ae979589d3f50e0967cdcb9.jpg",
      },
    ]);
  }),
];
export const worker = setupWorker(...handlers);

export async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  return worker.start();
}
