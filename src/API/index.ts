let token = "865a5577b755f6780e037b26e5a26ecdf674190b";

export let options: RequestInit = {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Token ${token}`,
  },
};
