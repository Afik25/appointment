import { createSlice } from "@reduxjs/toolkit";

export const organizationSlice = createSlice({
  name: "setUpOrganization",
  initialState: {
    initOrganizations: {},
    initEntities: {},
    initDepartments: {},
    initServices: {},
  },
  reducers: {
    getOrganizations: (state, action) => {
      state.initOrganizations = {
        organizationsData: action.payload,
      };
    },
    getEntities: (state, action) => {
      state.initEntities = {
        entitiesData: action.payload,
      };
    },
    getDepartments: (state, action) => {
      state.initDepartments = {
        departmentsData: action.payload,
      };
    },
    getServices: (state, action) => {
      state.initServices = {
        servicesData: action.payload,
      };
    },
  },
});
