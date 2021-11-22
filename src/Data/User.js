import http from "./http";

const getALl = async () => {
  const { data } = await http.get();
  return data;
};

const get = async (id) => {
  const { data } = await http.get(id);
  return data;
};

const post = async (newUser) => {
  const res = await http.post({ body: JSON.stringify(newUser) });
  return res;
};

const put = async (id, user) => {
  const res = await http.put(id, { body: JSON.stringify(user) });
  return res;
};

const remove = async (id) => {
  const res = await http.delete(id);
  return res;
};

export default {
  getALl,
  get,
  create: post,
  update: put,
  delete: remove,
};
