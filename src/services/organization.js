import {
  ENTITIES,
  ENTITIES_BY_ORGANIZATION,
  DEPARTMENTS_BY_ORGANIZATION,
  DEPARTMENTS,
  SERVICES_BY_ORGANIZATION,
} from "../routes";

// Entity
export function onCreateEntity(axiosPrivate, data) {
  const _data = {
    organization_id: data.organization_id,
    type: data.type,
    telephone: data.telephone,
    mail: data.mail,
    address: data.address,
  };
  return new Promise(async (resolve, reject) => {
    await axiosPrivate
      .post(ENTITIES, _data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function onGetEntitiesByOrganization(
  organization_id,
  axiosPrivate,
  signal
) {
  return new Promise(async (resolve, reject) => {
    await axiosPrivate
      .get(ENTITIES_BY_ORGANIZATION + "/" + organization_id, {
        signal: signal,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function onUpdateEntity(axiosPrivate, data) {
  const _data = {
    telephone: data.telephone,
    mail: data.mail,
    address: data.address,
  };
  const id = data.entity_id;
  return new Promise(async (resolve, reject) => {
    await axiosPrivate
      .put(ENTITIES + "/" + id, _data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function onEnabledEntity(axiosPrivate, data) {
  const stat = data.stat;
  const id = data.id;
  return new Promise(async (resolve, reject) => {
    await axiosPrivate
      .delete(ENTITIES + "/" + stat + "/" + id, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
// Department
export function onCreateDepartment(axiosPrivate, data) {
  const _data = {
    entity_id: data.entity_id,
    title: data.title,
  };
  return new Promise(async (resolve, reject) => {
    await axiosPrivate
      .post(DEPARTMENTS, _data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function onGetDepartmentByOrganization(
  organization_id,
  axiosPrivate,
  signal
) {
  return new Promise(async (resolve, reject) => {
    await axiosPrivate
      .get(DEPARTMENTS_BY_ORGANIZATION + "/" + organization_id, {
        signal: signal,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function onUpdateDepartment(axiosPrivate, data) {
  const _data = {
    telephone: data.telephone,
    mail: data.mail,
    address: data.address,
  };
  const id = data.entity_id;
  return new Promise(async (resolve, reject) => {
    await axiosPrivate
      .put(ENTITIES + "/" + id, _data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function onEnabledDepartment(axiosPrivate, data) {
  const stat = data.stat;
  const id = data.id;
  return new Promise(async (resolve, reject) => {
    await axiosPrivate
      .delete(ENTITIES + "/" + stat + "/" + id, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
// Service
export function onCreateService(axiosPrivate, data) {
  const _data = {
    organization_id: data.organization_id,
    type: data.type,
    telephone: data.telephone,
    mail: data.mail,
    address: data.address,
  };
  return new Promise(async (resolve, reject) => {
    await axiosPrivate
      .post(ENTITIES, _data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function onGetServicesByOrganization(
  organization_id,
  axiosPrivate,
  signal
) {
  return new Promise(async (resolve, reject) => {
    await axiosPrivate
      .get(SERVICES_BY_ORGANIZATION + "/" + organization_id, {
        signal: signal,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function onUpdateService(axiosPrivate, data) {
  const _data = {
    telephone: data.telephone,
    mail: data.mail,
    address: data.address,
  };
  const id = data.entity_id;
  return new Promise(async (resolve, reject) => {
    await axiosPrivate
      .put(ENTITIES + "/" + id, _data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function onEnabledService(axiosPrivate, data) {
  const stat = data.stat;
  const id = data.id;
  return new Promise(async (resolve, reject) => {
    await axiosPrivate
      .delete(ENTITIES + "/" + stat + "/" + id, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
