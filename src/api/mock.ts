import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

interface ICatData {
  type: string;
  title: string;
  position: number;
}

export const handlers = [
  http.get("https://example.com/cats", () => {
    return HttpResponse.json<ICatData[]>([
      { type: "bank draft", title: "Bank Draft", position: 0 },
      { type: "bill-of-lading", title: "Bill of Lading", position: 1 },
      { type: "invoice", title: "Invoice", position: 2 },
      { type: "bank-draft-2", title: "Bank Draft 2", position: 3 },
      { type: "bill-of-lading-2", title: "Bill of Lading 2", position: 4 },
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
