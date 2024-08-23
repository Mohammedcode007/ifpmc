// services/api.js
import api from "./axiosConfig";

// Fetch categories
export const fetchCategories = async () => {
  try {
    const response = await api.get("/categories/");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const fetchHome = async () => {
  try {
    const response = await api.get("/home/");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
export const fetchTrainingLast = async () => {
  try {
    const response = await api.get("/trainings/last/");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
export const fetchMostRecentPublications = async () => {
  try {
    const response = await api.get("/publications/?sort=-id/");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
export const fetchMostPobulartPublications = async () => {
  try {
    const response = await api.get("/publications/?sort=-popularity_count/");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
// Fetch contacts
export const fetchContacts = async () => {
  try {
    const response = await api.get("/contacts/");
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

export const createContactUs = async (data) => {
  const response = await api.post("/settings/contact-us-pages/", data);
  return response.data;
};

// Fetch projects
export const fetchProjects = async () => {
  try {
    const response = await api.get("/projects/");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

// Fetch project by ID
export const fetchProjectById = async (id) => {
  try {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project with ID ${id}:`, error);
    throw error;
  }
};

// Fetch publications
export const fetchPublications = async () => {
  try {
    const response = await api.get("/publications/");
    return response.data;
  } catch (error) {
    console.error("Error fetching publications:", error);
    throw error;
  }
};

// Fetch publication by ID
export const fetchPublicationById = async (id) => {
  try {
    const response = await api.get(`/publications/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching publication with ID ${id}:`, error);
    throw error;
  }
};
