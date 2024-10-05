### Project Structure for Vite.js Application

Here’s the code structure of the application you described:

```plaintext
├── src
│   ├── api
│   │   ├── data.json
│   │   ├── http.ts
│   │   └── mock.ts
│   ├── assets
│   │   ├── react.svg
│   │   └── style
│   │       └── index.css
│   ├── components
│   │   ├── Preview.tsx
│   │   ├── Card.tsx
│   │   ├── Loader.tsx
│   │   └── RenderIf.tsx
│   ├── hooks
│   │   └── useGetCat.ts
│   ├── main.tsx
│   ├── pages
│   │   └── Home.tsx
│   ├── utils
│   │   └── useCatDataService.ts
└── README.md
```

### Description of Each File and Folder:

1. **`src/api/data.json`**: This file contains the static JSON data with all the document types.

   ```json
   [
     { "type": "bank draft", "title": "Bank Draft", "position": 0 },
     { "type": "bill-of-lading", "title": "Bill of Lading", "position": 1 },
     { "type": "invoice", "title": "Invoice", "position": 2 },
     { "type": "bank-draft-2", "title": "Bank Draft 2", "position": 3 },
     { "type": "bill-of-lading-2", "title": "Bill of Lading 2", "position": 4 }
   ]
   ```

2. **`src/api/http.ts`**: Responsible for making HTTP calls (mocked for now).

   ```ts
   export const fetchData = async () => {
     const response = await fetch("/api/data.json");
     return response.json();
   };
   ```

3. **`src/api/mock.ts`**: Placeholder to mock the backend responses.

4. **`src/assets/react.svg`**: Placeholder image (or thumbnail) used for documents.

5. **`src/assets/style/index.css`**: CSS file for basic styling of cards, layout, and overlay functionality.

6. **`src/components/Preview.tsx`**: Component for showing the full preview of the document image as an overlay when a card is clicked.

7. **`src/components/Card.tsx`**: Card component responsible for displaying the document type, title, and thumbnail.

8. **`src/components/Loader.tsx`**: Loader spinner component for the image loading placeholder.

9. **`src/components/RenderIf.tsx`**: Utility component to conditionally render JSX based on conditions.

10. **`src/hooks/useGetCat.ts`**: Custom hook for fetching the document data from `data.json`.

11. **`src/main.tsx`**: Main entry point for the app, where React is rendered.

12. **`src/pages/Home.tsx`**: Home page where the cards are displayed, and drag-and-drop functionality is implemented.

13. **`src/utils/useCatDataService.ts`**: Service utility to abstract fetching and managing the document data.

### Instructions in `README.md`:

````md
# Vite.js Document Viewer with Drag-and-Drop Functionality

This project allows users to display document cards based on static JSON data, view images as overlays, and reorder them using drag-and-drop. The project uses React and Vite.js for fast development.

## Project Structure

- `src/api/`: Contains the static JSON file and HTTP service for fetching the data.
- `src/assets/`: Assets like images and styles.
- `src/components/`: Reusable components like `Card`, `Loader`, and `Preview`.
- `src/hooks/`: Custom hooks for fetching data.
- `src/pages/`: Page components (e.g., `Home` page).
- `src/utils/`: Utility functions and services.

## How to Run the Application

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
````

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. The application will be running on `http://localhost:3000`.

## Features

- **Card Display**: Displays document types in a card layout, showing 3 cards in the first row and 2 cards in the second.
- **Drag-and-Drop**: Allows users to reorder the cards via drag-and-drop functionality.
- **Image Preview**: Clicking on a card shows the full image as an overlay. Press `ESC` to close the overlay.
- **Loading Spinner**: Shows a placeholder spinner while images are loading.


```
