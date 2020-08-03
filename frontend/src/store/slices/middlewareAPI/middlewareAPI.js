import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFeaturedProjects, getProjects, getSubFields, 
  getProjectDetails, getProfile, postUpdateAccount,
  putCreateProject, postUpdateProject } from './fetchAPI';

export const fetchFeaturedProject = createAsyncThunk(
    'project/fetchFeaturedProject',
    async (thunkAPI) => {
      const featuredProjects = await getFeaturedProjects();
      return featuredProjects;
    }
)

export const fetchProjects = createAsyncThunk(
  'project/Projects',
  async (parameters, thunkAPI) => {
    if (!Array.isArray(parameters)) {
      throw new Error('"parameters" must be an object of "parameter name" and "parameter value" pairs');
    }
    const response = await getProjects(parameters);
    return response;
  }
)

export const fetchSubFields = createAsyncThunk(
  'project/Subfields',
  async (fieldname, thunkAPI) => {
    const response = await getSubFields(fieldname);
    return response;
  }
)

export const fetchProjectDetails = createAsyncThunk(
  'project/Details',
  async (projectID, thunkAPI) => {
    const response = await getProjectDetails(projectID);
    return response;
  }
)

// For the profile we use the sub value of the auth0 user object as the foreign key
export const fetchProfile = createAsyncThunk(
  'account/Profile',
  async (sub, thunkAPI) => {
    const response = await getProfile(sub);
    return response;
  }
)

export const sendUpdateAccount = createAsyncThunk(
  'account/UpdateAccount',
  async ({ data, authToken }, thunkAPI) => {
    console.log(data, authToken, thunkAPI)
    const response = await postUpdateAccount(data, authToken);
    return response;
  }
)


export const createProject = createAsyncThunk(
  'project/Create',
  async ({ data, authToken }, thunkAPI) => {
    const response = await putCreateProject(data, authToken);
    return response;
  }
)

export const sendUpdateProject = createAsyncThunk(
  'account/UpdateAccount',
  async ({ data, authToken, projectID }, thunkAPI) => {
    const response = await postUpdateProject(data, authToken, projectID);
    return response;
  }
)
