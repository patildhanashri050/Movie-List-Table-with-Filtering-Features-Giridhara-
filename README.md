*Bootstrap. This app allows users to view, search, filter, add, edit, and delete movies. All custom movies are stored in **localStorage*, ensuring persistence across page reloads.

---

##  Features

- *Fetch Movies from API*  
  Loads initial movie data from a public movie dataset hosted on GitHub.

- *Add / Edit Movies*  
  Users can create a new movie or update an existing one using a popup modal form.

- *Image Upload Support*  
  Upload a thumbnail image and preview it instantly before saving.

- *Search Filter*  
  Easily search movies by title.

- *Genre Filter*  
  Filter movies by genre using a dynamic dropdown.

- *Pagination*  
  Movies are displayed in pages of 20 for better readability.

- *Movie Table*  
  Clean table layout showing title, year, cast, genres, thumbnail, and actions.

- *LocalStorage Support*  
  Only user-created movies are stored to avoid heavy storage usage.

- *Popup Modal Component*  
  Custom popup built using React Portals.

- *Responsive UI*  
  Works seamlessly across mobile, tablet, and desktop screens.

---

## Technologies Used

- *React* (Functional Components + Hooks)  
- *React Router* for navigation  
- *Bootstrap 5* for UI styling  
- *LocalStorage* for user movies  
- *Fetch API* to load initial movie data  
- *React Portals* for popup modals  

---

## Installation

1. *Clone the repository:*

```bash
git clone <your-repository-url>
cd movie-list-react