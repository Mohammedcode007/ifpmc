import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: number;
  created: string;
  modified: string;
  name: string;
  name_en: string;
  name_ar: string;
  content: string;
  content_en: string;
  content_ar: string;
  image: string;
  popularity_count: number;
  category: number;
  author: number[];
  tags: number[];
}

interface Publication {
  id: number;
  created: string;
  modified: string;
  name: string;
  name_en: string;
  name_ar: string;
  content: string;
  content_en: string;
  content_ar: string;
  popularity_count: number;
  category: number;
  author: number[];
  tags: number[];
}

interface ResultsSearchType {
  projects: Project[];
  publications: Publication[];
}

interface SearchState {
  data: ResultsSearchType | null;
}

const initialState: SearchState = {
  data: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setResultsSearch: (state, action: PayloadAction<ResultsSearchType>) => {
      state.data = action.payload;
    },
    clearResultsSearch: (state) => {
      state.data = null;
    },
  },
});

export const { setResultsSearch, clearResultsSearch } = searchSlice.actions;

export default searchSlice.reducer;
